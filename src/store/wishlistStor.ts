import { create } from "zustand";

interface WishItem {
  id: number;
  title: string;
  price: number;
  bought: boolean;
}
interface WishlistState {
  items: WishItem[];
  addItem: (title: string, price: number) => void;
  toggleBought: (id: number) => void;
  removeItem: (id: number) => void;
}

export const useWishlistStore = create<WishlistState>()((set) => ({
  items: [],

  addItem: (title, price) =>
    set((state) => ({
      items: [...state.items, { id: Date.now(), title, price, bought: false }],
    })),

  toggleBought: (id) =>
    set((state) => ({
      items: state.items.map((item) => (item.id === id ? { ...item, bought: !item.bought } : item)),
    })),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));
