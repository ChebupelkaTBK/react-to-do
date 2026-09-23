import { create } from "zustand";
import { persist } from "zustand/middleware";

type WishFilter = "all" | "unbought" | "bought";

interface WishItem {
  id: number;
  title: string;
  price: number;
  bought: boolean;
}
interface WishlistState {
  items: WishItem[];
  filter: WishFilter;
  addItem: (title: string, price: number) => void;
  toggleBought: (id: number) => void;
  removeItem: (id: number) => void;
  setFilter: (filter: WishFilter) => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set): WishlistState => ({
      items: [],
      filter: "all",

      addItem: (title, price) =>
        set((state) => ({
          items: [...state.items, { id: Date.now(), title, price, bought: false }],
        })),

      toggleBought: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, bought: !item.bought } : item,
          ),
        })),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      setFilter: (filter) => set({ filter }),
    }),
    { name: "whislist-storage" },
  ),
);
