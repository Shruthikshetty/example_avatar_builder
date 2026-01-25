import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <color attach="background" args={["gray"]} />
        <OrbitControls />
        <mesh>
          {/* <sphereGeometry args={[1, 40, 40]} /> */}
          {/* [radius  , widthSegments, heightSegments] */}
          {/* <boxGeometry args={[2, 3, 2]} /> */}
          <torusKnotGeometry args={[1.5, 0.3, 256, 256]} />
          <meshPhongMaterial color={"blue"} />
          {/* we need light for materials like mesh pong to work */}
          <directionalLight position={[2, 5, 1]} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
