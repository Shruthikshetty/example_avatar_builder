import { useEffect } from "react";
import useConfiguratorStore from "../state-management/configuration-store";
import { useShallow } from "zustand/react/shallow";

const AssetsBox = () => {
  // get the state from the store
  const { categories, currentCategory, fetchCategories, setCurrentCategory } =
    useConfiguratorStore(
      useShallow((state) => ({
        categories: state.categories,
        currentCategory: state.currentCategory,
        fetchCategories: state.fetchCategories,
        setCurrentCategory: state.setCurrentCategory,
      })),
    );
  /**
   * fetch the categories from the server
   */
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="rounded-2xl bg-white drop-shadow-md p-1 gap-6 flex flex-col pointer-events-auto">
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
    </div>
  );
};

export default AssetsBox;
