import { useRef } from "react";
import type { SpotLight } from "three";
import { SpotLightHelper } from "three";
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
        position={[2, 5, 1]}
        intensity={80}
        color={"yellow"}
      />
    </>
  );
};

export default LightWithHelper;
