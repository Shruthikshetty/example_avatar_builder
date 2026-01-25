import { Canvas } from "@react-three/fiber";
import "./App.css";
import {
  OrbitControls,
  GizmoHelper,
  GizmoViewport,
  // GizmoViewcube,
} from "@react-three/drei";
import AnimatedBox from "./components/animated-box";

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
        <color attach="background" args={["white"]} />
        <OrbitControls />
        <AnimatedBox />
        <directionalLight position={[2, 5, 1]} />
      </Canvas>
    </div>
  );
}

export default App;
