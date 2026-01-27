import { useTexture } from "@react-three/drei";

const BoxWithTexture = () => {
  const texture1 = useTexture("/brown_mud_leaves_01_diff_4k.jpg");
  const texture2 = useTexture("/cobblestone_floor_09_diff_4k.jpg");

  return (
    <mesh position={[-0.3, 0.5, 1]} scale={0.3}>
      <boxGeometry />
      <meshBasicMaterial map={texture1} attach="material-0" />
      <meshBasicMaterial map={texture2} attach="material-1" />
      <meshBasicMaterial map={texture1} attach="material-2" />
      <meshBasicMaterial map={texture2} attach="material-3" />
      <meshBasicMaterial map={texture1} attach="material-4" />
      <meshBasicMaterial map={texture2} attach="material-5" />
      <meshBasicMaterial map={texture1} attach="material-6" />
    </mesh>
  );
};

export default BoxWithTexture;
