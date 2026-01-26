import { useRef } from "react";
import type { DirectionalLight, SpotLight } from "three";
import { DirectionalLightHelper, SpotLightHelper } from "three";
import { useHelper } from "@react-three/drei";
import { useControls } from "leva";

const LightWithHelper = () => {
  const lightRef = useRef<SpotLight>(null!);
  const { angle, penumbra } = useControls({
    angle: Math.PI / 8,
    penumbra: {
      value: 0,
      min: 0,
      max: 1,
      step: 0.1,
    },
  });
  useHelper(lightRef, SpotLightHelper, "orange");
  return (
    <>
      <spotLight
        ref={lightRef}
        penumbra={penumbra}
        angle={angle}
        position={[2, 10, 1]}
        intensity={80}
        color={"yellow"}
        castShadow
      />
    </>
  );
};

export const DirectionalLightWithHelper = () => {
  const lightRef = useRef<DirectionalLight>(null!);
  useHelper(lightRef, DirectionalLightHelper, 2, "crimson");

  return (
    <>
      <directionalLight
        ref={lightRef}
        position={[-5, 4, 1]}
        intensity={80}
        color={"yellow"}
        castShadow
      />
    </>
  );
};

export default LightWithHelper;
