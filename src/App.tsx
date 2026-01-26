import { Canvas } from "@react-three/fiber";
import "./App.css";
import {
  OrbitControls,
  GizmoHelper,
  GizmoViewport,
  // GizmoViewcube,
} from "@react-three/drei";
import AnimatedBox from "./components/animated-box";
import LightWithHelper, {
  DirectionalLightWithHelper,
} from "./components/light-with-helper";

function App() {
  return (
    <div className="w-screen h-screen">
      <Canvas shadows>
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport />
          {/* <GizmoViewcube /> */}
        </GizmoHelper>
        {/* shows the axis*/}
        <axesHelper args={[10]} />
        {/* shows the grid*/}
        {/* [length , divisions , color of center lines , color of lines] */}
        <gridHelper args={[10, 10, "red", "blue"]} />
        <color attach="background" args={["gray"]} />
        <OrbitControls />
        <AnimatedBox />
        <ambientLight intensity={0.5} color={"white"} />
        {/* <directionalLight position={[2, 5, 1]} intensity={1} /> */}
        <DirectionalLightWithHelper />
        {/* <pointLight position={[2, 5, 1]} intensity={10} /> */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color={"gray"} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
