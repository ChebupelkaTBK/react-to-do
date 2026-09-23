import { useWishlistStore } from "../store/wishlistStor.ts";

export default function WishlistStats() {
  const totalRemaining = useWishlistStore((state) =>
    state.items.filter((item) => !item.bought).reduce((sum, item) => sum + item.price, 0),
  );

  return <p>Осталось потратить: {totalRemaining} ₽</p>;
}
