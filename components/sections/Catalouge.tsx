"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Environment, Float, useScroll } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// Catalog data
const catalogItems = [
  { id: 1, title: "Item One", description: "Minimalist design" },
  { id: 2, title: "Item Two", description: "Classic elegance" },
  { id: 3, title: "Item Three", description: "Modern aesthetic" },
  { id: 4, title: "Item Four", description: "Timeless piece" },
  { id: 5, title: "Item Five", description: "Artistic creation" },
  { id: 6, title: "Item Six", description: "Functional beauty" },
];

// ✨ Particle Background Component
function ParticleBackground() {
  const particles = useRef<THREE.Points>(null);

  const count = 500;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  useFrame(() => {
    if (particles.current) {
      particles.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// 3D Card Component
type CardProps = {
  title: string;
  description: string;
  position: [number, number, number];
  index: number;
  scroll: ReturnType<typeof useScroll>;
};

function Card({ title, description, position, index, scroll }: CardProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Mouse-based animation
      const mouseFactor = 0.5;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        state.mouse.y * mouseFactor,
        0.1
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        state.mouse.x * mouseFactor,
        0.1
      );

      // Scroll-based animation
      const scrollOffset = scroll.offset * 10;
      meshRef.current.position.y =
        position[1] + Math.sin(index + scrollOffset) * 0.2;

      // Hover effect
      meshRef.current.scale.z = THREE.MathUtils.lerp(
        meshRef.current.scale.z,
        hovered ? 1.2 : 1,
        0.1
      );
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      position={position}
    >
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1.5, 2, 0.1]} />
        <meshPhysicalMaterial
          color={hovered ? "#222" : "#000"}
          transparent
          opacity={0.95}
          metalness={0.7}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
        <Text
          position={[0, 0.3, 0.06]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>
        <Text
          position={[0, -0.3, 0.06]}
          fontSize={0.08}
          color="#ccc"
          anchorX="center"
          anchorY="middle"
        >
          {description}
        </Text>
      </mesh>
    </Float>
  );
}

// Scene Component
function Scene() {
  const scroll = useScroll();
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      // Rotate entire group based on scroll
      groupRef.current.rotation.y = scroll.offset * Math.PI * 2;

      // Move group based on scroll
      groupRef.current.position.y = -scroll.offset * 3;
    }
  });

  return (
    <group ref={groupRef}>
      {catalogItems.map((item, index) => {
        const angle = (index / catalogItems.length) * Math.PI * 2;
        const radius = 3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (index % 2 === 0 ? 1 : -1) * 0.8;

        return (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            position={[x, y, z]}
            index={index}
            scroll={scroll}
          />
        );
      })}
    </group>
  );
}

// Main Catalog Section Component
export default function CatalogSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <motion.h1
          className="text-5xl font-bold text-white md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          CATALOG
        </motion.h1>
      </div>

      {isMounted && (
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          style={{ background: "black" }}
        >
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <ParticleBackground />
          <Scene />

          <Environment preset="studio" />
        </Canvas>
      )}

      <motion.div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="text-center">Scroll to explore</p>
        <motion.div
          className="mx-auto mt-2 h-8 w-1 rounded-full bg-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </section>
  );
}
