import { FormCheckout } from "@/components/checkout/form";
import { Container } from "@/components/shared/container";
import React from "react";

export default function page() {

  return (
    <Container>
      <div className="max-w-[500px] mt-5">
        <FormCheckout />
      </div>
    </Container>
  );
}
