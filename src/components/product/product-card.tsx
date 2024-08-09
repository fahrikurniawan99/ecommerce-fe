"use client";

import { formatNumberToRupiah } from "@/lib/numbers";
import { IProduct } from "@/types/product";
import Image from "next/image";
import { AddToCart } from "../cart/add-to-cart";

type ProductCardProps = {} & IProduct;

export const ProductCard = (props: ProductCardProps) => {
  // const productDetailUrl = `/product/${props.slug}`;

  return (
    <div className="w-full border h-fit">
      <div className="w-full aspect-square relative">
        <div className="absolute bottom-0 z-10 text-xs px-1 right-5 bg-primary-color text-slate-50">
          stock : {props.countInStock}
        </div>
        <Image alt="not-found" src={props.images[0]} fill />
      </div>
      <div className="p-2">
        <span className="text-xs">{props.category}</span>
        <h1 className="line-clamp-2 font-bold">{props.name}</h1>
        <h2 className="text-orange-600 font-medium">
          {formatNumberToRupiah(props.price)}
        </h2>
        <AddToCart />
      </div>
    </div>
  );
};
