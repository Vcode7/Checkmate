// ThreeModel.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';

const ThreeModel = ({ 
  modelPath, 
  width = '100%', 
  height = '100%', 
  margin = '0', 
  padding = '0', 
  rotationSpeed = 0.002,
  tiltAngle = 0.1, // Angle in radians for tilt effect
  backgroundColor = 'rgba(0, 0, 0, 0)', // Transparent background by default
  style = {} // Additional styles if needed
}) => {
  const mountRef = useRef(null);
  const modelRef = useRef(null); // Reference for the 3D model
  const frameId = useRef(null); // Track the animation frame

  useEffect(() => {
    const mountNode = mountRef.current; // Save the initial value of mountRef.current

    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountNode.clientWidth / mountNode.clientHeight,
      0.8,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight);

    // Add renderer's DOM element to the component
    if (mountNode) {
      mountNode.appendChild(renderer.domElement);
    }

    // Set background color
    renderer.setClearColor(new THREE.Color(backgroundColor), 0); // 0 makes it transparent

    // Add ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffA500, 0.4);
    scene.add(ambientLight);

    // Add point light from above and front
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Add side light (directional light) for extra shading
    const sideLight = new THREE.DirectionalLight(0xffffff, 0.6);
    sideLight.position.set(-5, 1, 5);
    scene.add(sideLight);

    // Load the model
    const loader = new GLTFLoader();

    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5);
        scene.add(model);
        modelRef.current = model;

        // Set initial camera position and target
        camera.position.set(3, 2.8, 6);
        const targetPosition = new THREE.Vector3(-1.5, 2.8, 6);

        // Animation loop
        const animate = () => {
          if (!modelRef.current) return; // Stop if the model reference is cleared

          // Rotate model and apply tilt effect
          modelRef.current.rotation.y += rotationSpeed;

          // Smoothly move the camera position towards the target
          camera.position.lerp(targetPosition, 0.02);

          renderer.render(scene, camera);
          frameId.current = requestAnimationFrame(animate);
        };

        animate();
      },
      undefined,
      (error) => console.error('An error occurred while loading the model:', error)
    );

    // Cleanup on component unmount
    return () => {
      // Stop animation loop
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }

      // Dispose of the renderer and other resources safely
      if (renderer) {
        renderer.dispose();
      }
      if (mountNode && renderer.domElement) {
        mountNode.removeChild(renderer.domElement); // Use mountNode for consistent reference
      }
      if (scene) {
        scene.clear(); // Remove all objects from the scene
      }
      modelRef.current = null; // Clear model reference
    };
  }, [modelPath, rotationSpeed, tiltAngle, backgroundColor]);

  return (
    <div
      ref={mountRef}
      style={{
        width,
        height,
        margin,
        padding,
        ...style, // Additional styles if provided
      }}
    />
  );
};

export default ThreeModel;
