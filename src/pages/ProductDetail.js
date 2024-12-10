import React, { useState, useEffect } from 'react';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Lấy dữ liệu từ public/db.json
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => {
        // Xử lý dữ liệu
        const product = data.products.find((p) => p.id === 1);  // Ví dụ, tìm sản phẩm với ID = 1
        setProduct(product);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetail;
