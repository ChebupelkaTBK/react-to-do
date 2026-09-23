import { useWishlistStore } from "../store/wishlistStor.ts";

export default function WishlistList() {
  const items = useWishlistStore((state) => state.items);
  const toggleBought = useWishlistStore((state) => state.toggleBought);
  const removeItem = useWishlistStore((state) => state.removeItem);
  const filter = useWishlistStore((state) => state.filter);

  if (items.length === 0) {
    return <p>Список пуст</p>;
  }

  const visibleItems = items.filter((item) => {
    if (filter === "unbought") return !item.bought;
    if (filter === "bought") return item.bought;
    return true;
  });

  return (
    <ul>
      {visibleItems.map((item) => (
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
