import React from 'react';

const Categories = () => {
  const categories = [
    { name: 'Peach', image: 'assets/image 3.png', bgColor: '#FFDDC1' },
    { name: 'Vegetables', image: 'assets/image 4.png', bgColor: '#D4E157' },
    { name: 'Strawberry', image: 'assets/image 5.png', bgColor: '#FFCDD2' },
    { name: 'Apple', image: 'assets/image 6.png', bgColor: '#F48FB1' },
    { name: 'Orange', image: 'assets/image 7.png', bgColor: '#FFE082' },
    { name: 'Lichi', image: 'assets/image 8.png', bgColor: '#C5CAE9' },
    { name: 'Mango', image: 'assets/image 9.png', bgColor: '#FFEB3B' },
    { name: 'Banana', image: 'assets/image 10.png', bgColor: '#FFF59D' },
    { name: 'Peach', image: 'assets/image 3.png', bgColor: '#FFDDC1' },
    { name: 'Vegetables', image: 'assets/image 4.png', bgColor: '#D4E157' },
    { name: 'Strawberry', image: 'assets/image 5.png', bgColor: '#FFCDD2' },
    { name: 'Apple', image: 'assets/image 6.png', bgColor: '#F48FB1' },
    { name: 'Orange', image: 'assets/image 7.png', bgColor: '#FFE082' },
    { name: 'Lichi', image: 'assets/image 8.png', bgColor: '#C5CAE9' },
    { name: 'Mango', image: 'assets/image 9.png', bgColor: '#FFEB3B' },
    { name: 'Banana', image: 'assets/image 10.png', bgColor: '#FFF59D' },
  ];

  const chunkedCategories = [];
  for (let i = 0; i < categories.length; i += 6) {
    chunkedCategories.push(categories.slice(i, i + 6));
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Explore Categories</h2>
      <div id="categoriesCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunkedCategories.map((categoryGroup, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className="row justify-content-center">
                {categoryGroup.map((category, idx) => (
                  <div
                    key={idx}
                    className="col-2"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      className="card m-2"
                      style={{
                        width: '10rem',
                        backgroundColor: category.bgColor,
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <img
                        src={category.image}
                        className="card-img-top"
                        alt={category.name}
                        style={{
                          height: '100px',
                          objectFit: 'contain',
                          padding: '10px',
                        }}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{category.name}</h5>
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
          data-bs-target="#categoriesCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#categoriesCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Categories;
