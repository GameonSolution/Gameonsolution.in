import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Character: React.FC = () => {
  const { scene } = useGLTF("/3dModel/playerWithGrass3dModel.glb") as { scene: THREE.Group };

  // State to hold dynamic scale and position values
  const [scale, setScale] = useState(0.03);
  const [position, setPosition] = useState([0, -0.03, 0]);

  useEffect(() => {
    // Function to handle window resize and adjust scale and position
    const handleResize = () => {
      const width = window.innerWidth;

      // Adjust scale based on the window width
      if (width < 768) {
        setScale(0.045); // Smaller scale for mobile
        setPosition([-0.5, -3.75, 0]); // Adjust position for mobile
      } else if (width < 1024) {
        setScale(0.04); // Medium scale for tablets
        setPosition([0, -3.8, 0]); // Adjust position for tablets
      } else {
        setScale(0.045); // Larger scale for desktop
        setPosition([0, -4, 0]); // Default position for desktop
      }
    };

    // Call the resize handler on initial load and window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Add some ambient animation to the character
  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;

      // Apply silver material to character meshes
      if (child.material instanceof THREE.MeshStandardMaterial) {
        child.material.metalness = 0.45;
        child.material.roughness = 0.35;
        child.material.color = new THREE.Color(0xc0c0c0);
      }

      // Apply green color to the grass mesh by checking its name
      if (
        child.name === "Grass_v2" &&
        child.material instanceof THREE.MeshStandardMaterial
      ) {
        child.material.metalness = 0.4;
        child.material.roughness = 0.5;
        child.material.color = new THREE.Color(0x4f5e34); // Forest green color for grass
      }

      // Apply green color to the circle mesh by checking its name
      if (
        (child.name === "Circle001" ||
          child.name === "Circle002" ||
          child.name === "Circle003") &&
        child.material instanceof THREE.MeshStandardMaterial
      ) {
        child.material.metalness = 0.4;
        child.material.roughness = 0.5;
        child.material.color = new THREE.Color(0xedebeb); // Forest green color for grass
      }
    }
  });

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={[0, -7, 0]}
    />
  );
};

export default Character;
