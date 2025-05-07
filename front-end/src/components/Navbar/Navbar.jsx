import React, { useState } from "react";
import "./Navbar.css";
import { menuIcon, closeIcon } from "../../assets";

const navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav>
        <a href="#" className="logo">
          Sound <span className="red">DZign</span>
        </a>
        <ul>
          <li>
            <a href="#topics">Course Details</a>
          </li>
          <li>
            <a href="#info">About</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>

        <div className="menu-icon" >
          <img onClick={() => setIsActive(true)} src={menuIcon} alt="" />
        </div>
      </nav>

      <div className={`mobile-menu-container ${isActive ?  "active" : ""} bg-light-black`}>
        <div className="close-icon">
          <img onClick={() => setIsActive(false)}   src={closeIcon} alt="" />
        </div>

        <ul className="menu-items">
          <li>
            <a onClick={() => setIsActive(false)} href="#topics">Course Details</a>
          </li>
          <li>
            <a onClick={() => setIsActive(false)} href="#info">About</a>
          </li>
          <li>
            <a onClick={() => setIsActive(false)} href="#blog">Blog</a>
          </li>
          <li>
            <a onClick={() => setIsActive(false)} href="#testimonials">Testimonials</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default navbar;
