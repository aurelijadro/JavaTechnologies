import React from "react";

export const AppDataContext = React.createContext({
  cartItems: [],
  currentUserName: "",
  login: () => {},
  products: [],
  setProducts: () => {},
  discardCartItem: () => {}
});

export function useMyData() {
  return React.useContext(AppDataContext);
}
