import HorizontalScrollList from "./components/HorizontalScrollList";
import { getProducts } from "./action";

export default async function Page() {
  const products = await getProducts();

  return <HorizontalScrollList products={products} />;
}

