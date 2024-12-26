import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <img src="assets/logo.png" alt="Logo" />
        <nav>
          <div className="navbar navbar-expand-lg navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={isOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
              <ul className={`navbar-nav ${isOpen ? 'full-page-menu' : ''}`}>
                <li className="nav-item">
                  <NavLink exact to="/" className="nav-link text-black" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/hot-deals" className="nav-link text-black" activeClassName="active">
                    Hot deals
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/new-products" className="nav-link text-black" activeClassName="active">
                    New products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/categories" className="nav-link text-black" activeClassName="active">
                    Categories
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link text-black" activeClassName="active">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='display-flex'>
        <button className="btn btn-white">
          <img src="assets/Group 1.png" alt="Add to Cart" /> Wishlist
        </button>
        <button className="btn btn-white">
          <img src="assets/Group 2.png" alt="Add to Cart" /> Add to Cart
        </button>

        <button className="btn btn-primary">
          <img src="assets/li_layout-grid.png" alt="Add to Cart" /> All Categories
        </button>
        
        </div>
        
      </div>
    </header>
  );
};

export default Header;
