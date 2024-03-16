import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p className="footer-left-gdsc">© 2024 CourseHub</p>
        <div className="footer-right">
          <p className="social-media">
            Наши
            <a href="#"> контакты</a>
          </p>
          <div className="brands">
            <a href="">
              <i className="fa-brands fa-telegram"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
