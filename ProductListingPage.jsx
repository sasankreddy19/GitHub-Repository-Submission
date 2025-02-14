// ProductListingPage.jsx
import React from 'react';
import './ProductListingPage.css';

const products = [
  {
    id: 1,
    name: 'Fiddle Leaf Fig',
    price: 45.00,
    thumbnail: 'https://example.com/fiddle-leaf-fig.jpg',
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: 25.00,
    thumbnail: 'https://example.com/snake-plant.jpg',
  },
  {
    id: 3,
    name: 'Monstera Deliciosa',
    price: 55.00,
    thumbnail: 'https://example.com/monstera-deliciosa.jpg',
  },
  {
    id: 4,
    name: 'Pothos',
    price: 15.00,
    thumbnail: 'https://example.com/pothos.jpg',
  },
  {
    id: 5,
    name: 'Peace Lily',
    price: 30.00,
    thumbnail: 'https://example.com/peace-lily.jpg',
  },
  {
    id: 6,
    name: 'Spider Plant',
    price: 20.00,
    thumbnail: 'https://example.com/spider-plant.jpg',
  },
];

const ProductListingPage = () => {
  return (
    <div className="product-listing">
      <h2>House Plants for Sale</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.thumbnail}
              alt={product.name}
              className="product-thumbnail"
            />
            <h3>{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
