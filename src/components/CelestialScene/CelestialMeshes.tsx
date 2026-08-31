"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface CelestialMeshesProps {
  theme: "light" | "dark";
}

function seededRand(seed: number): number {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function createSunTexture() {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const grad = ctx.createRadialGradient(256, 256, 10, 256, 256, 256);
  grad.addColorStop(0, "rgb(255, 255, 255)");
  grad.addColorStop(0.25, "rgb(255, 230, 0)");
  grad.addColorStop(0.5, "rgb(255, 102, 0)");
  grad.addColorStop(0.85, "rgb(204, 34, 0)");
  grad.addColorStop(1, "rgb(102, 0, 0)");

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 512);

  for (let i = 0; i < 400; i++) {
    const x = seededRand(i * 1.1) * 512;
    const y = seededRand(i * 2.2) * 512;
    const r = seededRand(i * 3.3) * 10 + 2;
    ctx.fillStyle = `rgba(255, 255, 200, ${seededRand(i * 4.4) * 0.4})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

function createEarthTexture(isDark: boolean) {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.fillStyle = isDark ? "rgb(8, 19, 38)" : "rgb(26, 91, 168)";
  ctx.fillRect(0, 0, 1024, 512);

  ctx.fillStyle = isDark ? "rgb(30, 68, 40)" : "rgb(61, 139, 84)";
  const seedContinents = [
    { x: 300, y: 200, r: 130 },
    { x: 220, y: 310, r: 85 },
    { x: 740, y: 190, r: 110 },
    { x: 790, y: 350, r: 95 },
    { x: 480, y: 370, r: 75 },
    { x: 550, y: 150, r: 60 },
  ];

  seedContinents.forEach((c, idx) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();
    for (let j = 0; j < 10; j++) {
      const bx = c.x + (seededRand(idx * 10 + j * 1.1) - 0.5) * c.r * 1.4;
      const by = c.y + (seededRand(idx * 10 + j * 2.2) - 0.5) * c.r * 1.4;
      const br = seededRand(idx * 10 + j * 3.3) * (c.r * 0.5) + 12;
      ctx.beginPath();
      ctx.arc(bx, by, br, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  if (isDark) {
    ctx.fillStyle = "rgb(255, 170, 34)";
    for (let k = 0; k < 900; k++) {
      const lx = seededRand(k * 4.4) * 1024;
      const ly = seededRand(k * 5.5) * 512;
      ctx.fillRect(lx, ly, seededRand(k * 6.6) * 2 + 1, seededRand(k * 7.7) * 2 + 1);
    }
  }

  ctx.fillStyle = isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.45)";
  for (let c = 0; c < 22; c++) {
    const cx = seededRand(c * 8.8) * 1024;
    const cy = seededRand(c * 9.9) * 512;
    const cw = seededRand(c * 10.1) * 160 + 50;
    const ch = seededRand(c * 11.2) * 30 + 10;
    ctx.beginPath();
    ctx.ellipse(cx, cy, cw, ch, seededRand(c * 12.3), 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

function createMoonTexture() {
  if (typeof document === "undefined") return null;
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.fillStyle = "rgb(155, 160, 170)";
  ctx.fillRect(0, 0, 512, 512);

  for (let i = 0; i < 200; i++) {
    const x = seededRand(i * 1.1) * 512;
    const y = seededRand(i * 2.2) * 512;
    const r = seededRand(i * 3.3) * 30 + 3;
    const darkGrad = ctx.createRadialGradient(x, y, 0, x, y, r);
    darkGrad.addColorStop(0, "rgb(74, 80, 91)");
    darkGrad.addColorStop(0.7, "rgb(106, 112, 124)");
    darkGrad.addColorStop(1, "rgb(155, 160, 170)");

    ctx.fillStyle = darkGrad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

export default function CelestialMeshes({ theme }: CelestialMeshesProps) {
  const sunGroupRef = useRef<THREE.Group>(null!);
  const sunMeshRef = useRef<THREE.Mesh>(null!);
  const earthGroupRef = useRef<THREE.Group>(null!);
  const earthMeshRef = useRef<THREE.Mesh>(null!);
  const moonGroupRef = useRef<THREE.Group>(null!);
  const moonMeshRef = useRef<THREE.Mesh>(null!);

  const sunLightRef = useRef<THREE.DirectionalLight>(null!);
  const moonLightRef = useRef<THREE.DirectionalLight>(null!);

  const textures = useMemo(() => {
    return {
      sun: createSunTexture(),
      earthDay: createEarthTexture(false),
      earthNight: createEarthTexture(true),
      moon: createMoonTexture(),
    };
  }, []);

  const isLight = theme === "light";

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    const mouseX = state.pointer.x * 0.5;
    const mouseY = state.pointer.y * 0.3;

    if (sunGroupRef.current) {
      const targetScale = isLight ? 1.25 : 0.001;
      const targetX = -4.2 + mouseX * 0.8;
      const targetY = 1.6 + mouseY * 0.8;

      sunGroupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.06);
      sunGroupRef.current.position.x = THREE.MathUtils.lerp(sunGroupRef.current.position.x, targetX, 0.05);
      sunGroupRef.current.position.y = THREE.MathUtils.lerp(sunGroupRef.current.position.y, targetY, 0.05);

      if (sunMeshRef.current) {
        sunMeshRef.current.rotation.y += delta * 0.2;
      }
    }

    if (sunLightRef.current) {
      sunLightRef.current.intensity = THREE.MathUtils.lerp(
        sunLightRef.current.intensity,
        isLight ? 2.8 : 0,
        0.06
      );
    }

    if (moonGroupRef.current) {
      const targetScale = isLight ? 0.001 : 1.15;
      const targetX = -4.0 + mouseX * 0.8;
      const targetY = 1.4 + mouseY * 0.8;

      moonGroupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.06);
      moonGroupRef.current.position.x = THREE.MathUtils.lerp(moonGroupRef.current.position.x, targetX, 0.05);
      moonGroupRef.current.position.y = THREE.MathUtils.lerp(moonGroupRef.current.position.y, targetY, 0.05);

      if (moonMeshRef.current) {
        moonMeshRef.current.rotation.y += delta * 0.15;
      }
    }

    if (moonLightRef.current) {
      moonLightRef.current.intensity = THREE.MathUtils.lerp(
        moonLightRef.current.intensity,
        isLight ? 0 : 1.8,
        0.06
      );
    }

    if (earthGroupRef.current) {
      const targetX = 3.8 + mouseX * 0.6;
      const targetY = -0.5 + mouseY * 0.6;

      earthGroupRef.current.position.x = THREE.MathUtils.lerp(earthGroupRef.current.position.x, targetX, 0.05);
      earthGroupRef.current.position.y = THREE.MathUtils.lerp(earthGroupRef.current.position.y, targetY, 0.05);

      earthGroupRef.current.position.z = -1 + Math.sin(time * 0.8) * 0.15;

      if (earthMeshRef.current) {
        earthMeshRef.current.rotation.y += delta * 0.35;
      }
    }
  });

  return (
    <>
      <ambientLight intensity={isLight ? 0.7 : 0.35} />
      
      <directionalLight
        ref={sunLightRef}
        position={[-8, 4, 5]}
        color="rgb(255, 241, 197)"
        intensity={2.8}
      />

      <directionalLight
        ref={moonLightRef}
        position={[-6, 4, 3]}
        color="rgb(165, 216, 255)"
        intensity={0}
      />

      <group ref={sunGroupRef} position={[-4.2, 1.6, -2]} scale={[0.001, 0.001, 0.001]}>
        <mesh ref={sunMeshRef}>
          <sphereGeometry args={[1.3, 32, 32]} />
          <meshBasicMaterial
            map={textures.sun || undefined}
            color="rgb(255, 234, 153)"
          />
        </mesh>
        <mesh scale={[1.25, 1.25, 1.25]}>
          <sphereGeometry args={[1.3, 32, 32]} />
          <meshBasicMaterial
            color="rgb(255, 119, 0)"
            transparent
            opacity={0.35}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
          />
        </mesh>
        <mesh scale={[1.5, 1.5, 1.5]}>
          <sphereGeometry args={[1.3, 32, 32]} />
          <meshBasicMaterial
            color="rgb(255, 204, 0)"
            transparent
            opacity={0.15}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
          />
        </mesh>
      </group>

      <group ref={moonGroupRef} position={[-4.0, 1.4, -2]} scale={[1.15, 1.15, 1.15]}>
        <mesh ref={moonMeshRef}>
          <sphereGeometry args={[1.1, 32, 32]} />
          <meshStandardMaterial
            map={textures.moon || undefined}
            roughness={0.8}
            metalness={0.1}
            color="rgb(226, 232, 240)"
          />
        </mesh>
        <mesh scale={[1.2, 1.2, 1.2]}>
          <sphereGeometry args={[1.1, 32, 32]} />
          <meshBasicMaterial
            color="rgb(56, 189, 248)"
            transparent
            opacity={0.2}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
          />
        </mesh>
      </group>

      <group ref={earthGroupRef} position={[3.8, -0.5, -1]} rotation={[0.41, 0, 0]}>
        <mesh ref={earthMeshRef}>
          <sphereGeometry args={[1.25, 64, 64]} />
          <meshStandardMaterial
            map={isLight ? textures.earthDay || undefined : textures.earthNight || undefined}
            emissiveMap={!isLight ? textures.earthNight || undefined : undefined}
            emissive={!isLight ? new THREE.Color("rgb(255, 170, 34)") : new THREE.Color("rgb(0, 0, 0)")}
            emissiveIntensity={!isLight ? 0.45 : 0}
            roughness={0.6}
            metalness={0.1}
          />
        </mesh>
        <mesh scale={[1.1, 1.1, 1.1]}>
          <sphereGeometry args={[1.25, 32, 32]} />
          <meshBasicMaterial
            color={isLight ? "rgb(96, 165, 250)" : "rgb(56, 189, 248)"}
            transparent
            opacity={isLight ? 0.25 : 0.35}
            blending={THREE.AdditiveBlending}
            side={THREE.BackSide}
          />
        </mesh>
      </group>
    </>
  );
}
