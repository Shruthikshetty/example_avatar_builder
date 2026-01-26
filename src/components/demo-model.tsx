import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useGLTF } from "@react-three/drei";
function DemoModel() {
  const { scene } = useLoader(GLTFLoader, "/models/MaterialsVariantsShoe.glb");
  return <primitive object={scene} position={[-1.5, 0.3, 0]} />;
}

export function DemoModel2() {
  const { scene } = useGLTF("/models/SheenWoodLeatherSofa.glb");
  return <primitive object={scene} position={[0.5, 0.3, 0]} scale={0.5} />;
}

export default DemoModel;
