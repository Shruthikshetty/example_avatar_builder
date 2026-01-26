import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

function DemoModel() {
  const { scene } = useLoader(GLTFLoader, "/models/MaterialsVariantsShoe.glb");
  return <primitive object={scene} position={[0, 0.3, 0]} />;
}

export default DemoModel;
