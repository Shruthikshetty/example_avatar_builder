import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

const AnimatedBox = () => {
  const boxRef = useRef<Mesh>(null);

  // update the mesh overtime will run repeatedly by each frame
  // that can be 60fps or per the display device refresh rate
  useFrame(() => {
    if (!boxRef.current) return;
    boxRef.current.rotation.x += 0.005;
    boxRef.current.rotation.y += 0.005;
    boxRef.current.rotation.z += 0.005;
  });
  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"#00bfff"} />
    </mesh>
  );
};

export default AnimatedBox;
