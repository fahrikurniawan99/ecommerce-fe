"use client";
import { useNavbarToggle } from "@/hooks/use-navbar";
import { FiMenu, FiX } from "react-icons/fi";

export const ToggleMenu = () => {
  const navbarToggle = useNavbarToggle();

  return (
    <button
      data-menu="close"
      ref={navbarToggle.buttonRef}
      className="group sm:hidden"
      onClick={navbarToggle.toggleMenu}
    >
      <FiMenu className="text-2xl group-data-[menu=open]:hidden" />
      <FiX className="text-2xl group-data-[menu=close]:hidden" />
    </button>
  );
};
