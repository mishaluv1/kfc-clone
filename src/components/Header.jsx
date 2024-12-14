import React from "react";
import "./Header.css"; // Import the CSS for styling
import logo from '../assets/kfc_PNG7.png'

const Header = () => {
  return (
    <header>
      <div className="container">
        {/* Left side: Logo and Navigation Items */}
        <div className="left">
          <img src={logo} alt="Logo" className="logo" />
          <nav className="nav-left">
            <a href="#">Menu</a>
            <a href="#">Deals</a>
          </nav>
        </div>

        {/* Right side: Navigation Items */}
        <div className="right">
          <nav className="nav-right">
            <a href="#"><i class="fa-solid fa-user"></i>Service</a>
            <a href="#"> ₹0<i class="fa-solid fa-bucket"></i></a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
