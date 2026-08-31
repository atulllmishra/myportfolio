"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useTheme } from "@/components/ThemeProvider";
import Galaxy from "@/components/ReactBits/Galaxy";
import CelestialMeshes from "./CelestialMeshes";

export default function CelestialCanvas() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 bg-transparent transition-colors duration-500" />
    );
  }

  const hueShift = 0.18;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <Galaxy hueShift={hueShift} count={2200} speed={0.35} theme="light" />
        <CelestialMeshes theme="light" />
      </Canvas>

      <div
        className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(255, 249, 245, 0.3) 0%, rgba(255, 249, 245, 0.85) 100%)",
        }}
      />
    </div>
  );
}
