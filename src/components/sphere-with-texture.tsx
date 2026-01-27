import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useTexture } from "@react-three/drei";

function SphereWithTexture() {
  const texture = useLoader(TextureLoader, "/cobblestone_floor_09_diff_4k.jpg");
  return (
    <mesh position={[-0.7, 0.5, 0]} scale={0.2}>
      <sphereGeometry />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export function SphereWithTexture2() {
  const texture = useTexture("/brown_mud_leaves_01_diff_4k.jpg");
  return (
    <mesh position={[-0.7, 0.5, -0.7]} scale={0.2}>
      <sphereGeometry />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default SphereWithTexture;
