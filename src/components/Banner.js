import React from 'react';

const Banner = () => {
  return (
    <div className="bg-success text-white text-center py-50">
      <h2>Don't miss our daily amazing deals.</h2>
      <p>Save up to 60% off on your first order</p>
      <form className="d-flex justify-content-center mt-3">
        <input
          type="email"
          className="form-control w-50"
          placeholder="Enter your email address"
        />
        <button className="btn btn-primary ms-2">Subscribe</button>
      </form>
    </div>
  );
};

export default Banner;
