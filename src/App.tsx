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
          position: [3, 3, 3],
        }}
      >
        <color attach="background" args={["gray"]} />
        <Experience />
      </Canvas>
    </div>
  );
}

export default App;
