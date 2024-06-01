import React, { useState } from "react";
import logo from "./../image/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header2 = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="tw-bg-gray-900 tw-py-4 tw-px-6 tw-flex tw-items-center tw-justify-between tw-flex-col md:tw-flex-row">
      <div>
        <img src={logo} alt="Car Rental Logo" className="tw-w-32" />
      </div>
      <nav className="tw-flex tw-items-center tw-mt-4 md:tw-mt-0">
        <ul
          className={`tw-flex tw-space-x-6 tw-text-white ${
            isMenuOpen ? "tw-hidden" : ""
          }`}
        >
          <li
            className="tw-cursor-pointer tw-transition-colors tw-duration-200 hover:tw-text-gray-300"
            onClick={() => handleNavigation("/")}
          >
            Home
          </li>
          <li
            className="tw-cursor-pointer tw-transition-colors tw-duration-200 hover:tw-text-gray-300"
            onClick={() => handleNavigation("/cars")}
          >
            Cars
          </li>
          <li
            className="tw-cursor-pointer tw-transition-colors tw-duration-200 hover:tw-text-gray-300"
            onClick={() => handleNavigation("/services")}
          >
            Services
          </li>
          {/* <li
            className="tw-cursor-pointer tw-transition-colors tw-duration-200 hover:tw-text-gray-300"
            onClick={() => handleNavigation("/locations")}
          >
            Locations
          </li> */}
          
          <li
            className="tw-cursor-pointer tw-transition-colors tw-duration-200 hover:tw-text-gray-300"
            onClick={() => handleNavigation("/about")}
          >
            About Us
          </li>
          <li
            className="tw-cursor-pointer tw-transition-colors tw-duration-200 hover:tw-text-gray-300"
            onClick={() => handleNavigation("/contact")}
          >
            Contact
          </li>
        </ul>
        <div className="tw-ml-6">
          <Link
            to="/login"
            className="tw-text-white tw-font-medium tw-transition-colors tw-duration-200"
          >
            Log In
          </Link>
          <Link
            to="/register"
            className="tw-ml-4 tw-py-2 tw-px-4 tw-bg-indigo-600 tw-text-white tw-font-medium tw-rounded-full tw-transition-colors tw-duration-200 hover:tw-bg-indigo-700"
          >
            Register
          </Link>
        </div>
        
      
      </nav>
    </header>
  );
};

export default Header2;
