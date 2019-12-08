import React from "react";

export const AppDataContext = React.createContext({
  products: [],
  setProducts: () => {},
  users: [],
  setUsers: () => {}
});
