import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";
import { useControls } from "leva";

const AnimatedBox = () => {
  const boxRef = useRef<Mesh>(null);

  const { speed, color } = useControls({
    color: "#00bfff",
    speed: {
      value: 0.005,
      min: 0,
      max: 0.03,
      step: 0.001,
    },
  });

  // update the mesh overtime will run repeatedly by each frame
  // that can be 60fps or per the display device refresh rate
  useFrame(() => {
    if (!boxRef.current) return;
    boxRef.current.rotation.x += speed;
    boxRef.current.rotation.y += speed;
    boxRef.current.rotation.z += speed;
  });
  return (
    <mesh ref={boxRef} position={[0, 2, 0]} castShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default AnimatedBox;
