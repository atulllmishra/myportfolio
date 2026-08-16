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

  // Dynamic hueShift based on active theme
  // Light: warm golden solar peach tones (0.18)
  // Dark: deep cosmic midnight blue-violet tones (0.78)
  const hueShift = theme === "light" ? 0.18 : 0.78;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        {/* Galaxy background component from ReactBits passing dynamic hueShift prop */}
        <Galaxy hueShift={hueShift} count={2200} speed={0.35} theme={theme} />

        {/* Conditionally rendered 3D meshes for Sun, Earth, Moon */}
        <CelestialMeshes theme={theme} />
      </Canvas>

      {/* Subtle overlay vignette gradient tailored to theme */}
      <div
        className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            theme === "light"
              ? "radial-gradient(circle at 50% 30%, rgba(255, 249, 245, 0.3) 0%, rgba(255, 249, 245, 0.85) 100%)"
              : "radial-gradient(circle at 50% 30%, rgba(11, 15, 23, 0.2) 0%, rgba(11, 15, 23, 0.85) 100%)",
        }}
      />
    </div>
  );
}
