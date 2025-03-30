import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

interface MediaPlaneProps {
  imagePath: string;
  position: [number, number, number];
  onClick: () => void;
}

const MediaPlane: React.FC<MediaPlaneProps> = ({
  imagePath,
  position,
  onClick,
}) => {
  const ref = useRef<THREE.Mesh>(null);
  console.log({imagePath})
  const overlayRef = useRef<THREE.Mesh>(null);
  const initialRotation = useRef(new THREE.Euler(0, 0, 0));
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const isVideo = imagePath.endsWith(".mp4");

  const [planeSize, setPlaneSize] = useState<[number, number]>([3, 1.7]);
  const [planePosition, setPlanePosition] = useState<[number, number, number]>(
    position
  );

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setPlaneSize([2, 1.2]);
        setPlanePosition([0, -1, -1]);
      } else if (width < 1024) {
        setPlaneSize([2.5, 1.4]);
        setPlanePosition([0, -2, -1]);
      } else {
        setPlaneSize([3, 1.7]);
        setPlanePosition([0, -3.5, -1]);
      }
    };

    handleResize(); // Initial call to set values
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [position]);

  // Load textures (image or video)
  useEffect(() => {
    let videoElement: HTMLVideoElement | null = null;

    if (isVideo) {
      videoElement = document.createElement("video");
      videoElement.src = imagePath;
      videoElement.loop = true;
      videoElement.muted = true;
      videoElement.play();
      const videoTexture = new THREE.VideoTexture(videoElement);
      setTexture(videoTexture);
    } else {
      const imageTexture = new THREE.TextureLoader().load(imagePath);
      setTexture(imageTexture);
    }

    // Cleanup video texture on unmount
    return () => {
      if (videoElement) {
        videoElement.pause();
        videoElement.src = "";
        setTexture(null); // Clear texture state
      }
    };
  }, [imagePath]);

  useEffect(() => {
    if (ref.current) {
      ref.current.lookAt(new THREE.Vector3(0, 0, 0));
      initialRotation.current = ref.current.rotation.clone();

      const geometry = ref.current.geometry;
      if (geometry && geometry.attributes && geometry.attributes.position) {
        const positions = geometry.attributes.position.array;

        gsap.to(
          {},
          {
            duration: 2,
            repeat: -1,
            onUpdate: () => {
              const time = Date.now() * 0.005;
              for (let i = 0; i < positions.length; i += 3) {
                const x = positions[i];
                positions[i + 2] = Math.sin(x * 1 + time) * 0.05;
              }
              geometry.attributes.position.needsUpdate = true;
            },
          }
        );
      }
    }
  }, [planePosition]);

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  return (
    <>
      <mesh
        ref={ref}
        position={planePosition}
        onPointerOver={isVideo ? handlePointerOver : undefined}
        onPointerOut={isVideo ? handlePointerOut : undefined}
      >
        <planeGeometry args={[planeSize[0], planeSize[1], 50, 10]} />
        <meshPhysicalMaterial
          map={texture}
          side={THREE.DoubleSide}
          opacity={0.9}
          emissiveIntensity={0.9}
          roughness={0.6}
          metalness={0.1}
        />

        {/* Conditional Play Button Overlay */}
        {isVideo && (
          <mesh ref={overlayRef} position={[0, 0, 0.07]} onClick={onClick}>
            <circleGeometry args={[0.2, 3]} />
            <meshBasicMaterial color="white" opacity={0.9} />
          </mesh>
        )}
      </mesh>
    </>
  );
};

export default MediaPlane;
