"use client";
import { NAVBAR_ITEMS, NAVBAR_MENU_ID } from "@/constant/menu";
import { useCartLocalStorage } from "@/hooks/use-cart";
import Link from "next/link";

export const NavbarMenu = () => {
  const localStorageCart = useCartLocalStorage();

  return (
    <ul
      id={NAVBAR_MENU_ID}
      className="sm:flex items-center gap-5 space-y-3 sm:space-y-0 mt-3 sm:mt-0 h-0 sm:h-fit transition-all duration-500 overflow-hidden sm:overflow-visible"
    >
      {NAVBAR_ITEMS.map((menu, index) => {
        return (
          <li key={index}>
            <Link
              href={menu.url}
              className="flex items-center gap-2 relative overflow-visible w-fit"
            >
              {menu.icon} {menu.name}
              {menu.name === "Cart" && !localStorageCart.isCartEmpty() && (
                <div className="absolute bg-orange-500 w-6 rounded-full flex aspect-square text-xs right-[-15px] top-[-10px]">
                  <p className="m-auto">
                    {localStorageCart.getTotalItems() <= 99
                      ? localStorageCart.getTotalItems()
                      : "99+"}
                  </p>
                </div>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
