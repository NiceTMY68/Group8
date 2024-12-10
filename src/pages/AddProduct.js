import React, { useState, useEffect } from 'react';

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    category: 'Men shoes',
    brand: '',
    name: '',
    quantity: '',
    price: '',
    description: '',
    image: '',
  });

  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (
      !newProduct.category ||
      !newProduct.brand ||
      !newProduct.name ||
      !newProduct.quantity ||
      !newProduct.price ||
      !newProduct.description ||
      !newProduct.image
    ) {
      setError('All fields are required!');
      return false;
    }

    setError('');
    return true;
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const largestId = products.reduce((max, product) => Math.max(max, product.id), 0);
    const newId = largestId + 1;

    const productToAdd = { ...newProduct, id: newId };

    fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productToAdd),
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Product added successfully');
        setNewProduct({
          category: 'Men shoes',
          brand: '',
          name: '',
          quantity: '',
          price: '',
          description: '',
          image: '',
        });
      })
      .catch((error) => {
        console.error('Error adding product:', error);
        alert('Failed to add product');
      });
  };

  return (
    <div>
      <h1>Add New Product</h1>
      <form onSubmit={handleAddProduct}>
        <div>
          <label>Category</label>
          <select
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
          >
            <option value="Men shoes">Men shoes</option>
            <option value="Women shoes">Women shoes</option>
            <option value="Kid shoes">Kid shoes</option>
          </select>
        </div>

        <div>
          <label>Brand</label>
          <input
            type="text"
            name="brand"
            value={newProduct.brand}
            onChange={handleInputChange}
            placeholder="Brand"
            required
          />
        </div>

        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            placeholder="Product Name"
            required
          />
        </div>

        <div>
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={newProduct.quantity}
            onChange={handleInputChange}
            placeholder="Quantity"
            required
          />
        </div>

        <div>
          <label>Price</label>
          <input
            type="text"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            placeholder="Price"
            required
          />
        </div>

        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
            placeholder="Description"
            required
          />
        </div>

        <div>
          <label>Image URL</label>
          <input
            type="text"
            name="image"
            value={newProduct.image}
            onChange={handleInputChange}
            placeholder="Image URL"
            required
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
