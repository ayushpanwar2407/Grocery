import React from 'react';

const Products = () => {
  const products = [
    { name: 'Potatoes 1kg', price: '$2', image: 'assets/Rectangle 29.png' },
    { name: 'Tomatoes 1kg', price: '$1.5', image: 'assets/Rectangle 30.png' },
    { name: 'Tomatoes 1kg', price: '$1.5', image: 'assets/Rectangle 31.png' },
    { name: 'Tomatoes 1kg', price: '$1.5', image: 'assets/Rectangle 32.png' },
    { name: 'Tomatoes 1kg', price: '$1.5', image: 'assets/Rectangle 29.png' },
    { name: 'Tomatoes 1kg', price: '$1.5', image: 'assets/Rectangle 29.png' },
    { name: 'Tomatoes 1kg', price: '$1.5', image: 'assets/Rectangle 29.png' },
    { name: 'Tomatoes 1kg', price: '$1.5', image: 'assets/Rectangle 29.png' },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4">Daily Best Sells</h2>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md-3">
            <div className="card">
              <img src={product.image} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
