import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as Three from "three";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Avatar(props: any) {
  const group = useRef<Three.Group>(null);
  const { nodes } = useGLTF("/models/Armature.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          {/* this contains all the bones */}
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}
export default Avatar;
