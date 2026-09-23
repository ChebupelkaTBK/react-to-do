import { useWishlistStore } from "../store/wishlistStor.ts";

export default function WishlistList() {
  const items = useWishlistStore((state) => state.items);
  const toggleBought = useWishlistStore((state) => state.toggleBought);
  const removeItem = useWishlistStore((state) => state.removeItem);

  if (items.length === 0) {
    return <p>Список пуст</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span
            onClick={() => toggleBought(item.id)}
            style={{ textDecoration: item.bought ? "line-through" : "none" }}
          >
            {item.title} — {item.price} ₽
          </span>
          <button onClick={() => removeItem(item.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}
