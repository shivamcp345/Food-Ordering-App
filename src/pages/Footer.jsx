import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© 2026 FoodiesHub. All rights reserved.</p>
      </div>

      <div className="footer-center">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>

      <div className="footer-right">
        <FaLinkedin size={25} />
        <FaGithub size={25} />
      </div>
    </footer>
  );
};

export default Footer;