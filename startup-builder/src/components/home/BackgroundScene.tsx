import React, { useRef, useEffect } from "react";
import * as THREE from "three";

interface BackgroundSceneProps {
  darkMode: boolean;
}

const BackgroundScene: React.FC<BackgroundSceneProps> = ({ darkMode }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // Add renderer to DOM
    mountRef.current.appendChild(renderer.domElement);

    // Store a reference to the current mount element for cleanup
    const currentRef = mountRef.current;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;

    const posArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);

    // Fill arrays with random values
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 15; // x
      posArray[i + 1] = (Math.random() - 0.5) * 15; // y
      posArray[i + 2] = (Math.random() - 0.5) * 15; // z

      // Scale (for point size variation)
      scaleArray[i / 3] = Math.random();
    }

    // Set positions
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    particlesGeometry.setAttribute(
      "scale",
      new THREE.BufferAttribute(scaleArray, 1)
    );

    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      sizeAttenuation: true,
      transparent: true,
      alphaTest: 0.5,
      opacity: 0.8,
      color: darkMode ? 0x4f46e5 : 0x1e40af,
    });

    // Create points mesh
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Add an ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add a directional light
    const directionalLight = new THREE.DirectionalLight(
      darkMode ? 0x6366f1 : 0x4f46e5,
      0.8
    );
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Rotate the particles
      particlesMesh.rotation.x = elapsedTime * 0.05;
      particlesMesh.rotation.y = elapsedTime * 0.03;

      // Move based on mouse position with dampening
      particlesMesh.rotation.x +=
        (mouseY * 0.1 - particlesMesh.rotation.x) * 0.05;
      particlesMesh.rotation.y +=
        (mouseX * 0.1 - particlesMesh.rotation.y) * 0.05;

      // Render the scene
      renderer.render(scene, camera);

      // Request next frame
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      // Remove event listeners
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      // Dispose resources
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();

      // Remove renderer from DOM
      if (currentRef) {
        currentRef.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, [darkMode]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default BackgroundScene;
