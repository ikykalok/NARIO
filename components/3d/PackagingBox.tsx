"use client";

import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { CorrugatedPanel } from "./CorrugatedPanel";
import { boardThickness, FluteType, getKraftTexture, getRoughnessTexture } from "@/lib/three/corrugated";

export interface BoxMotionState {
  open: number; // 0 (closed) to 1 (fully open)
  separate?: number;
  explode?: number;
}

interface PackagingBoxProps {
  w: number;
  h: number;
  d: number;
  plies?: 3 | 5;
  flute?: FluteType;
  detailed?: boolean;
  stateRef: React.RefObject<BoxMotionState>;
}

const FLAP_OPEN = (112 * Math.PI) / 180; // 112 degrees

export function PackagingBox({
  w,
  h,
  d,
  plies = 3,
  flute = "B",
  detailed = true,
  stateRef,
}: PackagingBoxProps) {
  const rootRef = useRef<THREE.Group>(null);

  // Flap hinge refs
  const frontFlapHingeRef = useRef<THREE.Group>(null);
  const backFlapHingeRef = useRef<THREE.Group>(null);
  const leftFlapHingeRef = useRef<THREE.Group>(null);
  const rightFlapHingeRef = useRef<THREE.Group>(null);

  // Tape mesh ref
  const tapeRef = useRef<THREE.Mesh>(null);
  const tapeMatRef = useRef<THREE.MeshStandardMaterial>(null);

  // Smooth local values for easing
  const currentOpen = useRef(stateRef.current?.open ?? 0);

  const kraftTex = useMemo(() => getKraftTexture(), []);
  const roughTex = useMemo(() => getRoughnessTexture(), []);

  const plainKraftMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: kraftTex,
      roughnessMap: roughTex,
      color: 0xefdcbb,
      roughness: 0.9,
      side: THREE.DoubleSide,
    });
  }, [kraftTex, roughTex]);

  const tapeMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: 0x2f4a3c,
      roughness: 0.6,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
    });
  }, []);

  const bThick = boardThickness(plies, flute);

  useFrame((_, delta) => {
    const targetOpen = stateRef.current?.open ?? 0;
    const dt = Math.min(delta, 0.05);
    const k = 1 - Math.pow(0.0008, dt);

    currentOpen.current += (targetOpen - currentOpen.current) * k;
    const openVal = currentOpen.current;

    // Front/Back major flaps open around X by FLAP_OPEN * smoothstep(open, .35, 1)
    const majorStep = THREE.MathUtils.smoothstep(openVal, 0.35, 1.0);
    const majorAngle = FLAP_OPEN * majorStep;

    if (frontFlapHingeRef.current) {
      frontFlapHingeRef.current.rotation.x = majorAngle;
    }
    if (backFlapHingeRef.current) {
      backFlapHingeRef.current.rotation.x = -majorAngle;
    }

    // Left/Right minor flaps open around Z by FLAP_OPEN * smoothstep(open, 0, .6)
    const minorStep = THREE.MathUtils.smoothstep(openVal, 0.0, 0.6);
    const minorAngle = FLAP_OPEN * minorStep;

    if (leftFlapHingeRef.current) {
      leftFlapHingeRef.current.rotation.z = -minorAngle;
    }
    if (rightFlapHingeRef.current) {
      rightFlapHingeRef.current.rotation.z = minorAngle;
    }

    // Tape opacity .92 * (1 - smoothstep(open, 0, .25)), hidden when fully open
    if (tapeRef.current && tapeMatRef.current) {
      const tapeStep = THREE.MathUtils.smoothstep(openVal, 0.0, 0.25);
      const opacity = 0.92 * (1 - tapeStep);
      tapeMatRef.current.opacity = opacity;
      tapeRef.current.visible = opacity > 0.005;
    }
  });

  const halfW = w / 2;
  const halfH = h / 2;
  const halfD = d / 2;

  const majorFlapDepth = d / 2;
  const minorFlapWidth = w / 2;

  return (
    <group ref={rootRef}>
      {/* Front Panel (w x h at z = +d/2) */}
      <group position={[0, 0, halfD]}>
        <CorrugatedPanel
          width={w}
          height={h}
          plies={plies}
          flute={flute}
          detailed={detailed}
        />
      </group>

      {/* Back Panel (w x h at z = -d/2, rotated 180 around Y) */}
      <group position={[0, 0, -halfD]} rotation={[0, Math.PI, 0]}>
        <CorrugatedPanel
          width={w}
          height={h}
          plies={plies}
          flute={flute}
          detailed={detailed}
        />
      </group>

      {/* Left Panel (d x h at x = -w/2, rotated -PI/2 around Y) */}
      <group position={[-halfW, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <CorrugatedPanel
          width={d}
          height={h}
          plies={plies}
          flute={flute}
          detailed={detailed}
        />
      </group>

      {/* Right Panel (d x h at x = +w/2, rotated PI/2 around Y) */}
      <group position={[halfW, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <CorrugatedPanel
          width={d}
          height={h}
          plies={plies}
          flute={flute}
          detailed={detailed}
        />
      </group>

      {/* Bottom Panel (w x d at y = -h/2, rotated PI/2 around X) */}
      <group position={[0, -halfH, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <CorrugatedPanel
          width={w}
          height={d}
          plies={plies}
          flute={flute}
          detailed={false}
        />
      </group>

      {/* FLAPS HINGED AT Y = +halfH */}
      {/* Front major flap */}
      <group ref={frontFlapHingeRef} position={[0, halfH, halfD]}>
        {/* Flap panel extends in -Z when closed flat across top */}
        <group position={[0, 0, -majorFlapDepth / 2]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={plainKraftMat} castShadow receiveShadow>
            <boxGeometry args={[w, majorFlapDepth, bThick]} />
          </mesh>
        </group>
      </group>

      {/* Back major flap */}
      <group ref={backFlapHingeRef} position={[0, halfH, -halfD]}>
        <group position={[0, 0, majorFlapDepth / 2]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh material={plainKraftMat} castShadow receiveShadow>
            <boxGeometry args={[w, majorFlapDepth, bThick]} />
          </mesh>
        </group>
      </group>

      {/* Left minor flap */}
      <group ref={leftFlapHingeRef} position={[-halfW, halfH, 0]}>
        <group position={[minorFlapWidth / 2, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh material={plainKraftMat} castShadow receiveShadow>
            <boxGeometry args={[bThick, minorFlapWidth, d - 0.01]} />
          </mesh>
        </group>
      </group>

      {/* Right minor flap */}
      <group ref={rightFlapHingeRef} position={[halfW, halfH, 0]}>
        <group position={[-minorFlapWidth / 2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <mesh material={plainKraftMat} castShadow receiveShadow>
            <boxGeometry args={[bThick, minorFlapWidth, d - 0.01]} />
          </mesh>
        </group>
      </group>

      {/* Moss tape strip: .16 x (d + .14) across top along Z */}
      <mesh
        ref={tapeRef}
        position={[0, halfH + bThick + 0.002, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        material={tapeMat}
      >
        <planeGeometry args={[0.16, d + 0.14]} />
        <primitive object={tapeMat} ref={tapeMatRef} attach="material" />
      </mesh>
    </group>
  );
}
