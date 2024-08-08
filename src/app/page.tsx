import { AllProduct } from "@/components/product/all-product";
import { Container } from "@/components/shared/container";
import { AppBar } from "@/components/shared/navigation/app-bar";
import { Button, buttonVariants } from "@/components/ui/button";
import { getAllProducts } from "@/data/product";
import { revalidateTag } from "next/cache";
import Link from "next/link";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const products = await getAllProducts({});

  return (
    <>
      <AppBar />
      <main className="text-gray-800">
        <Container className="mt-4">
          <h1 className="font-bold text-lg">Semua Produk</h1>
          <AllProduct products={products.data} />
        </Container>
      </main>
    </>
  );
}
