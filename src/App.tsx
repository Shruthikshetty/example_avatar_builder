import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import UI from "./components/ui";

function App() {
  return (
    <div className="w-screen h-screen">
      <UI />
      <Canvas
        camera={{
          position: [3, 3, 3],
        }}
      >
        <color attach="background" args={["black"]} />
        <OrbitControls />
        <mesh>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
