import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
     
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
           
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
              <img src="assets/logo.png" alt="Logo" />
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fw-bold mb-4">Account</h6>
              <p><NavLink to="#!" className="text-reset">Wishlist</NavLink></p>
              <p><NavLink to="#!" className="text-reset">Cart</NavLink></p>
              <p><NavLink to="#!" className="text-reset">Track Order</NavLink></p>
              <p><NavLink to="#!" className="text-reset">Shipping Details</NavLink></p>
            </div>
            
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="fw-bold mb-4">Useful links</h6>
              <p><NavLink to="#!" className="text-reset">About Us</NavLink></p>
              <p><NavLink to="#!" className="text-reset">Hot deals</NavLink></p>
              <p><NavLink to="#!" className="text-reset">Promotions</NavLink></p>
              <p><NavLink to="#!" className="text-reset">New products</NavLink></p>
            </div>
            
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="fw-bold mb-4">Contact Us</h6>
              <p><i className="fas fa-home me-3"></i> Address: 1762 School House Road</p>
              <p><i className="fas fa-envelope me-3"></i>Email: groceyish@contact.com</p>
              <p><i className="fas fa-phone me-3"></i> Call Us: 1233-777</p>
             
            </div>
          </div>
        </div>
     
     
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2025 Copyright:
        <NavLink to="https://mdbootstrap.com/" className="text-reset fw-bold">Groceyish Grocery</NavLink>
      </div>
    </footer>
  );
};

export default Footer;
