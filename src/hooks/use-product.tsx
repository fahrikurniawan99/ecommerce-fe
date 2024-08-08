"use client";
import { IProduct } from "@/types/product";
import { useState } from "react";

export interface IProductListPagination {
  data: IProduct[];
  setPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  isLastPage: boolean;
  isFirstPage: boolean;
  pageCount: number;
  isActive: (index: number) => boolean;
}

export const useProductListPagination = (
  products: IProduct[]
): IProductListPagination => {
  const pageCount = Math.ceil(products.length / 10);
  const [currentPage, setCurrentPage] = useState(1);

  const setPage = (page: number) => {
    setCurrentPage(page);
  };

  const data = products.slice((currentPage - 1) * 10, currentPage * 10);

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const isLastPage = currentPage === pageCount;
  const isFirstPage = currentPage === 1;

  const isActive = (index: number) => index + 1 === currentPage;

  return {
    data,
    setPage,
    nextPage,
    previousPage,
    isLastPage,
    isFirstPage,
    pageCount,
    isActive,
  };
};
