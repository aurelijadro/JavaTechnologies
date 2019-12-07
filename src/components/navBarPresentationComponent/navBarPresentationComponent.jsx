import React from "react";
import { Link } from "react-router-dom";

// const Nav = function(){}

export const Nav = function(props) {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            Admin
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};
