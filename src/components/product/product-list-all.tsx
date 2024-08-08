"use client";
import { useProductListPagination } from "@/hooks/use-product";
import { IProduct } from "@/types/product";
import { ProductCard } from "./product-card";
import { ProductPagination } from "./product-pagination";

type ProductListAllProps = {
  dataProducts: IProduct[];
};

export const ProductListAll = (props: ProductListAllProps) => {
  const productPagination = useProductListPagination(props.dataProducts);

  return (
    <>
      <div className="grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 grid gap-3 mt-3">
        {productPagination.data.map((product, index) => {
          return <ProductCard key={index} {...product} />;
        })}
      </div>
      <ProductPagination pagination={productPagination} />
    </>
  );
};
