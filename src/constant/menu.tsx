import { FiShoppingCart, FiUser } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";

type NavbarItemName = "Sign in" | "Cart" | "Order";

type NavbarItem = {
  name: NavbarItemName;
  url: string;
  icon: JSX.Element;
};

export const NAVBAR_ITEMS: NavbarItem[] = [
  {
    name: "Sign in",
    url: "/sign-in",
    icon: <FiUser />,
  },
  {
    name: "Cart",
    url: "/cart",
    icon: <FiShoppingCart />,
  },
  {
    name: "Order",
    url: "/order",
    icon: <GrTransaction />,
  },
];

export const NAVBAR_MENU_ID = "navbar-menu";
