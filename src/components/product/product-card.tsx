"use client";

import { formatNumberToRupiah } from "@/lib/numbers";
import { IProduct } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../ui/button";

type ProductCardProps = {} & IProduct;

export const ProductCard = (props: ProductCardProps) => {
  const productDetailUrl = `/product/${props.slug}`;

  return (
    <Link href={productDetailUrl} className="w-full border h-fit">
      <div className="w-full aspect-square relative">
        <div className="absolute bottom-0 z-10 text-xs px-1 right-5 bg-orange-500 text-slate-50">
          stock : {props.countInStock}
        </div>
        <Image alt="not-found" src={props.images[0]} fill />
      </div>
      <div className="p-2">
        <span className="text-xs">{props.category}</span>
        <h1 className="line-clamp-2 font-bold">{props.name}</h1>
        <h2 className="text-primary-color font-medium">
          {formatNumberToRupiah(props.price)}
        </h2>
        <div className="flex">
          <Button className="mt-2 ml-auto bg-orange-500 hover:bg-orange-400 xl:w-full xl:gap-2">
            <MdAddShoppingCart className="text-xl" />
            <span className="hidden xl:inline-block">Tambahkan</span>{" "}
          </Button>
        </div>
      </div>
    </Link>
  );
};
