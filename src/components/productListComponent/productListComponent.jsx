import React from "react";
import ProductCardComponent from "../productCardComponent/productCardComponent";
//import SumPricesComponent from "../sumPricesComponent/sumPricesComponent";
import { AppDataContext } from "../../context";

// export function Name(props) {
//   return <h1>{props.name}</h1>;
// }

// export const Surname = props => <h1>{props.name}</h1>;

export default function ProductListComponent() {
  const appData = React.useContext(AppDataContext);
  const products = appData.products;
  return (
    <div className="row">
      {products === "loading" ? (
        "Products are loading, please wait..."
      ) : (
        <div>
          <p>We sell amazing products, even {products.length} of them!</p>
          <div className="card-deck">
            {products.map(product => {
              return (
                <div className="col-3 mx-auto my-3" key={product.id}>
                  <ProductCardComponent product={product} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
