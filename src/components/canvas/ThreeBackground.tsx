"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

function ParticleField({ isDark }: { isDark: boolean }) {
  const count = 280;
  const meshRef = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cyan = isDark ? new THREE.Color("#06b6d4") : new THREE.Color("#0284c7");
    const purple = isDark ? new THREE.Color("#a855f7") : new THREE.Color("#7e22ce");
    const emerald = isDark ? new THREE.Color("#10b981") : new THREE.Color("#059669");

    const colorChoices = [cyan, purple, emerald];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 35;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 35;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 35;

      const chosenColor = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count, isDark]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Delta-based rotation for consistent 60fps/120fps regardless of refresh rate
      meshRef.current.rotation.x += delta * 0.03;
      meshRef.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={isDark ? 0.12 : 0.14}
        vertexColors
        transparent
        opacity={isDark ? 0.7 : 0.6}
        blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function ThreeBackground() {
  const { theme, mounted } = useTheme();
  const isDark = !mounted || theme === "dark";

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transform-gpu">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
          depth: false,
        }}
        resize={{ scroll: false, debounce: { scroll: 0, resize: 100 } }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField isDark={isDark} />
      </Canvas>
    </div>
  );
}
