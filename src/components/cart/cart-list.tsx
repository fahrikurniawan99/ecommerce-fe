"use client";

import { useCartLocalStorage } from "@/hooks/use-cart";
import { formatNumberToRupiah } from "@/lib/numbers";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Container } from "../shared/container";
import { Button } from "../ui/button";
import { ClearCartAlert } from "./clear-cart";
import Link from "next/link";

export const CartListItem = () => {
  const localStorageCart = useCartLocalStorage();
  const data = localStorageCart.getData();
  const router = useRouter();

  return (
    <div className="mb-28">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg">Keranjang</h1>
        <Button
          onClick={() => router.back()}
          variant="link"
          className="text-gray-500"
        >
          Kembali
        </Button>
      </div>
      <div className="flex justify-between mt-3 mb-5 ">
        <p className="text-gray-500">
          {localStorageCart.getTotalItems()} Items
        </p>
        <ClearCartAlert />
      </div>
      <div className="text-gray-800 space-y-5 mt-5">
        {data.length <= 0 ? (
          <p className="text-gray-500">Tidak ada item.</p>
        ) : (
          data.map((item, index) => {
            return (
              <div key={index} className="flex gap-3">
                <div className="w-20 h-20 bg-gray-200 relative shrink-0">
                  <Image alt="not-found" src={item.product.images[0]} fill />
                </div>
                <div className="w-full">
                  <h1 className="line-clamp-1 font-bold">
                    {item.product.name}
                  </h1>
                  <p>{formatNumberToRupiah(item.product.price)}</p>
                  <div className="flex justify-end mt-2 items-center">
                    <Button
                      disabled={item.qty == 1}
                      onClick={() =>
                        localStorageCart.reduceQty(item.product.id)
                      }
                      className=""
                      variant={"outline"}
                      size={"icon"}
                    >
                      <FaMinus />
                    </Button>
                    <p className="w-[50px] border-none text-center">
                      {item.qty}
                    </p>
                    {/* <InputNumber
                      minLength={0}
                      value={item.qty}
                    /> */}
                    <Button
                      onClick={() => localStorageCart.addQty(item.product.id)}
                      className=""
                      variant={"outline"}
                      size={"icon"}
                    >
                      <FaPlus />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="fixed bg-white bottom-0 py-5 border-t w-screen left-0">
        <Container className="flex justify-between max-w-[700px]">
          <div className="">
            <p className="text-sm">Total</p>
            <p className="font-semibold text-orange-600">
              {formatNumberToRupiah(localStorageCart.getCartTotalPrice())}
            </p>
          </div>
          <div className="flex">
            <Button
              onClick={() => router.push("/checkout")}
              disabled={localStorageCart.getCartTotalPrice() == 0}
              className="bg-primary-color hover:bg-primary-color/90"
            >
              Lanjutkan
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};
