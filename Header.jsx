// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/project-listing" className="nav-link">
              Product Listing
            </Link>
          </li>
          <li>
            <Link to="/shopping-cart" className="nav-link">
              Shopping Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
