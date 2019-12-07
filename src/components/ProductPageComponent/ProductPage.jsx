import React from "react";
import { AppDataContext } from "../../context";
import { Link, Redirect } from "react-router-dom";

export default function ProductPage(props) {
  const appData = React.useContext(AppDataContext);
  const product = appData.products.find(
    product => String(product.id) === props.match.params.id
  );
  if (!product) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container row">
      <div className="col-4">
        <img
          src={product.imageURL}
          className="img-fluid"
          alt={product.title}
        ></img>
      </div>
      <div className="col-8">
        <h1>{product.title}</h1>
        <h4>{product.description}</h4>
        <h4>Price: {product.price}</h4>
        <Link className="btn btn-primary" to="/">
          Back
        </Link>
        <button className="btn btn-promary">Add to Cart</button>
      </div>
    </div>
  );
}
