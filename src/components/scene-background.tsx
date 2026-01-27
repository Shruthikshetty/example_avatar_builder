import { useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { SRGBColorSpace } from "three";

const SceneBackground = () => {
  const { scene } = useThree();
  const texture = useTexture("castle_brick_02_red_diff_4k.jpg");
  texture.colorSpace = SRGBColorSpace;
  scene.background = texture;
};

export default SceneBackground;
