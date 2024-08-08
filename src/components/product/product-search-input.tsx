"use client";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";

export const ProductSearchInput = () => {
  const router = useRouter();

  const redirectToSearchPage = (query: string) => {
    if (query !== "") {
      const url = new URL("/search", window.location.origin);
      url.searchParams.set("text", query);
      router.push(url.toString());
    }
  };

  return (
    <Input
      type="search"
      onKeyUp={(event) => {
        if (event.key === "Enter") {
          redirectToSearchPage(event.currentTarget.value);
        }
      }}
      className="text-gray-700 sm:w-fit mt-5 sm:mt-0 bg-white"
      placeholder="Cari produk"
    />
  );
};
