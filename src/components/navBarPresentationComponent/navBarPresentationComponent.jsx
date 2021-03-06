import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login";
import { useMyData } from "../../context";
import Hello from "../Hello";

const sum = list => list.reduce((a, b) => a + b, 0);

export const Nav = function(props) {
  const { cartItems } = useMyData();
  const productsInCartCount = sum(cartItems.map(i => i.quantity));
  return (
    <nav className="my-2">
      <ul className="nav row ">
        <li className="nav-item col-2">
          <Hello></Hello>
        </li>
        <li className="nav-item col-2">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item col-2">
          <Link className="nav-link" to="/admin">
            Admin
          </Link>
        </li>
        <li className="col-4">
          <Login />
        </li>
        <li className="nav-item col-2">
          <Link className="nav-link" to="/cart">
            {productsInCartCount} in cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};
