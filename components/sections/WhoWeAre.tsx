"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Box, Torus } from "@react-three/drei";
import type * as THREE from "three";

function DataVisualization() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere args={[0.8, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#9ca3af"
          wireframe
          transparent
          opacity={0.7}
        />
      </Sphere>

      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 2;
        return (
          <Box
            key={i}
            args={[0.1, 0.1, 0.1]}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 0.5) * 0.5,
              Math.sin(angle) * radius,
            ]}
          >
            <meshStandardMaterial color="#ffffff" />
          </Box>
        );
      })}

      <Torus args={[2, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#ffffff" transparent opacity={0.4} />
      </Torus>
      <Torus args={[1.5, 0.02, 16, 100]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial color="#ffffff" transparent opacity={0.4} />
      </Torus>
    </group>
  );
}

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !textRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height))
      );

      const translateY = (1 - progress) * 100;
      sectionRef.current.style.transform = `translateY(${translateY}px)`;

      const keywords = textRef.current.querySelectorAll(".keyword");
      keywords.forEach((keyword, index) => {
        const keywordProgress = Math.max(
          0,
          Math.min(1, (progress - index * 0.1) * 2)
        );
        const element = keyword as HTMLElement;
        element.style.color = keywordProgress > 0.5 ? "#ffffff" : "#9ca3af";
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden section-transition pt-36 pb-20"
      id="who-we-are"
    >
      <div className="absolute inset-0 w-full h-full hero-gradient"></div>
      <div className="absolute inset-0 w-full h-full grid-bg opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start w-full">
          <div ref={textRef} className="space-y-8">
            <h2 className="text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Who We Are
            </h2>

            <div className="text-2xl lg:text-3xl font-medium leading-relaxed text-gray-400">
              <p>
                We are a team of{" "}
                <span className="keyword transition-colors duration-500">
                  passionate
                </span>{" "}
                creators,{" "}
                <span className="keyword transition-colors duration-500">
                  developers
                </span>
                , and{" "}
                <span className="keyword transition-colors duration-500">
                  innovators
                </span>{" "}
                dedicated to building web experiences that push{" "}
                <span className="keyword transition-colors duration-500">
                  boundaries
                </span>{" "}
                and drive{" "}
                <span className="keyword transition-colors duration-500">
                  impact
                </span>
                .
              </p>
            </div>

            <div className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              <p>
                We leverage{" "}
                <span className="keyword transition-colors duration-500">
                  data science
                </span>{" "}
                and{" "}
                <span className="keyword transition-colors duration-500">
                  machine learning
                </span>{" "}
                to craft{" "}
                <span className="keyword transition-colors duration-500">
                  data-driven
                </span>{" "}
                strategies to optimize your operations, providing your business
                with a{" "}
                <span className="keyword transition-colors duration-500">
                  competitive edge
                </span>
                .
              </p>
            </div>
          </div>

          <div className="h-96 lg:h-[500px] relative">
            <Canvas
              camera={{ position: [5, 2, 5], fov: 50 }}
              className="w-full h-full"
            >
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={0.8} />
              <pointLight
                position={[-10, -10, -10]}
                intensity={0.3}
                color="#84cc16"
              />

              <DataVisualization />

              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Canvas>

            <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
