"use client";

import { useFrame, Canvas } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type SpaceWarpProps = {
  progress: React.MutableRefObject<number>;
};

type StarFieldProps = SpaceWarpProps & {
  starCount: number;
};

type Star = {
  x: number;
  y: number;
  z: number;
  size: number;
  angle: number;
  seed: number;
};

const FAR_Z = -48;
const NEAR_Z = 7;

function StarField({ progress, starCount }: StarFieldProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: starCount }, (_, index) => {
        const seed = (index * 16807) % 2147483647;
        const x = (((seed * 48271) % 10000) / 10000 - 0.5) * 25;
        const y = ((((seed * 69621) % 10000) / 10000 - 0.5) * 16);
        const z = FAR_Z + (((seed * 31337) % 10000) / 10000) * (NEAR_Z - FAR_Z);

        return {
          x,
          y,
          z,
          size: 0.022 + (((seed * 97) % 1000) / 1000) * 0.075,
          angle: Math.atan2(y, x),
          seed,
        };
      }),
    [starCount],
  );
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const progressValue = THREE.MathUtils.clamp(progress.current, 0, 1);
    const warpAmount = THREE.MathUtils.smoothstep(progressValue, 0.08, 0.8);

    stars.forEach((star, index) => {
      const basePhase = (star.seed % 1000) / 1000;
      const phase = (basePhase + progressValue * 2.8) % 1;
      star.z = FAR_Z + phase * (NEAR_Z - FAR_Z);

      const depth = THREE.MathUtils.clamp((star.z - FAR_Z) / (NEAR_Z - FAR_Z), 0, 1);
      const spread = 0.7 + depth * (1.2 + warpAmount * 2.8);
      const streak = 0.14 + warpAmount * (0.28 + depth * 4.2);
      const size = star.size * (0.8 + depth * 2.4);

      dummy.position.set(star.x * spread, star.y * spread, star.z);
      dummy.rotation.set(0, 0, star.angle);
      dummy.scale.set(size * streak, size, 1);
      dummy.updateMatrix();
      mesh.setMatrixAt(index, dummy.matrix);
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, starCount]}>
      <planeGeometry args={[1, 0.055]} />
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={0.82}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        toneMapped={false}
      />
    </instancedMesh>
  );
}

function SpaceFallback() {
  return (
    <div className="space-fallback">
      <div className="space-fallback-layer space-fallback-far" />
      <div className="space-fallback-layer space-fallback-near" />
    </div>
  );
}

export default function SpaceWarp({ progress }: SpaceWarpProps) {
  const [mode, setMode] = useState({ ready: false, mobile: false, reducedMotion: false });

  useEffect(() => {
    const mobileMedia = window.matchMedia("(max-width: 699px)");
    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMode({ ready: true, mobile: mobileMedia.matches, reducedMotion: motionMedia.matches });

    update();
    mobileMedia.addEventListener("change", update);
    motionMedia.addEventListener("change", update);
    return () => {
      mobileMedia.removeEventListener("change", update);
      motionMedia.removeEventListener("change", update);
    };
  }, []);

  if (!mode.ready || mode.reducedMotion) {
    return <SpaceFallback />;
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 68, near: 0.1, far: 100 }}
      dpr={mode.mobile ? 1 : [1, 1.5]}
      fallback={<SpaceFallback />}
      gl={{ antialias: !mode.mobile, alpha: true, powerPreference: mode.mobile ? "low-power" : "high-performance" }}
      frameloop="always"
    >
      <color attach="background" args={["#080808"]} />
      <StarField progress={progress} starCount={mode.mobile ? 900 : 1600} />
    </Canvas>
  );
}
