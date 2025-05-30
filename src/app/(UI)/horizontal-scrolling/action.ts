import { Product } from "./interface/product";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    "https://66004593df565f1a61460832.mockapi.io/product",
    {
      // รันฝั่ง server (default cache: no-store ทำให้ fetch ใหม่ทุกครั้ง)
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

