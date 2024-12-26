import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageRow = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-6">
          <img src="assets/Group 24.png" alt="Image 1" className="img-fluid hover-img" />
        </div>
        <div className="col-6">
          <img src="assets/Group 25.png" alt="Image 2" className="img-fluid hover-img" />
        </div>
      </div>
    </div>
  );
}

export default ImageRow;
