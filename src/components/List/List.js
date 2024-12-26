import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const List = () => {
  return (
    <div className="bg-image align-block">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-align d-flex flex-column justify-content-center">
            <h1 className="head-brocry text-align mb-4">
              Shop Faster With Groceyish App
            </h1>
            <p className="text-align mb-4">Available on both IOS & Android</p>

            <img src="assets/Download.png" className="hover-img img-width" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <img src="assets/App.png" className="img-fluid hover-img w-70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
