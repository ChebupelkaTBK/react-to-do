import { useState } from "react";
import { useWishlistStore } from "../store/wishlistStor.ts";

export default function WishlistForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const addItem = useWishlistStore((state) => state.addItem);

  const handleAdd = () => {
    const trimmedTitle = title.trim();
    const numericPrice = Number(price);

    if (trimmedTitle === "" || numericPrice <= 0) return;

    addItem(trimmedTitle, numericPrice);
    setTitle("");
    setPrice("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAdd}>Добавить</button>
    </div>
  );
}
