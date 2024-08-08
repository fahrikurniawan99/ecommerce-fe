"use client";
import { useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const ToggleMenu = () => {
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    const menuElement = document.getElementById("app-menu");
    if (menuElement) {
      if (menuElement.classList.contains("h-[100px]")) {
        menuElement.classList.remove("h-[100px]");
        toggleButtonRef.current?.setAttribute("data-menu", "close");
      } else {
        toggleButtonRef.current?.setAttribute("data-menu", "open");
        menuElement.classList.add("h-[100px]");
      }
    }
  };

  return (
    <button
      data-menu="close"
      ref={toggleButtonRef}
      className="group sm:hidden"
      onClick={handleToggle}
    >
      <FiMenu className="text-2xl group-data-[menu=open]:hidden" />
      <FiX className="text-2xl group-data-[menu=close]:hidden" />
    </button>
  );
};
