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
    <div className="rounded-2xl bg-white drop-shadow-md gap-6 flex flex-col">
      <div className="flex items-center gao-6 pointer-events-auto">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setCurrentCategory(category);
            }}
            className={`transition-colors duration-200 font-medium ${currentCategory?.id === category.id ? "bg-indigo-500" : "text-gray-500 hover:text-gray-700"}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default AssetsBox;
