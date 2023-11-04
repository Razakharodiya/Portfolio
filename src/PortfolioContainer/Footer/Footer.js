import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
    <div className="footerdiv">
      <a href="https://github.com/Razakharodiya">
        <i className="fa fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/mohammad-raza-kharodiya-383b70283/">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href='https://www.instagram.com/raza_kharodiya_203/'>
        <i className='fa fa-instagram'></i>
      </a>
      <a href='https://x.com/razakharodiya?s=11&t=3tCRWMT7cDj3uRDx8Fv0yA'>
        <i className='fa fa-twitter'></i>
      </a>
    </div>
    <div className="copyright py-4 text-center text-white">
    <div className="copy-container">
      <p>Designed and developed by Raza Kharodiya &#169; 2023. All rights reserved </p>
    </div>
  </div>
  </div>
  );
};

export default Footer;
