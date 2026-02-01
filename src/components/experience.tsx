import {
  Backdrop,
  Environment,
  OrbitControls,
  // SoftShadows,
} from "@react-three/drei";
import Avatar from "./avatar";

function Experience() {
  return (
    <>
      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
      />
      {/* environment */}
      <Environment preset="sunset" environmentIntensity={0.3} />

      <Backdrop
        receiveShadow={true}
        scale={[50, 10, 5]}
        floor={1.5}
        position-y={-1}
      >
        <meshStandardMaterial color="#555" />
      </Backdrop>
      {/* TODO not working */}
      {/* <SoftShadows size={52} samples={16} /> */}

      {/* lights */}
      {/* key light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={2.2}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      />
      {/* fill light */}
      <directionalLight position={[-5, 5, 5]} intensity={0.7} />
      {/* back light */}
      <directionalLight position={[1, 0.1, -5]} intensity={3} color={"red"} />
      <directionalLight position={[-1, 0.1, -5]} intensity={3} color={"red"} />
      {/* avatar */}
      <Avatar />
    </>
  );
}
export default Experience;
