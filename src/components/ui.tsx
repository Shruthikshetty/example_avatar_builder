import { User2 } from "lucide-react";
import DownloadButton from "./download-button";
import AssetsBox from "./assests-box";

function UI() {
  return (
    <main className="pointer-events-none fixed z-10 inset-0 p-10">
      <div className="mx-auto h-full max-w-7xl w-full flex flex-col  justify-between">
        <div className="flex justify-between items-center">
          <div>
            <User2 />
            <h1>Avatar Builder</h1>
          </div>
          <DownloadButton />
          <div className="flex flex-col gap-6">
            <AssetsBox />
          </div>
        </div>
      </div>
    </main>
  );
}

export default UI;
