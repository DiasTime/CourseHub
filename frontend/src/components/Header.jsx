import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="left-side-menu">
          <div className="logo">
            <Link to="/">
              <img src="https://iimg.su/s/11/AltVHu4JfYDeHkhn0KM1Ltzt8qQZlTNFQKEiBcvl.png" />
              <h1 className="logo-title">CourseHub</h1>
            </Link>
          </div>
          <div className="menu">
            <ul className="menu-list">
              <li className="menu-item">
                <span>
                  <a href="#lol" className="scrollto">
                    Про нас
                  </a>
                </span>
              </li>
              <li className="menu-item">
                <span>
                  <a href="aboutUs.html">Контакты</a>
                </span>
              </li>
              <li className="menu-item">
                <span>
                  <a href="http://127.0.0.1:5002/#" className="scrollto">
                    Курсы
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="members">
          <ul className="members-list">
            <li>
              <a href="http://127.0.0.1:5000">Войти</a>
            </li>
            <li>
              <a href="#">Регистрация</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
