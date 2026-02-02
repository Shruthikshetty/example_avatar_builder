import useConfiguratorStore from "../state-management/configuration-store";

function DownloadButton() {
  const downloadAvatar = useConfiguratorStore((state) => state.downloadAvatar);
  return (
    <button
      className="rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300 text-white font-medium px-4 py-3 pointer-events-auto drop-shadow-md"
      onClick={() => {
        downloadAvatar?.();
      }}
    >
      Download
    </button>
  );
}

export default DownloadButton;
