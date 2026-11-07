"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { BEATS } from "@/lib/sip/timeline";
import {
  COCONUT,
  CAN,
  createCoconut,
  createCan,
  CoconutObject,
  CanObject,
} from "@/lib/sip/models";
import { getCartonTextures } from "@/lib/sip/carton";
import { boardThickness } from "@/lib/three/corrugated";
import { PackagingBox, BoxMotionState } from "@/components/3d/PackagingBox";
import { flavours } from "@/data/sip";
import { clamp, lerp, seg, easeInOut, easeOut } from "@/lib/utils";
import { useReducedMotion, useIsMobile, useQualityTier } from "@/lib/hooks";

interface StorySceneProps {
  progressRef: React.RefObject<number>;
  entranceRef: React.RefObject<number>;
  pointerRef: React.RefObject<{ x: number; y: number }>;
}

const PITCH = CAN.R * 2 + 0.03;
const BOARD = boardThickness(3, "B");
const CRATE = {
  w: PITCH * 3 + BOARD * 2 + 0.02,
  d: PITCH * 2 + BOARD * 2 + 0.02,
  h: CAN.H + BOARD + 0.05,
};

function easeIn(t: number): number {
  return t * t * t;
}

// Contact shadow texture for crate
let shadowTexture: THREE.CanvasTexture | null = null;
function getContactShadowTexture(): THREE.CanvasTexture {
  if (shadowTexture) return shadowTexture;
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createRadialGradient(128, 128, 10, 128, 128, 120);
  grad.addColorStop(0, "rgba(23, 21, 18, 0.55)");
  grad.addColorStop(1, "rgba(23, 21, 18, 0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 256);

  shadowTexture = new THREE.CanvasTexture(canvas);
  return shadowTexture;
}

function SceneRig({
  progressRef,
  entranceRef,
  pointerRef,
  tier,
  isMobile,
}: {
  progressRef: React.RefObject<number>;
  entranceRef: React.RefObject<number>;
  pointerRef: React.RefObject<{ x: number; y: number }>;
  tier: 0 | 1 | 2;
  isMobile: boolean;
}) {
  const { camera, gl } = useThree();
  const prefersReducedMotion = useReducedMotion();

  // Root hierarchy nodes
  const coconutGroup = useRef<THREE.Group>(null);
  const tiltZ = useRef<THREE.Group>(null);
  const bowl = useRef<THREE.Group>(null);
  const spin = useRef<THREE.Group>(null);
  const coconutObjRef = useRef<CoconutObject | null>(null);

  const heroCanRef = useRef<CanObject | null>(null);
  const crateGroup = useRef<THREE.Group>(null);
  const heroSlotRef = useRef<THREE.Group>(null);
  const crateShadowRef = useRef<THREE.Mesh>(null);
  const boxState = useRef<BoxMotionState>({ open: 1 });

  // Filler cans loaded progressively
  const [fillerCans, setFillerCans] = useState<CanObject[]>([]);

  // Smooth pointer
  const px = useRef(0);
  const py = useRef(0);
  const spinAngle = useRef(0);
  const frameCount = useRef(0);

  // Build models
  const coconut = useMemo(() => createCoconut(), []);
  const heroCan = useMemo(() => createCan(flavours[0]), []);
  const cartonTex = useMemo(
    () => getCartonTextures(CRATE.w, CRATE.h, CRATE.d),
    []
  );
  const contactTex = useMemo(() => getContactShadowTexture(), []);

  // Build filler cans in idle callback
  useEffect(() => {
    let cancelled = false;
    const fillerFlavours = flavours.slice(1); // 5 flavours

    const build = () => {
      if (cancelled) return;
      const cans = fillerFlavours.map((f) => createCan(f));
      setFillerCans(cans);
    };

    if ("requestIdleCallback" in window) {
      const handle = (window as any).requestIdleCallback(build, {
        timeout: 2500,
      });
      return () => {
        cancelled = true;
        (window as any).cancelIdleCallback(handle);
      };
    } else {
      const timer = setTimeout(build, 1200);
      return () => {
        cancelled = true;
        clearTimeout(timer);
      };
    }
  }, []);

  // Set initial coconut model
  useEffect(() => {
    coconutObjRef.current = coconut;
    heroCanRef.current = heroCan;
  }, [coconut, heroCan]);

  const crateX = isMobile ? 0 : 0.62;

  useFrame((_, dt) => {
    const p = progressRef.current ?? 0;
    const entRaw = entranceRef.current ?? 1;
    const rawPointer = pointerRef.current ?? { x: 0, y: 0 };

    frameCount.current++;
    if (frameCount.current === 3) {
      window.dispatchEvent(new CustomEvent("sip:scene-ready"));
    }

    const d = Math.min(dt, 0.05);
    const k = 1 - Math.pow(0.0015, d);

    if (prefersReducedMotion) {
      px.current = 0;
      py.current = 0;
    } else {
      px.current += (rawPointer.x - px.current) * (k * 0.5);
      py.current += (rawPointer.y - py.current) * (k * 0.5);
    }

    const b = (beat: { start: number; end: number }) =>
      seg(p, beat.start, beat.end);

    const split =
      easeInOut(b(BEATS.heroOut)) * (1 - easeInOut(b(BEATS.close)));
    const side = easeInOut(b(BEATS.turnSide));
    const crack = b(BEATS.crack);
    const emerge = easeInOut(b(BEATS.emerge));
    const fly = easeIn(b(BEATS.fly));
    const grow = easeOut(b(BEATS.canGrow));
    const upright = easeInOut(b(BEATS.canUpright));
    const turn = easeInOut(b(BEATS.turn));
    const lift = easeInOut(b(BEATS.canLift));
    const drop = b(BEATS.drop);
    const rise = easeOut(b(BEATS.crateRise));
    const seal = easeInOut(b(BEATS.seal));
    const crateTurn = easeInOut(b(BEATS.crateTurn));
    const cover = easeInOut(b(BEATS.cover));
    const statsHold =
      easeInOut(b(BEATS.statsIn)) * (1 - easeInOut(b(BEATS.statsOut)));

    const ent = easeOut(entRaw);
    const time = performance.now() * 0.001;

    // ==========================================
    // 1. COCONUT RIG
    // ==========================================
    if (coconutGroup.current && coconutObjRef.current) {
      const isCoconutVisible = p < BEATS.fly.end + 0.005;
      coconutGroup.current.visible = isCoconutVisible;

      if (isCoconutVisible) {
        spinAngle.current += d * (0.32 * (1 - side) + 0.12 * split);

        // Shake during crack: sin(70t) * .012 * sin(crack * PI)
        let shake = 0;
        if (crack > 0 && crack < 1) {
          shake = Math.sin(70 * time) * 0.012 * Math.sin(crack * Math.PI);
        }

        const heroDrop = isMobile
          ? -0.18 * (1 - easeInOut(b(BEATS.heroOut)))
          : 0;

        coconutGroup.current.position.set(
          shake,
          heroDrop + (1 - ent) * -0.35 + Math.sin(0.8 * time) * 0.025 * (1 - side),
          0
        );

        const baseScale = isMobile ? 0.7 : 0.72;
        const scaleVal =
          (0.55 + 0.45 * ent) *
          lerp(baseScale, 1.0, split) *
          lerp(1.0, 1.08, side);
        coconutGroup.current.scale.set(scaleVal, scaleVal, scaleVal);

        if (tiltZ.current) {
          tiltZ.current.rotation.z = side * 1.35 - emerge * 1.0 + px.current * 0.05;
        }
        if (bowl.current) {
          bowl.current.rotation.x = split * 0.95 - py.current * 0.05;
        }
        if (spin.current) {
          spin.current.rotation.y = spinAngle.current + (1 - ent) * -2.4;
        }

        // Halves separation
        const gap = crack * 0.035 + emerge * 1.0 + fly * 3.4;
        const topHalf = coconutObjRef.current.top;
        const bottomHalf = coconutObjRef.current.bottom;

        topHalf.position.set(0, split * 3.1 + gap, split * -0.6);
        topHalf.rotation.set(-split * 0.6, 0, split * 0.4);
        bottomHalf.position.set(0, -gap - split * 0.08, 0);
      }
    }

    // ==========================================
    // 2. HERO CAN RIG
    // ==========================================
    if (heroCanRef.current) {
      const isCanVisible = p > BEATS.crack.end - 0.004;
      heroCanRef.current.root.visible = isCanVisible;

      if (isCanVisible) {
        // Rotation: Euler ZYX: z = (side * 1.35 - emerge) * (1 - upright)
        const rotZ = (side * 1.35 - emerge) * (1 - upright);
        const idle =
          Math.sin(0.55 * time) * 0.18 * (1 - turn) * (1 - lift);
        const rotY = idle + px.current * 0.2 + turn * Math.PI + lift * Math.PI;

        const canScale =
          lerp(0.3, 1.08, grow) * lerp(1.0, 1 / 1.08, lift);
        heroCanRef.current.root.scale.set(canScale, canScale, canScale);

        // Position: lerped toward hover point (crateX, 1.4, .15) by lift
        const baseCanY = Math.sin(0.9 * time) * 0.03 * (1 - lift);
        const hoverX = crateX;
        const hoverY = 1.4;
        const hoverZ = 0.15;

        const posX = lerp(0, hoverX, lift);
        const posY = lerp(baseCanY, hoverY, lift);
        const posZ = lerp(0, hoverZ, lift);

        if (drop <= 0) {
          heroCanRef.current.root.position.set(posX, posY, posZ);
          heroCanRef.current.root.rotation.set(0, rotY, rotZ);
        } else {
          // During drop: read hero slot's world position/quaternion
          let slotWorldPos = new THREE.Vector3(crateX, -0.55 + 0.1, PITCH / 2);
          let slotWorldQuat = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(0, -0.62 + crateTurn * 1.05, 0)
          );

          if (heroSlotRef.current) {
            heroSlotRef.current.getWorldPosition(slotWorldPos);
            heroSlotRef.current.getWorldQuaternion(slotWorldQuat);
          }

          const across = easeInOut(seg(drop, 0, 0.45));
          const down =
            0.85 * easeIn(seg(drop, 0.2, 1.0)) +
            0.15 * easeInOut(seg(drop, 0.2, 1.0));

          const curX = lerp(hoverX, slotWorldPos.x, across);
          const curZ = lerp(hoverZ, slotWorldPos.z, across);
          const curY = lerp(hoverY, slotWorldPos.y, down);

          heroCanRef.current.root.position.set(curX, curY, curZ);

          const startQuat = new THREE.Quaternion().setFromEuler(
            new THREE.Euler(0, rotY, rotZ)
          );
          const dropQuatT = easeInOut(seg(drop, 0, 0.7));
          startQuat.slerp(slotWorldQuat, dropQuatT);
          heroCanRef.current.root.quaternion.copy(startQuat);
        }
      }
    }

    // ==========================================
    // 3. CRATE RIG
    // ==========================================
    if (crateGroup.current) {
      const isCrateVisible = p > BEATS.crateRise.start - 0.01;
      crateGroup.current.visible = isCrateVisible;

      if (isCrateVisible) {
        crateGroup.current.position.x = crateX;
        crateGroup.current.position.y =
          lerp(-6.2, -0.55, rise) - cover * 0.9;
        crateGroup.current.rotation.y =
          -0.62 + (1 - rise) * -0.5 + crateTurn * 1.05 + px.current * 0.06;

        boxState.current.open = 1 - seal;

        // Shadow under crate
        if (crateShadowRef.current) {
          const riseEnd = BEATS.crateRise.end;
          const shadowOp =
            easeOut(seg(p, riseEnd - 0.02, riseEnd + 0.02)) *
            (1 - cover) *
            0.8;
          const shadowMat = crateShadowRef.current.material as THREE.MeshBasicMaterial;
          if (shadowMat && typeof shadowMat.opacity === "number") {
            shadowMat.opacity = shadowOp;
          }
        }
      }
    }

    // ==========================================
    // 4. CAMERA RIG
    // ==========================================
    const pCam = camera as THREE.PerspectiveCamera;
    const fovRad = (pCam.fov * Math.PI) / 180;
    const aspect = pCam.aspect;

    const fit = (w: number, h: number) => {
      return Math.max(
        h / (2 * Math.tan(fovRad / 2)),
        w / (2 * Math.tan(fovRad / 2) * aspect)
      );
    };

    const dHero = fit(
      isMobile ? 2.1 : 2.3,
      isMobile ? 3.4 : 2.75
    );
    const dCan = fit(1.6, isMobile ? 3.5 : 2.3);
    const dPack = lerp(
      fit(isMobile ? 3.6 : 4.9, isMobile ? 5.6 : 5.2),
      fit(isMobile ? 3.3 : 4.1, isMobile ? 4.6 : 4.1),
      crateTurn
    );

    const toCan = easeInOut(seg(p, 0.42, 0.5));
    const packIn = easeInOut(
      seg(p, BEATS.crateRise.start, BEATS.crateRise.end + 0.01)
    );

    const dist =
      lerp(lerp(dHero, dCan, toCan), dPack, packIn) *
      (1 - statsHold * 0.06);

    const camY = lerp(0.18, 2.4, packIn) - crateTurn * 1.35;
    const lookX = packIn * crateX * (isMobile ? 1.0 : 0.9);
    const lookY =
      lerp(0, -0.12, packIn) - crateTurn * 0.38 - cover * 0.35;

    const targetPos = new THREE.Vector3(
      lookX * 0.55 + px.current * 0.28,
      camY + py.current * 0.16,
      dist
    );

    pCam.position.lerp(targetPos, k);
    pCam.lookAt(lookX + px.current * 0.04, lookY, 0);
  });

  // Filler can slot positions: (-P, -P/2), (0, -P/2), (P, -P/2), (-P, P/2), (P, P/2)
  const slotY = -CRATE.h / 2 + BOARD + CAN.H / 2 + 0.005;
  const fillerSlots: [number, number, number][] = [
    [-PITCH, slotY, -PITCH / 2],
    [0, slotY, -PITCH / 2],
    [PITCH, slotY, -PITCH / 2],
    [-PITCH, slotY, PITCH / 2],
    [PITCH, slotY, PITCH / 2],
  ];

  return (
    <>
      {/* Studio Lighting */}
      <ambientLight color="#fff7ea" intensity={0.55} />
      <directionalLight
        position={[-3.5, 5, 4.5]}
        color="#fff2df"
        intensity={2.3}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={0.5}
        shadow-camera-far={25}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
        shadow-bias={-0.0005}
      />
      <directionalLight position={[4.5, 2.2, -3.5]} color="#e3ebf2" intensity={1.4} />
      <directionalLight position={[0.5, -2.5, 3]} color="#f1e6d2" intensity={0.35} />

      {/* Drei Environment */}
      <Environment
        resolution={tier === 2 ? 256 : 128}
        frames={1}
        background={false}
      >
        <Lightformer
          form="rect"
          color="#fffaf1"
          intensity={2.2}
          position={[0, 5, 1]}
          scale={[9, 6, 1]}
        />
        <Lightformer
          form="rect"
          color="#fff4e4"
          intensity={3}
          position={[-4, 2, 3]}
          rotation={[0, Math.PI / 3, 0]}
          scale={[2.2, 6, 1]}
        />
        <Lightformer
          form="rect"
          color="#eef3f8"
          intensity={2.2}
          position={[4.5, 1.5, 1]}
          rotation={[0, -Math.PI / 2.4, 0]}
          scale={[1.4, 6, 1]}
        />
        <Lightformer
          form="rect"
          color="#c9d6c4"
          intensity={0.8}
          position={[0, -3, 2]}
          scale={[8, 4, 1]}
        />
      </Environment>

      {/* COCONUT RIG */}
      <group ref={coconutGroup}>
        <group ref={tiltZ}>
          <group ref={bowl}>
            <group ref={spin}>
              <primitive object={coconut.root} />
            </group>
          </group>
        </group>
      </group>

      {/* HERO CAN RIG */}
      <primitive object={heroCan.root} />

      {/* CRATE RIG */}
      <group ref={crateGroup} position={[crateX, -6.2, 0]}>
        <PackagingBox
          w={CRATE.w}
          h={CRATE.h}
          d={CRATE.d}
          plies={3}
          flute="B"
          detailed={tier > 0}
          stateRef={boxState}
        />

        {/* 4 Carton Print Planes floating BOARD/2 + .0025 proud */}
        {/* Front */}
        <mesh
          position={[0, 0, CRATE.d / 2 + BOARD / 2 + 0.0025]}
          material={
            new THREE.MeshStandardMaterial({
              map: cartonTex.front,
              roughness: 0.82,
              polygonOffset: true,
              polygonOffsetFactor: -2,
              polygonOffsetUnits: -2,
            })
          }
        >
          <planeGeometry args={[CRATE.w, CRATE.h]} />
        </mesh>

        {/* Back */}
        <mesh
          position={[0, 0, -(CRATE.d / 2 + BOARD / 2 + 0.0025)]}
          rotation={[0, Math.PI, 0]}
          material={
            new THREE.MeshStandardMaterial({
              map: cartonTex.back,
              roughness: 0.82,
              polygonOffset: true,
              polygonOffsetFactor: -2,
              polygonOffsetUnits: -2,
            })
          }
        >
          <planeGeometry args={[CRATE.w, CRATE.h]} />
        </mesh>

        {/* Left Side */}
        <mesh
          position={[-(CRATE.w / 2 + BOARD / 2 + 0.0025), 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          material={
            new THREE.MeshStandardMaterial({
              map: cartonTex.side,
              roughness: 0.82,
              polygonOffset: true,
              polygonOffsetFactor: -2,
              polygonOffsetUnits: -2,
            })
          }
        >
          <planeGeometry args={[CRATE.d, CRATE.h]} />
        </mesh>

        {/* Right Side */}
        <mesh
          position={[CRATE.w / 2 + BOARD / 2 + 0.0025, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          material={
            new THREE.MeshStandardMaterial({
              map: cartonTex.side,
              roughness: 0.82,
              polygonOffset: true,
              polygonOffsetFactor: -2,
              polygonOffsetUnits: -2,
            })
          }
        >
          <planeGeometry args={[CRATE.d, CRATE.h]} />
        </mesh>

        {/* Hero slot at (0, PITCH / 2) */}
        <group ref={heroSlotRef} position={[0, slotY, PITCH / 2]} />

        {/* Five filler cans */}
        {fillerCans.map((can, idx) => (
          <primitive
            key={can.flavour.id}
            object={can.root}
            position={fillerSlots[idx]}
          />
        ))}

        {/* Soft contact shadow plane under crate: 2.1w x 2.6d */}
        <mesh
          ref={crateShadowRef}
          position={[0, -CRATE.h / 2 - 0.005, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[2.1, 2.6]} />
          <meshBasicMaterial
            map={contactTex}
            transparent
            opacity={0}
            depthWrite={false}
          />
        </mesh>
      </group>
    </>
  );
}

export function StoryScene({
  progressRef,
  entranceRef,
  pointerRef,
}: StorySceneProps) {
  const isMobile = useIsMobile();
  const tier = useQualityTier();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const dpr: [number, number] = [1, tier === 2 ? 1.75 : tier === 1 ? 1.5 : 1.25];
  const fov = isMobile ? 32 : 28;

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <Canvas
        dpr={dpr}
        camera={{
          fov,
          position: [0, 0.2, 7],
          near: 0.1,
          far: 60,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.NeutralToneMapping,
          toneMappingExposure: 1.0,
        }}
        shadows
        aria-hidden="true"
        className="w-full h-full"
      >
        <SceneRig
          progressRef={progressRef}
          entranceRef={entranceRef}
          pointerRef={pointerRef}
          tier={tier}
          isMobile={isMobile}
        />
      </Canvas>
    </div>
  );
}
