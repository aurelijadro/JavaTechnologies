import React from 'react';
import ProductListComponent from './components/productListComponent/productListComponent';
import SumPricesComponent from './components/sumPricesComponent/sumPricesComponent';
import Product from './product/product';
import './App.css';

const productList = [
  {
    name: "Kitty",
    id: 10111,
    price: 99.99,
    description: "Fluufy kitty! mau mau mau mau mau",
    quantity: 1
  },
  {
    name: "Mau",
    id: 2402,
    price: 150.55,
    description: "Fluufy kitty! mau mau mau mau mau",
    quantity: 15
  },
  {
    name: "Shadow",
    id: 66666666,
    price: 450,
    description: "Fluufy kitty! mau mau mau mau mau",
    quantity: 5
  },
  {
    name: "Whiskers",
    id: 933512,
    price: 113,
    description: "Fluufy kitty! mau mau mau mau mau",
    quantity: 3
  },
  {
    name: "Panda",
    id: 61166,
    price: 220,
    description: "Fluufy kitty! mau mau mau mau mau",
    quantity: 3
  },
  {
    name: "Dragon",
    id: 103003,
    price: 345,
    description: "Fluufy kitty! mau mau mau mau mau",
    quantity: 2
  }
];
const newProducts = productList.map((item) => {
  return new Product(item.name, item.id, item.price, item.description, item.quantity);
});

const set = new Set(newProducts);
const map = new Map(newProducts.map(item => [item.id, item]));
const comeBackAround = Array.from(map.values()).reduce((text, item) => text + item.name + "(" + item.price + " Eur.), ", "");

function App() {

  const filteredProducts = productList.filter(product => product.price <= 300);
  return (
    <div className="container mx-auto">

      <ProductListComponent products={filteredProducts} />
      <SumPricesComponent products={filteredProducts} />
      {console.log(newProducts)}
      {console.log(set)}
      {console.log(map)}
      {console.log(comeBackAround)}

    </div>
  );
}

export default App;
