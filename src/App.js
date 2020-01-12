import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductListComponent from "./components/productListComponent/productListComponent";
import SelfDestructTimerComponent from "./components/SelfDestructTimerComponent/SelfDestructTimerComponent";
import ProductPage from "./components/ProductPageComponent/ProductPage";
import AdminPanel from "./components/AdminPanel";
import ProductAdministrationComponent from "./components/productAdministrationComponent/productAdministrationComponent";
import Cart from "./components/Cart";
import "./App.css";
import { Nav } from "./components/navBarPresentationComponent/navBarPresentationComponent";
import { Switch, Route } from "react-router";
import { AppDataContext } from "./context";

// function ProductPage() {
//   const appData = useContext(AppDataContext);
//   return <div>Show a product: {appData.products.join(", ")}</div>;
// }

function App() {
  const [fetchingProducts, setFetchingProducts] = useState(false);

  const [products, setProducts] = useState([
    {
      name: "Kitty",
      id: 10111,
      price: 99.99,
      description: "Fluufy kitty! mau mau mau mau mau",
      quantity: 1,
      imageURL: "https://robohash.org/10111?set=set4"
    },
    {
      name: "Mau",
      id: 2402,
      price: 150.55,
      description: "Fluufy kitty! mau mau mau mau mau",
      quantity: 15,
      imageURL: "https://robohash.org/2402?set=set4"
    },
    {
      name: "Shadow",
      id: 66666666,
      price: 450,
      description: "Fluufy kitty! mau mau mau mau mau",
      quantity: 5,
      imageURL: "https://robohash.org/66666666?set=set4"
    },
    {
      name: "Whiskers",
      id: 933512,
      price: 113,
      description: "Fluufy kitty! mau mau mau mau mau",
      quantity: 3,
      imageURL: "https://robohash.org/933512?set=set4"
    },
    {
      name: "Panda",
      id: 61166,
      price: 220,
      description: "Fluufy kitty! mau mau mau mau mau",
      quantity: 3,
      imageURL: "https://robohash.org/61166?set=set4"
    },
    {
      name: "Dragon",
      id: 103003,
      price: 345,
      description: "Fluufy kitty! mau mau mau mau mau",
      quantity: 2,
      imageURL: "https://robohash.org/103003?set=set4"
    }
  ]);

  const [users, setUsers] = useState([
    {
      username: "john",
      cart: [
        { productId: 10111, quantity: 1 },
        { productId: 66666666, quantity: 6 }
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
    setFetchingProducts(true);
    axios
      .get("https://itpro2017.herokuapp.com/api/products")
      .then(response => {
        // setProducts
        setFetchingProducts(false);
        console.log("n", response);
      })
      .catch(error => {
        console.log(error);
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
          <Route path="/nav" exact component={SelfDestructTimerComponent} />
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
