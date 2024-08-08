"use client";
import { NAVBAR_MENU_ID } from "@/constant/menu";
import { useRef } from "react";

export const useNavbarToggle = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const openNavbarMenu = (element: HTMLElement) => {
    buttonRef.current?.setAttribute("data-menu", "open");
    element.classList.add("h-[100px]");
  };

  const closeNavbarMenu = (element: HTMLElement) => {
    buttonRef.current?.setAttribute("data-menu", "close");
    element.classList.remove("h-[100px]");
  };

  const isNavbarMenuOpen = (element: HTMLElement) => {
    return element.classList.contains("h-[100px]");
  };

  const toggleMenu = () => {
    const menuElement = document.getElementById(NAVBAR_MENU_ID)!;

    if (isNavbarMenuOpen(menuElement)) {
      closeNavbarMenu(menuElement);
    } else {
      openNavbarMenu(menuElement);
    }
  };

  return {
    buttonRef,
    toggleMenu,
  };
};
