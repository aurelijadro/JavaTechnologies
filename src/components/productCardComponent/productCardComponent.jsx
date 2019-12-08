import React from "react";
import { Link } from "react-router-dom";

class ProductCardComponent extends React.Component {
  render() {
    return (
      <div className="card mx-2" style={{ width: "13rem" }}>
        <img
          src={this.props.product.imageURL}
          className="card-img-top img-fluid"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.product.name}</h5>
          <p className="card-text m-0 p-0">{this.props.product.description}</p>
          <h4 className="card-text m-0 p-0">
            Price: {this.props.product.price} Eur.
          </h4>
          <Link
            className="btn btn-primary"
            to={`/products/${this.props.product.id}`}
          >
            Details
          </Link>
        </div>
      </div>
    );
  }
}

export default ProductCardComponent;
