import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="bg-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
       <img src='assets/logo.png'></img>
        <nav>
          <ul className="nav">
            <li className="nav-item"><a href="/" className="nav-link text-black">Home</a></li>
            <li className="nav-item"><a href="/" className="nav-link text-black">Hot deals</a></li>
            <li className="nav-item"><a href="/" className="nav-link text-black">New products</a></li>
            <li className="nav-item"><a href="/categories" className="nav-link text-black">Categories</a></li>
            <li className="nav-item"><a href="/contact" className="nav-link text-black">Contact</a></li>
          </ul>
        </nav>
        <button className="btn btn-white"><img src='assets/Group 2.png'></img>Add to Cart</button>
      </div>
    </header>
  );
};

export default Header;
