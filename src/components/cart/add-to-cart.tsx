"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Button, buttonVariants } from "../ui/button";
import { IProduct } from "@/types/product";
import { useCartLocalStorage } from "@/hooks/use-cart";
import { ICartItem } from "@/types/cart";
import { FaX } from "react-icons/fa6";

export const AddToCart = ({ product }: { product: IProduct }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const localStorageCart = useCartLocalStorage();

  const addItemToCart = () => {
    openAlert();
  };
  const cartItem: ICartItem = { product, qty: 1 };

  const closeAlert = () => setIsOpen(false);
  const openAlert = () => setIsOpen(true);

  const goToCartPage = () => {
    localStorageCart.addCartItem(cartItem);
    router.push("/cart");
  };

  const continueShopping = () => {
    localStorageCart.addCartItem(cartItem);
    closeAlert();
  };

  return (
    <>
      <AlertDialog open={isOpen}>
        <AlertDialogContent className="w-fit">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              {localStorageCart.isItemExist(product.id) ? (
                <div className="w-6 rounded-full flex aspect-square bg-red-500">
                  <FaX className="m-auto text-xs text-white" />
                </div>
              ) : (
                <div className="w-6 rounded-full flex aspect-square bg-primary-color">
                  <FaCheck className="m-auto text-xs text-white" />
                </div>
              )}
              {localStorageCart.isItemExist(product.id)
                ? "Gagal Memproses"
                : "Berhasil"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {localStorageCart.isItemExist(product.id)
                ? "Produk sudah ada pada keranjang"
                : "Produk berhasil ditambahkan ke keranjang"}
            </AlertDialogDescription>
            <AlertDialogDescription className="flex justify-end pt-4 gap-3">
              <Button onClick={goToCartPage}>Lihat Keranjang</Button>
              <Button onClick={continueShopping} variant={"outline"}>
                Lanjutkan belanja
              </Button>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
      <div className="flex">
        <Button
          onClick={addItemToCart}
          className={buttonVariants({
            variant: "outline",
            className:
              "mt-2 ml-auto border-primary-color text-primary-color hover:bg-primary-color/10 hover:text-primary-color/95 xl:w-full xl:gap-2",
          })}
        >
          <MdAddShoppingCart className="text-xl" />
          <span className="hidden xl:inline-block">Tambahkan</span>
        </Button>
      </div>
    </>
  );
};
