import { create } from "zustand";
import pb from "../configs/pocketbase.config";

// types

export interface Asset {
  id: string;
  name: string;
  group: string;
  thumbnail: string;
  url: File;
}

interface Category {
  id: string;
  name: string;
  position: number;
  assets?: Asset[];
}

interface ConfiguratorStore {
  categories: Category[];
  currentCategory: null | Category;
  assets: Asset[];
  fetchCategories: () => Promise<void>;
  setCurrentCategory: (category: Category) => void;
  customization: Record<string, object | Asset>;
  changeAsset: (category: string, asset: Asset) => void;
}

const initialState = {
  categories: [],
  currentCategory: null,
  assets: [],
  customization: {},
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
      .collection<Asset>("CustomizationAssets")
      .getFullList({
        sort: "-created",
      });
    const customization: Record<string, object> = {};
    categories.forEach((category) => {
      category.assets = assets.filter((asset) => asset.group === category.id);
      customization[category.name as string] = {};
    });

    set({
      categories: categories,
      currentCategory: categories[0],
      assets: assets,
      customization: customization,
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
  /**
   * function to set the customization
   */
  changeAsset: (category: string, asset: Asset) => {
    set((state) => ({
      customization: {
        ...state.customization,
        [category]: {
          ...state.customization[category],
          ...asset,
        },
      },
    }));
  },
}));

export default useConfiguratorStore;
