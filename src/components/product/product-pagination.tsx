"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Button } from "../ui/button";
import { IProductListPagination } from "@/hooks/use-product";

type ProductPaginationProps = {
  pagination: IProductListPagination;
};

export const ProductPagination = (props: ProductPaginationProps) => {
  return (
    <div className="flex justify-center gap-2 my-10">
      <Button
        disabled={props.pagination.isFirstPage}
        onClick={props.pagination.previousPage}
        variant={"ghost"}
      >
        <FiChevronLeft />
      </Button>
      {Array.from({ length: props.pagination.pageCount }).map((_, index) => {
        return (
          <Button
            variant={props.pagination.isActive(index) ? "default" : "ghost"}
            key={index}
            onClick={() => props.pagination.setPage(index + 1)}
          >
            {index + 1}
          </Button>
        );
      })}
      <Button
        disabled={props.pagination.isLastPage}
        onClick={props.pagination.nextPage}
        variant={"ghost"}
      >
        <FiChevronRight />
      </Button>
    </div>
  );
};
