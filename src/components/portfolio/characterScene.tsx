import React, { useRef, useEffect, useState } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import Character from "./character3d";
import MediaPlane from "./mediaPlane";
import { usePortfolio } from "@/hook/usePortfolio";

type Portfolio = {
  id: number;
  date: string;
  details: string;
  fileType: "image" | "video" | "youtube";
  mediaUrl: string;
};

// const mediaPaths: string[] = [
//   "/Football/1.webp",
//   "/Football/2.webp",
//   "/videos/football-1.mp4",
//   "/videos/football-2.mp4",
//   "/videos/football-3.mp4",
//   "/Football/Football-06.webp",
//   "/Football/Football-02.webp",
//   "/Football/Football-03.webp",
//   "/Football/Football-04.webp",
//   "/Football/Football-05.webp",
// ];

interface CharacterSceneProps {
  onVideoSelect: (url: string) => void;
}

const CharacterScene: React.FC<CharacterSceneProps> = ({ onVideoSelect }) => {
  const { camera } = useThree();
  const characterRef = useRef<THREE.Group>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { queryClient, getPortfolio } = usePortfolio();
  const scrollY = useRef(0);
  const targetScrollY = useRef(0);
  const [showMediaPlanes, setShowMediaPlanes] = useState(false);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  const mediaPaths = queryClient.getQueryData(["portfolio"]) as Portfolio[];

  if (!mediaPaths || !mediaPaths?.length) getPortfolio?.refetch();

  const baseScrollSpeed = 0.001;
  const dragScrollMultiplier = 0.005; // Adjusted for smoother drag speed
  const rotationSpeed = 0.025; // Character rotation speed
  const maxScrollY = mediaPaths?.length * 1.75; // Max scroll distance
  const dampingFactor = 0.1; // Smoothing factor for scroll interpolation

  // Smoothly update positions of media planes and character rotation
  const updateMediaPlanes = () => {
    if (!groupRef.current) return;

    // Interpolate scrollY toward targetScrollY
    scrollY.current +=
      (targetScrollY.current - scrollY.current) * dampingFactor;

    groupRef.current.children.forEach((child, idx) => {
      const positionY = scrollY.current - 1.35 + idx * 1.75;
      const radius = 6.5 + Math.sin(positionY * 0.1) * 0.5;
      const positionX = Math.cos(positionY) * radius;
      const positionZ = -Math.sin(positionY) * radius;
      const adjustedY = -positionY - 1.5;

      child.position.set(positionX, adjustedY, positionZ);

      if (characterRef.current) {
        const characterPosition = new THREE.Vector3();
        characterRef.current.getWorldPosition(characterPosition);

        const directionToCharacter = new THREE.Vector3()
          .subVectors(characterPosition, child.position)
          .normalize();
        const oppositeDirection = directionToCharacter.multiplyScalar(-1);
        child.lookAt(child.position.clone().add(oppositeDirection));
      }
    });

    if (characterRef.current) {
      gsap.to(characterRef.current.rotation, {
        y: scrollY.current * rotationSpeed,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    gsap.fromTo(
      camera.position,
      { x: -50, z: 35 },
      {
        x: 2,
        y: -5,
        z: 9.5,
        duration: 3.5,
        ease: "power1.out",
        onComplete: () => setShowMediaPlanes(true),
      }
    );

    const handleScroll = (delta: number) => {
      targetScrollY.current += delta * baseScrollSpeed;
      targetScrollY.current = Math.max(
        -maxScrollY,
        Math.min(0, targetScrollY.current)
      );
    };

    const handleDragStart = (event: MouseEvent | TouchEvent) => {
      isDragging.current = true;
      dragStartX.current =
        event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
    };

    const handleDragMove = (event: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;

      const currentX =
        event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
      const deltaX = currentX - dragStartX.current;

      dragStartX.current = currentX;

      targetScrollY.current += deltaX * dragScrollMultiplier;
      targetScrollY.current = Math.max(
        -maxScrollY,
        Math.min(0, targetScrollY.current)
      );
    };

    const handleDragEnd = () => {
      isDragging.current = false;
    };

    window.addEventListener("wheel", (event) => handleScroll(-event.deltaY), {
      passive: false,
    });
    window.addEventListener("mousedown", handleDragStart);
    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchstart", handleDragStart, { passive: true });
    window.addEventListener("touchmove", handleDragMove, { passive: false });
    window.addEventListener("touchend", handleDragEnd);

    return () => {
      window.removeEventListener("wheel", (event) =>
        handleScroll(-event.deltaY)
      );
      window.removeEventListener("mousedown", handleDragStart);
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchstart", handleDragStart);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);
      document.body.style.overflow = "";
    };
  }, [camera]);

  useEffect(() => {
    const animate = () => {
      updateMediaPlanes();
      requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(requestAnimationFrame(animate));
  }, []);

  const handleMediaPlaneClick = (path: string) => {
    if (path.endsWith(".mp4")) {
      onVideoSelect(path);
    }
  };

  return (
    <group>
      <group ref={characterRef}>
        <Character />
      </group>

      {showMediaPlanes && (
        <group ref={groupRef}>
          {mediaPaths?.map((imagePath, index) => (
            <MediaPlane
              key={imagePath.id}
              imagePath={imagePath.mediaUrl}
              position={[
                Math.cos(index * (Math.PI / 3.5)) * 2,
                index * 2.5 - 3,
                Math.sin(index * (Math.PI / 3.5)) * 2,
              ]}
              onClick={() => handleMediaPlaneClick(imagePath.mediaUrl)}
            />
          ))}
        </group>
      )}
    </group>
  );
};

export default CharacterScene;
