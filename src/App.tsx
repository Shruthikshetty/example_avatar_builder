import { Canvas } from "@react-three/fiber";
import "./App.css";
import UI from "./components/ui";
import Experience from "./components/experience";

function App() {
  return (
    <div className="w-screen h-screen">
      <UI />
      <Canvas
        camera={{
          position: [-1, 1, 5],
          fov: 45,
        }}
        shadows
      >
        <color attach="background" args={["#555"]} />
        <fog attach="fog" args={["#555", 15, 25]} />
        <group position-y={-1}>
          <Experience />
        </group>
      </Canvas>
    </div>
  );
}

export default App;
