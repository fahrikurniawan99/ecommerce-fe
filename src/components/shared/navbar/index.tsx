import { ProductSearchInput } from "@/components/product/product-search-input";
import { BRAND_NAME } from "@/constant/brand";
import { cn } from "@/lib/utils";
import { Container } from "../container";
import { NavbarMenu } from "./navbar-menu";
import { ToggleMenu } from "./navbar-toggle";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className={cn(`bg-primary-color`, "w-full text-slate-100 sticky top-0 z-[999]")}>
      <Container className="sm:flex justify-between items-center py-5">
        <div className="flex justify-between items-center">
          <Link href={"/"} className="font-bold text-lg">
            {BRAND_NAME}
          </Link>
          <ToggleMenu />
        </div>
        <ProductSearchInput />
        <NavbarMenu />
      </Container>
    </nav>
  );
};
