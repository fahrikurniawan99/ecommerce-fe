"use client";
import { ICartItem } from "@/types/cart";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface ICartContext {
  getData: () => ICartItem[];
  isCartEmpty: () => boolean;
  setCartItems: (cartItems: ICartItem[]) => void;
  getTotalItems: () => number;
  getCartTotalPrice: () => number;
  addCartItem: (cartItem: ICartItem) => void;
  removeCartItem: (cartItem: ICartItem) => void;
  clearCart: () => void;
  isItemExist: (id: string) => boolean;
  addQty: (id: string) => void;
  reduceQty: (id: string) => void;
}
const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [carts, setCarts] = useState<ICartItem[]>([]);

  const getCartItems = () => {
    const cart = window.localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };
  const addQty = (id: string) => {
    const cartItems = carts;
    const newCartItems = cartItems.map((item: ICartItem) => {
      if (item.product.id === id) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  const reduceQty = (id: string) => {
    const cartItems = carts;
    const newCartItems = cartItems.map((item: ICartItem) => {
      if (item.product.id === id) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  const isCartEmpty = () => carts.length === 0;

  const getTotalItems = () => carts.length;

  const getData = () => carts;

  const setCartItems = (cartItems: ICartItem[]) => {
    setCarts(cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const getCartTotalPrice = () => {
    return carts.reduce((acc: number, item: ICartItem) => {
      return acc + item.qty * item.product.price;
    }, 0);
  };

  const addCartItem = (cartItem: ICartItem) => {
    const cartItems = carts;
    const isExist = cartItems.some(
      (item: ICartItem) => item.product.id === cartItem.product.id
    );

    if (!isExist) {
      setCartItems([...cartItems, cartItem]);
    }
  };

  const removeCartItem = (cartItem: ICartItem) => {
    const cartItems = carts;
    const newCartItems = cartItems.filter(
      (item: ICartItem) => item.product.id !== cartItem.product.id
    );
    setCartItems(newCartItems);
  };

  const clearCart = () => {
    setCarts([]);
    localStorage.removeItem("cart");
  };

  const isItemExist = useCallback(
    (id: string) => {
      return carts.some((item: ICartItem) => item.product.id === id);
    },
    [carts]
  );

  useEffect(() => {
    const cartData = getCartItems();
    setCarts(cartData);
  }, []);

  const method = {
    getData,
    isCartEmpty,
    setCartItems,
    getTotalItems,
    getCartTotalPrice,
    addCartItem,
    removeCartItem,
    clearCart,
    isItemExist,
    addQty,
    reduceQty
  };

  return <CartContext.Provider value={method}>{children}</CartContext.Provider>;
};

export const useCartLocalStorage = () => useContext(CartContext);
