import React from 'react';



class ProductCardComponent extends React.Component {
  render() {
    return (
      <div className="card mx-2" style={{ width: "15rem" }}>
        <img src={`https://robohash.org/${this.props.product.id}?set=set4`} className="card-img-top" alt="{this.props.product.name}" />
        <div className="card-body">
          <h5 className="card-title">{this.props.product.name}</h5>
          <p className="card-text m-0 p-0">{this.props.product.description}</p>
          <h4 className="card-text m-0 p-0">Price: {this.props.product.price} Eur.</h4>
          <a href="http://www.me.lt" className="btn btn-primary">Get it now!!!</a>
        </div>
      </div>
    );
  }
};

export default ProductCardComponent;
