import React from "react";
import { Link } from "react-router-dom";
import { AppDataContext } from "../../context";

class ProductAdministrationComponent extends React.Component {
  static contextType = AppDataContext;

  constructor(props, context) {
    super(props, context);

    if (props.match.path === "/admin/products/new") {
      this.state = {
        mode: "create",
        title: "",
        imageURL: "",
        price: "",
        quantity: "",
        description: ""
      };
    } else {
      const product = this.context.products.find(
        product => String(product.id) === this.props.match.params.id
      );
      if (!product) {
        throw new Error("Neradau produkto");
      }
      this.state = {
        mode: "edit",
        title: product.name,
        imageURL: product.imageURL,
        price: product.price,
        quantity: product.quantity,
        description: product.description
      };
    }
  }

  handleTitleChange = event => this.setState({ title: event.target.value });
  handleURLChange = event => this.setState({ imageURL: event.target.value });
  handlePriceChange = event => this.setState({ price: event.target.value });
  handleQuantityChange = event =>
    this.setState({ quantity: event.target.value });
  handleDescriptionChange = event =>
    this.setState({ description: event.target.value });

  handleUpdate = event => {
    this.context.setProducts(prev =>
      prev.map(product =>
        product.id !== parseInt(this.props.match.params.id)
          ? product
          : {
              name: this.state.title,
              id: this.props.match.params.id,
              price: parseFloat(this.state.price),
              description: this.state.description,
              quantity: parseInt(this.state.quantity),
              imageURL: this.state.imageURL
            }
      )
    );
    //event.preventDefault();
  };
  handleSubmit = event => {
    console.log(
      this.state.title,
      this.state.description,
      this.state.price,
      this.state.quantity,
      this.state.imageURL
    );

    this.context.setProducts(prev =>
      prev.concat([
        {
          name: this.state.title,
          id: Math.floor(1000000 * Math.random()),
          price: parseFloat(this.state.price),
          description: this.state.description,
          quantity: parseInt(this.state.quantity),
          imageURL: this.state.imageURL
        }
      ])
    );

    // sukurti nauja produkta app state'e

    this.setState({
      title: "",
      imageURL: "",
      price: "",
      quantity: "",
      description: ""
    });
    // event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  required="required"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="imageurl">Image URL:</label>
                <input
                  type="url"
                  required="required"
                  id="imageurl"
                  className="form-control"
                  value={this.state.imageURL}
                  onChange={this.handleURLChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input
                  type="text"
                  id="price"
                  required="required"
                  className="form-control"
                  value={this.state.price}
                  onChange={this.handlePriceChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  required="required"
                  className="form-control"
                  value={this.state.quantity}
                  onChange={this.handleQuantityChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  required="required"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                />
              </div>
              {this.state.mode === "create" ? (
                <Link
                  type="submit"
                  className="btn btn-info"
                  value="Save"
                  onClick={this.handleSubmit}
                  to="/admin"
                >
                  Save
                </Link>
              ) : (
                <Link
                  type="submit"
                  className="btn btn-info"
                  value="Save"
                  onClick={this.handleUpdate}
                  to="/admin"
                >
                  Save
                </Link>
              )}
              <Link className="btn btn-light mx-2" to="/admin">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductAdministrationComponent;
