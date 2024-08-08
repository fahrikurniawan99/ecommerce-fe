import { COLORS } from "@/constant/color";
import { cn } from "@/lib/utils";
import { Container } from "../container";
import { BRAND_NAME } from "@/constant/brand";
import { Input } from "@/components/ui/input";
import { TOP_MENUS } from "@/constant/menu";
import { ToggleMenu } from "./toggle-menu";

export const AppBar = () => {
  return (
    <nav className={cn(`bg-primary-color`, "w-full text-slate-100")}>
      <Container className="sm:flex justify-between items-center py-5">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-lg">{BRAND_NAME}</h1>
          <ToggleMenu />
        </div>
        <Input
          className="sm:w-fit mt-5 sm:mt-0 bg-white"
          placeholder="Cari produk"
        />
        <AppBarMenu />
      </Container>
    </nav>
  );
};

export const AppBarMenu = () => {
  return (
    <ul
      id="app-menu"
      className="sm:flex items-center gap-5 space-y-3 sm:space-y-0 mt-3 sm:mt-0 h-0 sm:h-fit transition-all duration-500 overflow-hidden"
    >
      {TOP_MENUS.map((menu, index) => {
        return (
          <li key={index} className="flex items-center gap-2">
            {menu.icon} {menu.name}
          </li>
        );
      })}
    </ul>
  );
};
