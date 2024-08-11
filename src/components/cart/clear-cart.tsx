"use client";

import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { useCartLocalStorage } from "@/hooks/use-cart";
import { toast } from "react-toastify";

export const ClearCartAlert = () => {
  const localStorageCart = useCartLocalStorage();
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button
          variant={"ghost"}
          className="text-red-600 hover:text-red-600"
          size={"sm"}
        >
          Hapus Semua
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Apakah anda yakin ingin menghapus ?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Semua item yang ada di keranjang akan dihapus.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batalkan</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              localStorageCart.clearCart();
              toast.success("Keranjang berhasil dihapus");
            }}
          >
            Lanjutkan
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
