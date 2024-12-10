import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img src={product.image} alt={product.name} className="product-image" />
        <p className="product-price">{product.price}₫</p>
        <h3 className="product-brand-name">
          {product.brand} {product.name}
        </h3>
        <p className="product-category">{product.category}</p>
      </Link>
      <button onClick={() => addToCart(product)} className="add-to-cart">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
