import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import type { Mesh } from "three";
import { useControls } from "leva";

const AnimatedBox = () => {
  const boxRef = useRef<Mesh>(null);
  const [isWireFrame, setIsWireFrame] = useState(false);

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

  function handleClick() {
    setIsWireFrame(!isWireFrame);
  }

  return (
    <mesh
      ref={boxRef}
      position={[0, 3, 0]}
      castShadow
      onClick={handleClick}
      scale={0.5}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} wireframe={isWireFrame} />
    </mesh>
  );
};

export default AnimatedBox;
