import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1><Link to="/">EightStore</Link></h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
      </ul>
    </header>
  );
};

export default Header;
