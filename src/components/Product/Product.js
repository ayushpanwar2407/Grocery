import React from 'react';


const Products = () => {
  const products = [
    { name: 'Potatoes 1kg', subtitle: 'Fresh and Organic', price: '$2', rating: 4, image: 'assets/Rectangle 29.png' },
    { name: 'Tomatoes 1kg', subtitle: 'Juicy and Red', price: '$1.5', rating: 5, image: 'assets/Rectangle 30.png' },
    { name: 'Tomatoes 1kg', subtitle: 'Farm Fresh', price: '$1.5', rating: 4.5, image: 'assets/Rectangle 31.png' },
    { name: 'Tomatoes 1kg', subtitle: 'Organic and Sweet', price: '$1.5', rating: 4, image: 'assets/Rectangle 32.png' },
    { name: 'Tomatoes 1kg', subtitle: 'Red and Ripe', price: '$1.5', rating: 4.5, image: 'assets/Rectangle 29.png' },
    { name: 'Tomatoes 1kg', subtitle: 'Perfect for Salad', price: '$1.5', rating: 4, image: 'assets/Rectangle 29.png' },
    { name: 'Tomatoes 1kg', subtitle: 'High Quality', price: '$1.5', rating: 4, image: 'assets/Rectangle 29.png' },
    { name: 'Tomatoes 1kg', subtitle: 'Locally Grown', price: '$1.5', rating: 5, image: 'assets/Rectangle 29.png' },
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
                <h6 className="card-subtitle mb-2 text-muted">{product.subtitle}</h6>
                <h4 className="card-text">{product.price}</h4>
                <p className="card-text">
                 
                  <span className="rating">
                    {'★'.repeat(Math.floor(product.rating))} 
                    {product.rating % 1 !== 0 && '½'}
                  </span>
                </p>
                <button className="btn btn-primary"> Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
