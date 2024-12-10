import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Sửa đường dẫn API cho chính xác
    fetch('http://localhost:3000/products')  // Đường dẫn đến json-server API
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Products is not an array");
        }
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Products;
