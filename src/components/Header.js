import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { user, logout } = useCart();

  return (
    <header>
      <h1><Link to="/">eightStore</Link></h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        {user && <li><Link to="/add-product">Add Product</Link></li>}
        {!user ? (
          <>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        ) : (
          <li><button onClick={logout}>Logout</button></li>
        )}
      </ul>
    </header>
  );
};

export default Header;
