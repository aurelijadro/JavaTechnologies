import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductListComponent from "./components/productListComponent/productListComponent";
import ProductPage from "./components/ProductPageComponent/ProductPage";
import AdminPanel from "./components/AdminPanel";
import ProductAdministrationComponent from "./components/productAdministrationComponent/productAdministrationComponent";
import Cart from "./components/Cart";
import "./App.css";
import { Nav } from "./components/navBarPresentationComponent/navBarPresentationComponent";
import { serverProductToClientProduct } from "./model/products";
import { Switch, Route } from "react-router";
import { AppDataContext } from "./context";

// function ProductPage() {
//   const appData = useContext(AppDataContext);
//   return <div>Show a product: {appData.products.join(", ")}</div>;
// }

function App() {
  const [products, setProducts] = useState("loading");

  const [users, setUsers] = useState([
    {
      username: "john",
      cart: [
        { productId: 1, quantity: 1 },
        { productId: 2, quantity: 1 }
      ]
    }
  ]);
  const setUser = (name, delta) =>
    setUsers(prev => prev.map(u => (u.username === name ? delta(u) : u)));
  const setCurrentUser = delta => setUser(currentUserName, delta);
  const setCurrentUserCart = delta =>
    setCurrentUser(u => ({ ...u, cart: delta(u.cart) }));

  const [currentUserName, setCurrentUserName] = useState("john");

  useEffect(function() {
    axios.get("http://localhost:8080/api/products").then(response => {
      if (response.status < 200 || 300 <= response.status)
        throw new Error(`response code ${response.status}`);
      const products = response.data;
      setProducts(products.map(serverProductToClientProduct));
    });
  }, []);

  const appData = {
    cartItems: currentUserName
      ? users.find(u => u.username === currentUserName).cart
      : [],
    currentUserName: currentUserName,
    addCartItem: productId => {
      setCurrentUserCart(prev =>
        prev.some(item => item.productId === productId)
          ? prev.map(item =>
              item.productId === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : prev.concat([{ productId: productId, quantity: 1 }])
      );
    },
    discardCartItem: productId => {
      setCurrentUser(prev => {
        return {
          ...prev,
          cart: prev.cart.filter(item => item.productId !== productId)
        };
      });
    },
    login: username => {
      setCurrentUserName(username);
      setUsers(function(prev) {
        if (prev.some(u => u.username === username)) return prev;
        return prev.concat([
          {
            username: username,
            cart: []
          }
        ]);
      });
    },
    products: products,
    setProducts: setProducts
  };

  return (
    <AppDataContext.Provider value={appData}>
      <div className="container mx-auto">
        <Nav />
        <Switch>
          <Route path="/" exact component={ProductListComponent} />
          <Route path="/products" exact component={ProductListComponent} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/products/:id" exact component={ProductPage} />
          <Route path="/admin" exact component={AdminPanel} />
          <Route
            path="/admin/products/new"
            exact
            component={ProductAdministrationComponent}
          />
          <Route
            path="/admin/products/:id"
            exact
            component={ProductAdministrationComponent}
          />
        </Switch>
      </div>
    </AppDataContext.Provider>
  );
}

export default App;
