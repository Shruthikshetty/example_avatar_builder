/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import type { Skeleton } from "three";

const Asset = ({ url, skeleton }: { url: string; skeleton: Skeleton }) => {
  const { scene } = useGLTF(url);

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if ((child as any).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
      if ((child as any).isSkinnedMesh) {
        (child as any).skeleton = skeleton;
        (child as any).frustumCulled = false;
      }
    });
    return clone;
  }, [scene, skeleton]);

  return <primitive object={clonedScene} dispose={null} />;
};

export default Asset;
