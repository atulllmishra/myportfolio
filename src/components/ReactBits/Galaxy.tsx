"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface GalaxyProps {
  hueShift?: number; // 0 to 1 color hue shift
  count?: number;
  speed?: number;
  theme?: "light" | "dark";
}

const galaxyVertexShader = `
  uniform float uTime;
  uniform float uHueShift;
  attribute float aScale;
  attribute vec3 aRandomness;
  varying vec3 vColor;

  // HSL to RGB helper
  vec3 hsl2rgb(vec3 c) {
    vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
    return c.z + c.y * (rgb - 0.5) * (1.0 - abs(2.0 * c.z - 1.0));
  }

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    // Rotation animation
    float angle = atan(modelPosition.x, modelPosition.z);
    float distanceToCenter = length(modelPosition.xz);
    float angleOffset = (1.0 / (distanceToCenter + 0.1)) * uTime * 0.15;
    angle += angleOffset;

    modelPosition.x = cos(angle) * distanceToCenter;
    modelPosition.z = sin(angle) * distanceToCenter;
    modelPosition.xyz += aRandomness * 0.5;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    gl_PointSize = aScale * (140.0 / -viewPosition.z);

    // Color based on distance & hueShift
    float hue = mod(uHueShift + distanceToCenter * 0.03, 1.0);
    float sat = 0.85;
    float light = 0.7;
    vColor = hsl2rgb(vec3(hue, sat, light));
  }
`;

const galaxyFragmentShader = `
  varying vec3 vColor;

  void main() {
    // Disc shape with soft edge
    float strength = distance(gl_PointCoord, vec2(0.5));
    strength = 1.0 - strength;
    strength = pow(strength, 2.5);

    vec3 color = mix(vec3(0.0), vColor, strength);
    gl_FragColor = vec4(color, strength * 0.9);
  }
`;

export default function Galaxy({
  hueShift = 0.2,
  count = 2400,
  speed = 0.4,
}: GalaxyProps) {
  const pointsRef = useRef<THREE.Points>(null!);
  const materialRef = useRef<THREE.ShaderMaterial>(null!);

  const { positions, scales, randomness } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const randomness = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 22 + 2;
      const spinAngle = radius * 0.7;
      const branchAngle = ((i % 5) / 5) * Math.PI * 2;

      const randomX = (Math.random() - 0.5) * 2;
      const randomY = (Math.random() - 0.5) * 2;
      const randomZ = (Math.random() - 0.5) * 2;

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius;
      positions[i3 + 1] = (Math.random() - 0.5) * 3;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius;

      randomness[i3] = randomX;
      randomness[i3 + 1] = randomY;
      randomness[i3 + 2] = randomZ;

      scales[i] = Math.random() * 1.6 + 0.4;
    }

    return { positions, scales, randomness };
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uHueShift: { value: hueShift },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta * speed;
      materialRef.current.uniforms.uHueShift.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uHueShift.value,
        hueShift,
        0.05
      );
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.015 * speed;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-aScale"
          args={[scales, 1]}
        />
        <bufferAttribute
          attach="attributes-aRandomness"
          args={[randomness, 3]}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
        vertexShader={galaxyVertexShader}
        fragmentShader={galaxyFragmentShader}
        uniforms={uniforms}
        transparent
      />
    </points>
  );
}
