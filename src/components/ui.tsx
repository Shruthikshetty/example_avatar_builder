import { User2 } from "lucide-react";
import DownloadButton from "./download-button";
import AssetsBox from "./assets-box";

function UI() {
  return (
    <main className="pointer-events-none fixed z-10 inset-0 p-10">
      <div className="mx-auto h-full max-w-7xl w-full flex flex-col  justify-between">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 pointer-events-auto">
            <User2 className="w-10 h-10 text-white" />
            <h1 className="font-bold text-2xl text-white">Avatar Builder</h1>
          </div>
          <DownloadButton />
        </div>
        <div className="flex flex-col gap-6">
          <AssetsBox />
        </div>
      </div>
    </main>
  );
}

export default UI;
