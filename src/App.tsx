import { Canvas } from "@react-three/fiber";
import "./App.css";
import {
  OrbitControls,
  GizmoHelper,
  GizmoViewport,
  // GizmoViewcube,
} from "@react-three/drei";
// import AnimatedBox from "./components/animated-box";
import LightWithHelper from "./components/light-with-helper";
import DemoModel, { DemoModel2 } from "./components/demo-model";
import SphereWithTexture, {
  SphereWithTexture2,
} from "./components/sphere-with-texture";
import BoxWithTexture from "./components/box-with-texture";

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
        {/* <AnimatedBox /> */}
        <DemoModel />
        <DemoModel2 />
        <ambientLight intensity={0.5} color={"white"} />
        {/* <directionalLight position={[2, 5, 1]} intensity={1} /> */}
        <LightWithHelper />
        {/* <pointLight position={[2, 5, 1]} intensity={10} /> */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color={"gray"} />
        </mesh>
        <SphereWithTexture />
        <SphereWithTexture2 />
        <BoxWithTexture />
      </Canvas>
    </div>
  );
}

export default App;
