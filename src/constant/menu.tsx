import { ReactNode } from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";

export const TOP_MENUS = [
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
