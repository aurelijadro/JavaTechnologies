import React from "react";
import { Link } from "react-router-dom";
import { AppDataContext } from "../context";

export default function AdminPanel() {
  const appData = React.useContext(AppDataContext);
  const products = appData.products;

  if (products === "loading") return <div>Loading...</div>;

  const productList = products.map((product, index) => (
    <div className="row" key={product.id}>
      <div className="col-2">{index + 1}</div>
      <div className="col-2">
        <img src={product.imageURL} className="img-fluid" alt="" />
      </div>
      <Link className="col-6" to={`/admin/products/${product.id}`}>
        {product.name}
      </Link>
      <hr></hr>
    </div>
  ));
  return (
    <div className="container">
      <Link className="btn btn-info my-2" to="/admin/products/new">
        Add new product
      </Link>
      <div className="row">
        <div className="col-2">#</div>
        <div className="col-2">Image</div>
        <div className="col-6">Product</div>
      </div>
      <div>{productList}</div>
    </div>
  );
}
