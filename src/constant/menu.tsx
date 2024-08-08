import { FiShoppingCart, FiUser } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";

export const NAVBAR_ITEMS = [
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
