import ProductsList from "../Components/productslist";

export default function Home() {
  const limit = 20;
  return (
    <main>
      <ProductsList limit={limit} />
    </main>
  );
}