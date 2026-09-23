import WishlistForm from "./components/WhishlistForm";
import WishlistList from "./components/Whishlist";
import WishlistStats from "./components/WhishlistStats";
import WishlistFilters from "./components/WhishlistFilters";

export default function App() {
  return (
    <>
      <WishlistStats />
      <WishlistFilters />
      <WishlistForm />
      <WishlistList />
    </>
  );
}
