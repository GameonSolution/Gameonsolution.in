import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

const Football = () => {
  const ballRef = useRef<Mesh>(null);
  const { scene } = useGLTF("/3dModel/soccer_ball.glb"); // Adjust the path as needed

  // Bounce animation variables
  const bounceHeight = 0; // Maximum height for the bounce
  const bounceSpeed = 0; // Speed of the bounce (higher = faster)

  useFrame(({ clock }) => {
    if (ballRef.current) {
      // Rotate the ball around both X and Y axes
      ballRef.current.rotation.y += 0; // Spin on Y-axis
      ballRef.current.rotation.x += 0.005; // Spin on X-axis for realistic effect

      // Apply smooth bounce using sine wave
      const time = clock.getElapsedTime();
      ballRef.current.position.y =
        Math.abs(Math.sin(time * bounceSpeed)) * bounceHeight;
    }
  });

  return <primitive ref={ballRef} object={scene} scale={[2.5, 2.5, 2.5]} />;
};

const FootballAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="flex justify-center w-[200px] h-[200px] items-center bg-transparent">
      {/* Adjust Above div width and height as needed */}
      <Canvas ref={canvasRef}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, 10, 5]} intensity={1} />
        <Football />
      </Canvas>
    </div>
  );
};

// Preload the GLTF model
useGLTF.preload("./soccer_ball.glb");

export default FootballAnimation;
