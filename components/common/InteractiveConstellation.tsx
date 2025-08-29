"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function InteractiveConstellation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadThreeJS = async () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Renderer
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      rendererRef.current = renderer;

      // Scene & Camera
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      camera.position.z = 10;
      scene.add(camera);

      // Nodes
      const nodes: THREE.Mesh[] = [];
      const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const nodeGeometry = new THREE.SphereGeometry(0.035, 8, 8);

      const group = new THREE.Group();
      scene.add(group);

      const NODE_COUNT = 150;
      for (let i = 0; i < NODE_COUNT; i++) {
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        node.position.set(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        );
        (node as any).userData = { original: node.position.clone() };
        nodes.push(node);
        group.add(node);
      }

      // Lines
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.15,
      });
      const lineGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(NODE_COUNT * NODE_COUNT * 3);
      lineGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lines);

      // Mouse
      const mouse = new THREE.Vector2();
      const raycaster = new THREE.Raycaster();

      const handleMouseMove = (e: MouseEvent) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Animation
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);

        group.rotation.y += 0.0008;
        group.rotation.x += 0.0004;

        raycaster.setFromCamera(mouse, camera);
        const mousePos = raycaster.ray.origin
          .clone()
          .add(raycaster.ray.direction.clone().multiplyScalar(6));

        nodes.forEach((n) => {
          const dist = n.position.distanceTo(mousePos);
          if (dist < 3) {
            const pull = (n as any).userData.original
              .clone()
              .lerp(mousePos, 0.2);
            n.position.lerp(pull, 0.08);
          } else {
            n.position.lerp((n as any).userData.original, 0.03);
          }
        });

        let ptr = 0;
        for (let i = 0; i < NODE_COUNT; i++) {
          for (let j = i + 1; j < NODE_COUNT; j++) {
            const a = nodes[i].position;
            const b = nodes[j].position;
            const dist = a.distanceTo(b);
            if (dist < 3.2) {
              positions[ptr++] = a.x;
              positions[ptr++] = a.y;
              positions[ptr++] = a.z;
              positions[ptr++] = b.x;
              positions[ptr++] = b.y;
              positions[ptr++] = b.z;
            }
          }
        }
        lineGeometry.setDrawRange(0, ptr / 3);
        lineGeometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
      };
    };

    loadThreeJS();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
    </div>
  );
}
