import { Suspense, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as Three from "three";
import useConfiguratorStore, {
  type Asset as AssetType,
} from "../state-management/configuration-store";

import pb from "../configs/pocketbase.config";
import Asset from "./asset";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Avatar(props: any) {
  const group = useRef<Three.Group>(null);
  const { nodes } = useGLTF("/models/Armature.glb");
  const customization = useConfiguratorStore((state) => state.customization);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          {/* this contains all the bones */}
          <primitive object={nodes.mixamorigHips} />
          {Object.keys(customization).map((key) => {
            const asset = customization[key] as AssetType;
            // in case no url return null
            if (!asset?.url) return null;
            return (
              <Suspense key={asset.id}>
                <Asset
                  url={pb.files.getURL(asset, asset.url)}
                  skeleton={(nodes.Plane as Three.SkinnedMesh)?.skeleton}
                />
              </Suspense>
            );
          })}
        </group>
      </group>
    </group>
  );
}
export default Avatar;
