import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login";

export const Nav = function(props) {
  return (
    <nav className="my-2">
      <ul className="nav row">
        <li className="nav-item col-2">
          <Link className="nav-link active" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item col-2">
          <Link className="nav-link" to="/admin">
            Admin
          </Link>
        </li>
        <Login />
        <li className="nav-item col-2">
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};
