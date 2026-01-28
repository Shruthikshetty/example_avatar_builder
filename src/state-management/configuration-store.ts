import { create } from "zustand";
import pb from "../configs/pocketbase.config";

// types

interface Category {
  id: string;
  name: string;
  position: number;
}

interface ConfiguratorStore {
  categories: Category[];
  currentCategory: null | Category;
  assets: File[];
  fetchCategories: () => Promise<void>;
  setCurrentCategory: (category: Category) => void;
}

const initialState = {
  categories: [],
  currentCategory: null,
  assets: [],
};

/**
 * This store all the avatar configuration
 */
const useConfiguratorStore = create<ConfiguratorStore>((set) => ({
  ...initialState,
  /**
   * function to fetch categories from the server
   */
  fetchCategories: async () => {
    const categories = await pb
      .collection<Category>("CustomizationGroups")
      .getFullList({
        sort: "+position",
      });
    const assets = await pb
      .collection<File>("CustomizationAssets")
      .getFullList({
        sort: "-created",
      });

    set({
      categories: categories,
      currentCategory: categories[0],
      assets: assets,
    });
  },
  /**
   * function to set the current category
   */
  setCurrentCategory: (category: Category) => {
    set({
      currentCategory: category,
    });
  },
}));

export default useConfiguratorStore;
