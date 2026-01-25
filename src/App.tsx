import { Canvas } from "@react-three/fiber";
import "./App.css";
import { FirstPersonControls } from "@react-three/drei";
import AnimatedBox from "./components/animated-box";

function App() {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <color attach="background" args={["gray"]} />
        {/* <OrbitControls /> */}
        <FirstPersonControls movementSpeed={5} />
        <AnimatedBox />
        <directionalLight position={[2, 5, 1]} />
      </Canvas>
    </div>
  );
}

export default App;
