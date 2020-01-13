import React from "react";
import { AppDataContext } from "../../context";
import Axios from "axios";
import { serverProductToClientProduct } from "../../model/products";

class ProductAdministrationComponent extends React.Component {
  static contextType = AppDataContext;

  constructor(props, context) {
    super(props, context);

    const isCreateMode = props.match.path === "/admin/products/new";
    this.state = {
      mode: isCreateMode ? "create" : "edit-loading",
      title: "",
      imageURL: "",
      price: "",
      quantity: "",
      description: ""
    };
  }

  componentDidMount() {
    this.productsMayHaveLoaded();
  }

  componentDidUpdate() {
    this.productsMayHaveLoaded();
  }

  productsMayHaveLoaded() {
    if (this.context.products === "loading") return;
    if (this.state.mode !== "edit-loading") return;
    const product = this.context.products.find(
      product => String(product.id) === this.props.match.params.id
    );
    if (!product) {
      throw new Error("Neradau produkto");
    }
    this.setState({
      mode: "edit",
      id: product.id,
      title: product.name,
      imageURL: product.imageURL,
      price: product.price,
      quantity: product.quantity,
      description: product.description
    });
  }

  handleTitleChange = event => this.setState({ title: event.target.value });
  handleURLChange = event => this.setState({ imageURL: event.target.value });
  handlePriceChange = event => this.setState({ price: event.target.value });
  handleQuantityChange = event =>
    this.setState({ quantity: event.target.value });
  handleDescriptionChange = event =>
    this.setState({ description: event.target.value });

  saveProduct = () => {
    // this.context.setProducts(prev =>
    //   prev.map(product =>
    //     product.id !== this.state.id
    //       ? product
    //       : {
    //           ...product,
    //           name: this.state.title,
    //           price: parseFloat(this.state.price),
    //           description: this.state.description,
    //           quantity: parseInt(this.state.quantity),
    //           imageURL: this.state.imageURL
    //         }
    //   )
    // );

    Axios.put(
      `http://localhost:8080/api/products/${this.props.match.params.id}`,
      {
        title: this.state.title,
        price: parseFloat(this.state.price),
        description: this.state.description,
        quantity: parseInt(this.state.quantity),
        image: this.state.imageURL
      }
    );

    // Axios.get("http://localhost:8080/api/products").then(response => {
    //   if (response.status < 200 || 300 <= response.status)
    //     throw new Error(`response code ${response.status}`);
    //   const products = response.data;
    //   this.context.setProducts(products.map(serverProductToClientProduct));
    // });

    this.props.history.push("/admin");
  };

  createProduct = () => {
    // this.context.setProducts(prev =>
    //   prev.concat([
    //     {
    //       name: this.state.title,
    //       id: Math.floor(1000000 * Math.random()),
    //       price: parseFloat(this.state.price),
    //       description: this.state.description,
    //       quantity: parseInt(this.state.quantity),
    //       imageURL: this.state.imageURL
    //     }
    //   ])
    // );

    Axios.post("http://localhost:8080/api/products", {
      title: this.state.title,
      price: parseFloat(this.state.price),
      description: this.state.description,
      quantity: parseInt(this.state.quantity),
      image: this.state.imageURL
    });

    // Axios.get("http://localhost:8080/api/products").then(response => {
    //   if (response.status < 200 || 300 <= response.status)
    //     throw new Error(`response code ${response.status}`);
    //   const products = response.data;
    //   this.context.setProducts(products.map(serverProductToClientProduct));
    // });

    this.props.history.push("/admin");
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.mode === "edit") {
      this.saveProduct();
    } else if (this.state.mode === "create") {
      this.createProduct();
    } else if (this.state.mode === "edit-loading") {
      throw new Error("Not supposed to be possible to submit in edit-loading");
    } else {
      throw new Error(`Unfamiliar mode ${this.state.mode}`);
    }
  };

  render() {
    if (this.state.mode === "edit-loading") {
      return (
        <div className="container">
          <p>Preparing the edit screen...</p>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>
                  Title:
                  <input
                    type="text"
                    required="required"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Image URL:
                  <input
                    type="url"
                    required="required"
                    className="form-control"
                    value={this.state.imageURL}
                    onChange={this.handleURLChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Price:
                  <input
                    type="text"
                    required="required"
                    className="form-control"
                    value={this.state.price}
                    onChange={this.handlePriceChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Quantity:
                  <input
                    type="number"
                    required="required"
                    className="form-control"
                    value={this.state.quantity}
                    onChange={this.handleQuantityChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label>
                  Description
                  <input
                    type="text"
                    id="description"
                    required="required"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                  />
                </label>
              </div>
              <button type="submit" className="btn btn-info">
                Save
              </button>
              <button
                className="btn btn-light mx-2"
                onClick={() => this.props.history.push("/admin")}
              >
                Discard
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductAdministrationComponent;
