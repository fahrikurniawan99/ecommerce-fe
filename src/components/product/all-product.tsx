"use client";
import { formatNumberToRupiah } from "@/lib/numbers";
import { Iproduct } from "@/types/product";
import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Button } from "../ui/button";
import Link from "next/link";

type AllProductProps = {
  products: Iproduct[];
};

export const AllProduct = ({ products }: AllProductProps) => {
  const pageCount = Math.ceil(products.length / 10);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="grid-cols-2 sm:grid-cols-5 grid gap-3 mt-2 min-h-[calc(100vh-100px)]">
        {paginatedProducts.map((product, index) => {
          return (
            <Link
              href={`/product/${product.slug}`}
              key={index}
              className="w-full border h-fit"
            >
              <div className="w-full aspect-square relative">
                <div className="absolute bottom-0 z-10 text-xs px-1 right-5 bg-orange-500 text-slate-50">
                  stock : {product.countInStock}
                </div>
                <Image alt="not-found" src={product.images[0]} fill />
              </div>
              <div className="p-2">
                <span className="text-xs">{product.category}</span>
                <h1 className="line-clamp-2 font-bold">{product.name}</h1>
                <h2 className="text-primary-color font-medium" >
                  {formatNumberToRupiah(product.price)}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex justify-center gap-2 my-10">
        <Button
          disabled={currentPage == 1}
          onClick={handlePreviousPage}
          variant={"ghost"}
        >
          <FiChevronLeft />
        </Button>
        {Array.from({ length: pageCount }).map((_, index) => {
          const isActive = index + 1 == currentPage;
          return (
            <Button
              variant={isActive ? "default" : "ghost"}
              key={index}
              onClick={() => handlePagination(index + 1)}
            >
              {index + 1}
            </Button>
          );
        })}
        <Button
          disabled={currentPage == pageCount}
          onClick={handleNextPage}
          variant={"ghost"}
        >
          <FiChevronRight />
        </Button>
      </div>
    </>
  );
};
