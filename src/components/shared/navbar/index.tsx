import { ProductSearchInput } from "@/components/product/product-search-input";
import { BRAND_NAME } from "@/constant/brand";
import { NAVBAR_ITEMS, NAVBAR_MENU_ID } from "@/constant/menu";
import { cn } from "@/lib/utils";
import { Container } from "../container";
import { ToggleMenu } from "./navbar-toggle";

export const Navbar = () => {
  return (
    <nav className={cn(`bg-primary-color`, "w-full text-slate-100")}>
      <Container className="sm:flex justify-between items-center py-5">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-lg">{BRAND_NAME}</h1>
          <ToggleMenu />
        </div>
        <ProductSearchInput />
        <NavbarMenu />
      </Container>
    </nav>
  );
};

export const NavbarMenu = () => {
  return (
    <ul
      id={NAVBAR_MENU_ID}
      className="sm:flex items-center gap-5 space-y-3 sm:space-y-0 mt-3 sm:mt-0 h-0 sm:h-fit transition-all duration-500 overflow-hidden"
    >
      {NAVBAR_ITEMS.map((menu, index) => {
        return (
          <li key={index} className="flex items-center gap-2">
            {menu.icon} {menu.name}
          </li>
        );
      })}
    </ul>
  );
};
