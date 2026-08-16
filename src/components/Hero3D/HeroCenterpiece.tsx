"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus, Icosahedron } from "@react-three/drei";
import * as THREE from "three";
import { audioHaptics } from "@/lib/audioHaptics";

interface HeroCenterpieceProps {
  theme?: "light" | "dark";
}

// Particle Dust System
function OrbitalDust({ theme }: { theme: "light" | "dark" }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = 300; // Low count for performance
  
  const { positions, scales } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 2.5 + Math.random() * 2;
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      
      scales[i] = Math.random() * 1.5 + 0.5;
    }
    return { positions, scales };
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.15;
      pointsRef.current.rotation.z -= delta * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={theme === "light" ? "#C4563A" : "#E07A5F"}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function CoreMechanism({ theme }: { theme: "light" | "dark" }) {
  const groupRef = useRef<THREE.Group>(null!);
  const icosaRef = useRef<THREE.Mesh>(null!);
  const [pulse, setPulse] = useState(1);
  const [hovered, setHovered] = useState(false);

  // Colors based on theme
  const coreColor = theme === "light" ? "#C4563A" : "#E07A5F";
  const ringColor = theme === "light" ? "#D4A853" : "#F2CC8F";
  const wireColor = theme === "light" ? "#2e221d" : "#FFFFFF";

  useFrame((state, delta) => {
    // Smooth cursor tracking rotation
    if (groupRef.current) {
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
      
      // Auto-spin base
      groupRef.current.rotation.z += delta * 0.2;
    }

    // Pulse decay mechanism
    if (icosaRef.current) {
      setPulse((p) => THREE.MathUtils.lerp(p, hovered ? 1.08 : 1, 0.1));
      icosaRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  const handleClick = () => {
    setPulse(1.3);
    audioHaptics.playClick(300, 0.1, "sine");
  };

  const handlePointerEnter = () => {
    setHovered(true);
    document.body.style.cursor = "crosshair";
    audioHaptics.playClick(600, 0.05, "triangle");
  };

  const handlePointerLeave = () => {
    setHovered(false);
    document.body.style.cursor = "auto";
  };

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        {/* Inner Solid Core */}
        <Sphere args={[0.6, 32, 32]}>
          <meshStandardMaterial 
            color={coreColor} 
            emissive={coreColor} 
            emissiveIntensity={0.5} 
            roughness={0.2} 
            metalness={0.8} 
          />
        </Sphere>

        {/* Outer Wireframe Icosahedron */}
        <Icosahedron 
          ref={icosaRef}
          args={[1.1, 1]} 
          onClick={handleClick}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          <meshBasicMaterial color={wireColor} wireframe transparent opacity={hovered ? 0.8 : 0.3} />
        </Icosahedron>

        {/* Gyroscopic Torus Rings */}
        <Torus args={[1.6, 0.02, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
          <meshStandardMaterial color={ringColor} roughness={0.1} metalness={0.9} />
        </Torus>
        <Torus args={[1.8, 0.015, 16, 100]} rotation={[0, Math.PI / 4, Math.PI / 2]}>
          <meshStandardMaterial color={coreColor} roughness={0.3} metalness={0.7} />
        </Torus>
      </Float>
    </group>
  );
}

// Main Component
export default function HeroCenterpiece({ theme = "dark" }: HeroCenterpieceProps) {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]} // Clamp pixel ratio for performance
      >
        <ambientLight intensity={theme === "light" ? 1.2 : 0.5} />
        <pointLight position={[5, 5, 5]} intensity={2} color={theme === "light" ? "#ffffff" : "#F2CC8F"} />
        <pointLight position={[-5, -5, -5]} intensity={1} color={theme === "light" ? "#C4563A" : "#E07A5F"} />
        
        <CoreMechanism theme={theme} />
        <OrbitalDust theme={theme} />
      </Canvas>
    </div>
  );
}
