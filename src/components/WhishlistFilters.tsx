import { useShallow } from "zustand/shallow";
import { useWishlistStore } from "../store/wishlistStor";

export default function WishlistFilters() {
  const { filter, setFilter } = useWishlistStore(
    useShallow((state) => ({
      filter: state.filter,
      setFilter: state.setFilter,
    })),
  );

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
