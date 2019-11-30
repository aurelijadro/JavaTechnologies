import React from 'react';
import ProductCardComponent from '../productCardComponent/productCardComponent';

class ProductListComponent extends React.Component {
    render() {
        var products = this.props.products.map(product => {
            return (<div className="col-3 mx-auto my-3" key={product.id}>
                <ProductCardComponent product={product} />
            </div>)
        });
        return (<div className="row card-deck">{products}</div>);
    }

}

export default ProductListComponent;