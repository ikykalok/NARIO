"use client";

import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import {
  FLUTE,
  FluteType,
  LINER_T,
  getKraftTexture,
  getRoughnessTexture,
  makeFluteGeometry,
} from "@/lib/three/corrugated";

interface CorrugatedPanelProps {
  width: number;
  height: number;
  plies?: 3 | 5;
  flute?: FluteType;
  explodeRef?: React.RefObject<number>;
  gap?: number;
  faceMap?: THREE.Texture | null;
  detailed?: boolean;
}

export function CorrugatedPanel({
  width,
  height,
  plies = 3,
  flute = "B",
  explodeRef,
  gap = 0.12,
  faceMap = null,
  detailed = true,
}: CorrugatedPanelProps) {
  const { amp } = FLUTE[flute];
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const fluteRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);

  const kraftTex = useMemo(() => getKraftTexture(), []);
  const roughTex = useMemo(() => getRoughnessTexture(), []);

  const linerMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: faceMap || kraftTex,
      roughnessMap: roughTex,
      color: faceMap ? 0xffffff : 0xefdcbb,
      roughness: 0.9,
      side: THREE.DoubleSide,
    });
  }, [faceMap, kraftTex, roughTex]);

  const mediumMat = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: kraftTex,
      roughnessMap: roughTex,
      color: 0xdfc49a,
      roughness: 0.94,
      side: THREE.DoubleSide,
    });
  }, [kraftTex, roughTex]);

  const fluteGeom = useMemo(() => {
    if (!detailed) return null;
    return makeFluteGeometry(width, height, flute);
  }, [width, height, flute, detailed]);

  const innerZ = -(amp + LINER_T / 2);
  const outerZ = +(amp + LINER_T / 2);

  useFrame(() => {
    const explode = explodeRef?.current ?? 0;
    if (detailed && innerRef.current && outerRef.current && fluteRef.current) {
      innerRef.current.position.z = innerZ - explode * gap;
      outerRef.current.position.z = outerZ + explode * gap;
      fluteRef.current.position.z = 0;
    }
  });

  if (!detailed) {
    return (
      <group ref={groupRef}>
        <mesh position={[0, 0, outerZ]} material={linerMat} castShadow receiveShadow>
          <boxGeometry args={[width, height, LINER_T]} />
        </mesh>
      </group>
    );
  }

  return (
    <group ref={groupRef}>
      {/* Inner liner */}
      <mesh
        ref={innerRef}
        position={[0, 0, innerZ]}
        material={linerMat}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[width, height, LINER_T]} />
      </mesh>

      {/* Flute medium */}
      {fluteGeom && (
        <mesh
          ref={fluteRef}
          position={[0, 0, 0]}
          geometry={fluteGeom}
          material={mediumMat}
          castShadow
          receiveShadow
        />
      )}

      {/* Outer liner */}
      <mesh
        ref={outerRef}
        position={[0, 0, outerZ]}
        material={linerMat}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[width, height, LINER_T]} />
      </mesh>
    </group>
  );
}
