import { useCubeTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
//import { SRGBColorSpace } from "three";

const SceneBackground = () => {
  const { scene } = useThree();
  const texture = useCubeTexture(
    [
      "castle_brick_02_red_diff_4k.jpg",
      "castle_brick_02_red_diff_4k.jpg",
      "cobblestone_floor_09_diff_4k.jpg",
      "castle_brick_02_red_diff_4k.jpg",
      "cobblestone_floor_09_diff_4k.jpg",
      "cobblestone_floor_09_diff_4k.jpg",
    ],
    {
      path: "/",
    },
  );
  //   texture.colorSpace = SRGBColorSpace;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  scene.background = texture;
  return <></>;
};

export default SceneBackground;
