import { useWishlistStore } from "../store/wishlistStor";

export default function WishlistFilters() {
  const filter = useWishlistStore((state) => state.filter);
  const setFilter = useWishlistStore((state) => state.setFilter);

  return (
    <div>
      <button onClick={() => setFilter("all")} disabled={filter === "all"}>
        Все
      </button>
      <button onClick={() => setFilter("unbought")} disabled={filter === "unbought"}>
        Не куплено
      </button>
      <button onClick={() => setFilter("bought")} disabled={filter === "bought"}>
        Куплено
      </button>
    </div>
  );
}
