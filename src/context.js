import React from "react";

export const AppDataContext = React.createContext({
  cartItems: [],
  currentUserName: "",
  login: () => {},
  products: [],
  setProducts: () => {},
  discardCartItem: () => {},
  addCartItem: () => {}
});

export function useMyData() {
  return React.useContext(AppDataContext);
}
