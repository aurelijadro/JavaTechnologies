import React, { useContext, useState } from "react";
import ProductListComponent from "./components/productListComponent/productListComponent";
import SelfDestructTimerComponent from "./components/SelfDestructTimerComponent/SelfDestructTimerComponent";
import ProductPage from "./components/ProductPageComponent/ProductPage";
//import ProductAdministrationComponent from './components/productAdministrationComponent/productAdministrationComponent';
import "./App.css";
import { Nav } from "./components/navBarPresentationComponent/navBarPresentationComponent";
import { Route } from "react-router";
import { AppDataContext } from "./context";

// function ProductPage() {
//   const appData = useContext(AppDataContext);
//   return <div>Show a product: {appData.products.join(", ")}</div>;
// }

function App() {
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

  const appData = {
    products: products,
    setProducts: setProducts
  };

  return (
    <AppDataContext.Provider value={appData}>
      <div className="container mx-auto">
        <Nav />
        <Route path="/" exact component={ProductListComponent} />
        <Route path="/nav" exact component={SelfDestructTimerComponent} />
        <Route path="/cart" exact children={<p>Cart</p>} />
        <Route path="/products/:id" exact component={ProductPage} />
      </div>

      {/* išfltruoti vieną produkto objektą pagal id iš visų produktų sąrašo */}
    </AppDataContext.Provider>
  );
}

export default App;
