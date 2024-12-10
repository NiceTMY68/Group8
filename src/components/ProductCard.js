import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.img} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
      </Link>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
