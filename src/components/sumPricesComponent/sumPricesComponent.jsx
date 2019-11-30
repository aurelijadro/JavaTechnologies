import React from 'react';

class SumPricesComponent extends React.Component {
    render() {
        const total = this.props.products.reduce((sum, product) => sum + product.price * product.quantity, 0);
        return (
            <div className="row mx-auto">
                <h1>All the kitties are worth {total} eur!</h1>
            </div>
        )
    }
}

export default SumPricesComponent;