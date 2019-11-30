import React from 'react';
import ProductCardComponent from '../productCardComponent/productCardComponent';
import SumPricesComponent from '../sumPricesComponent/sumPricesComponent';

class ProductListComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
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
            ]
        }
    }
    render() {
        var products = this.state.products.map(product => {
            return (<div className="col-3 mx-auto my-3" key={product.id}>
                <ProductCardComponent product={product} />
            </div>)
        });
        return (<div className="row card-deck">{products}
            <SumPricesComponent products={this.state.products} />
        </div>);
    }

}

export default ProductListComponent;