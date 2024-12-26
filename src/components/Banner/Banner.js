import React from 'react';

const Banner = () => {
  return (
    <div className="bg-success text-black text-center py-50">
      <h1 className='head-brocry'>Don't miss our daily amazing deals.</h1>
      <p>Save up to 60% off on your first order</p>
      <form className="d-flex justify-content-center mt-3">
        <input
          type="email"
          className="form-control w-100"
          placeholder="Enter your email address"
        />
        <button className="btn btn-primary ms-2">Subscribe</button>
      </form>
    </div>
  );
};

export default Banner;
