import { ProductListAll } from "@/components/product/product-list-all";
import { Container } from "@/components/shared/container";
import { Navbar } from "@/components/shared/navbar";
import { getAllProducts } from "@/data/product";
import Link from "next/link";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <>
      <Navbar />
      <main className="text-gray-800">
        <Container className="mt-4">
          <h1 className="font-bold text-lg">Semua Produk</h1>
          <ProductListAll dataProducts={products.data} />
        </Container>
      </main>
    </>
  );
}
