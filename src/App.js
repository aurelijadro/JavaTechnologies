import React from 'react';
import ProductListComponent from './components/productListComponent/productListComponent';
import SumPricesComponent from './components/sumPricesComponent/sumPricesComponent';
import Product from './product/product';
import './App.css';



function App() {


  return (
    <div className="container mx-auto">

      <ProductListComponent />
    </div>
  );
}

export default App;
