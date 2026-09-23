import WishlistForm from "./components/WhishlistForm";
import WishlistList from "./components/Whishlist";
import WishlistStats from "./components/WhishlistStats";

export default function App() {
  return (
    <>
      <WishlistStats />
      <WishlistForm />
      <WishlistList />
    </>
  );
}
