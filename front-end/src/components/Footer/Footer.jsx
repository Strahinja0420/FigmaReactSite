import React from "react";
import "./Footer.css";
import { instagramLogo, facebookLogo, twitterLogo } from "../../assets";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              Sound
              <span className="red">DZign</span>
            </a>

            <div className="social-icons">
              <a href="#">
                <img src={facebookLogo} alt="" />
              </a>
              <a href="#">
                <img src={twitterLogo} alt="" />
              </a>
              <a href="#">
                <img src={instagramLogo} alt="" />
              </a>
            </div>

            <div className="copyright">
              This website is designeg by Legenda 2025
            </div>
          </div>

          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="#">Legenda@gmail.com</a>
              </li>
              <li>
                <a href="#">+381 69 1354608</a>
              </li>
            </ul>
          </div>
          <div className="copyright mobile">
            This website is designeg by Legenda 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
