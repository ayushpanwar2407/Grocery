import React from "react";

const ProductCarousel = ()=>{
    const products = [
        {
          id: 1,
          image: "assets/Rectangle 24.png",
          name: "Radish 500g",
          category: "Vegetables",
          price: "$2",
          originalPrice: "$5.99",
        },
        {
          id: 2,
          image: "assets/Rectangle 25.png",
          name: "Potatoes 1kg",
          category: "Vegetables",
          price: "$1",
          originalPrice: "$1.99",
        },
        {
          id: 3,
          image: "assets/Rectangle 26.png",
          name: "Tomatoes 200g",
          category: "Fruits",
          price: "$0.30",
          originalPrice: "$0.99",
        },
        {
          id: 4,
          image: "assets/Rectangle 27.png",
          name: "Broccoli 1kg",
          category: "Vegetables",
          price: "$1.50",
          originalPrice: "$9.99",
        },
        {
          id: 5,
          image: "assets/Rectangle 28.png",
          name: "Green Beans 250g",
          category: "Vegetables",
          price: "$1",
          originalPrice: "$1.99",
        },
        {
            id: 6,
            image: "assets/Rectangle 24.png",
            name: "Green Beans 250g",
            category: "Vegetables",
            price: "$1",
            originalPrice: "$1.99",
          },
          {
            id: 7,
            image: "assets/Rectangle 25.png",
            name: "Green Beans 250g",
            category: "Vegetables",
            price: "$1",
            originalPrice: "$1.99",
          },
          {
            id: 8,
            image: "assets/Rectangle 26.png",
            name: "Green Beans 250g",
            category: "Vegetables",
            price: "$1",
            originalPrice: "$1.99",
          },
      ];
    
      const chunkArray = (arr, size) => {
        return arr.reduce((acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []);
      };
    
      const productChunks = chunkArray(products, 4); 
    
      return (
        <div className="container mt-4 py-5">
          <h2>Featured Products</h2>
          <div id="productcarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {productChunks.map((chunk, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="row">
                    {chunk.map((product) => (
                      <div className="col-md-3 pd-20" key={product.id}>
                        <div className="card">
                          <img
                            src={product.image}
                            className="card-img-top"
                            alt={product.name}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text text-muted">{product.category}</p>
                            <h5 className="mb-2 text-green">
                              <strong>{product.price}</strong>{" "}
                              <span className="text-decoration-line-through text-muted">
                                {product.originalPrice}
                              </span>
                            </h5>
                            <button className="btn btn-success"> Add</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#productcarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#productcarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      );
}

export default ProductCarousel;