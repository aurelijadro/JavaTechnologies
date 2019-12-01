import React from 'react';

class ProductAdministrationComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            imageURL: '',
            price: '',
            quantity: '',
            description: ''
        };
    }
    handleTitleChange = (event) => this.setState({ title: event.target.value });
    handleURLChange = (event) => this.setState({ imageURL: event.target.value });
    handlePriceChange = (event) => this.setState({ price: event.target.value });
    handleQuantityChange = (event) => this.setState({ quantity: event.target.value });
    handleDescriptionChange = (event) => this.setState({ description: event.target.value });
    handleSubmit = (event) => {
        console.log(this.state.title, this.state.description, this.state.price, this.state.quantity, this.state.imageURL);
        this.setState({ title: '', imageURL: '', price: '', quantity: '', description: '' });
        event.preventDefault();
    }
    render() {
        return (

            <div className='container row'>
                <div className='col-4'>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input type="text" id='title' required="required" className="form-control" value={this.state.title}
                                onChange={this.handleTitleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageurl">Image URL:</label>
                            <input type="url" required="required" id='imageurl' className="form-control" value={this.state.url}
                                onChange={this.handleURLChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price:</label>
                            <input type="text" id='price' required="required" className="form-control" value={this.state.price}
                                onChange={this.handlePriceChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity:</label>
                            <input type="number" id='quantity' required="required" className="form-control" value={this.state.quantity}
                                onChange={this.handleQuantityChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input type="text" id='description' required="required" className="form-control" value={this.state.description}
                                onChange={this.handleDescriptionChange} />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Save" />
                    </form>
                </div>
            </div>);
    }
}

export default ProductAdministrationComponent;