import { FormCheckout } from "@/components/checkout/form";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import React from "react";

export default function page() {
  return (
    <Dialog defaultOpen={true} >
      <DialogContent>
        <FormCheckout />
      </DialogContent>
    </Dialog>
  );
}
