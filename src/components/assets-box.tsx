import { useEffect } from "react";
import useConfiguratorStore, {
  type Asset,
} from "../state-management/configuration-store";
import { useShallow } from "zustand/react/shallow";
import pb from "../configs/pocketbase.config";

const AssetsBox = () => {
  // get the state from the store
  const {
    categories,
    currentCategory,
    fetchCategories,
    setCurrentCategory,
    customization,
    changeAsset,
  } = useConfiguratorStore(
    useShallow((state) => ({
      categories: state.categories,
      currentCategory: state.currentCategory,
      fetchCategories: state.fetchCategories,
      setCurrentCategory: state.setCurrentCategory,
      changeAsset: state.changeAsset,
      customization: state.customization,
    })),
  );
  /**
   * fetch the categories from the server
   */
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="rounded-2xl bg-white drop-shadow-md p-1 gap-6 flex flex-col pointer-events-auto px-4 overflow-auto">
      <div className="flex items-center gap-1 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setCurrentCategory(category);
            }}
            className={`px-4 py-2 rounded-xl transition-colors duration-200 font-medium ${
              currentCategory?.id === category.id
                ? "bg-indigo-500 text-white"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-100/50"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap">
        {currentCategory?.assets?.map((asset) => (
          <button
            key={asset.id}
            onClick={() => changeAsset(currentCategory.name, asset)}
            className={`w-20 h-20 rounded-md overflow-hidden bg-gray-200 pointer-events-auto hover:opacity-75 transition-all duration-500 border border-gray-400 ${
              (customization[currentCategory.name] as Asset)?.id === asset.id
                ? "border-indigo-500 border opacity-100"
                : "opacity-50 border-transparent"
            }`}
          >
            <img
              src={pb.files.getURL(asset, asset.thumbnail)}
              alt={asset.name}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default AssetsBox;
