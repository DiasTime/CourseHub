import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineGlobeAlt } from 'react-icons/hi';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          <h1>CourseHub</h1>
        </Link>
        <ul>
          <li>
            <Link to="/" className="navlink navlink__active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="navlink">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/" className="navlink">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/" className="navlink">
              Events
            </Link>
          </li>
          <li>
            <Link to="/" className="navlink">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="auth">
          <button className="login">
            <HiOutlineGlobeAlt className="login_icon" />
            Login
          </button>
          <button className="signup">Sign up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
