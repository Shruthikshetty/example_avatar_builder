import { Suspense, useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import * as Three from "three";
import useConfiguratorStore, {
  type Asset as AssetType,
} from "../state-management/configuration-store";

import pb from "../configs/pocketbase.config";
import Asset from "./asset";
import { GLTFExporter } from "three-stdlib";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Avatar(props: any) {
  const groupRef = useRef<Three.Group>(null);
  const { nodes } = useGLTF("/models/Armature.glb");
  const customization = useConfiguratorStore((state) => state.customization);
  const { animations } = useFBX("/models/Idle.fbx");
  const { actions } = useAnimations(animations, groupRef);
  const setDownloadAvatar = useConfiguratorStore(
    (state) => state.setDownloadAvatar,
  );

  useEffect(() => {
    function download() {
      const exporter = new GLTFExporter();
      exporter.parse(
        groupRef!.current!,
        function (result) {
          save(
            new Blob([result as ArrayBuffer], {
              type: "application/octet-stream",
            }),
            `avatar_${+new Date()}.glb`,
          );
        },
        function (error) {
          console.error(error);
        },
        { binary: true },
      );
    }

    const link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link);

    function save(blob: Blob, filename: string) {
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    }
    setDownloadAvatar(download);
  }, [setDownloadAvatar]);

  // play animation in effect
  useEffect(() => {
    actions?.["mixamo.com"]?.play();
  }, [actions]);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          {/* this contains all the bones */}
          <primitive object={nodes.mixamorigHips} />
          {Object.keys(customization).map((key) => {
            const asset = customization[key] as AssetType;
            // in case no url return null
            if (!asset?.url) return null;
            return (
              /* load asset with suspense so that it doesn't block the render */
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
