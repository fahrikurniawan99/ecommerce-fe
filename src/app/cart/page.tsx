import { CartListItem } from "@/components/cart/cart-list";
import { Container } from "@/components/shared/container";
import { Navbar } from "@/components/shared/navbar";
import { buttonVariants } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <main className="text-gray-800">
        <Container className="mt-4 max-w-[700px]">
          <CartListItem />
        </Container>
      </main>
    </>
  );
}
