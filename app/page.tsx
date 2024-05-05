import Slider from "./Components/Slider";
import ProductsList from "./Components/productslist";

export default function Home() {
  const limit = 5;
  return (
    <main>
      <Slider />
      <ProductsList limit={limit} />
    </main>
  );
}