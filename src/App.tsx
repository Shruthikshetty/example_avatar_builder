import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="w-screen h-screen">
      <Canvas
        camera={{
          position: [3, 3, 3],
        }}
      >
        <color attach="background" args={["black"]} />
        <OrbitControls />
        <mesh>
          {/* <sphereGeometry args={[1, 40, 40]} /> */}
          {/* [radius  , widthSegments, heightSegments] */}
          <boxGeometry args={[2, 3, 2]} />
          <meshBasicMaterial color={"blue"} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
