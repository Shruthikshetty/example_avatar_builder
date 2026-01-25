import { Canvas } from "@react-three/fiber";
import "./App.css";
import {
  OrbitControls,
  GizmoHelper,
  GizmoViewport,
  // GizmoViewcube,
} from "@react-three/drei";
import AnimatedBox from "./components/animated-box";
import LightWithHelper from "./components/light-with-helper";

function App() {
  return (
    <div className="w-screen h-screen">
      <Canvas>
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
        {/* <ambientLight intensity={0.5} color={"white"} /> */}
        {/* <directionalLight position={[2, 5, 1]} intensity={1} /> */}
        <LightWithHelper />
      </Canvas>
    </div>
  );
}

export default App;
