import React from 'react';
import './Header.css';
import { FaUserCircle, FaShoppingCart, FaEllipsisV, FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <h2>MyStore</h2>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search for products..." />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
      <div className="header__icons">
        <FaUserCircle className="icon" />
        <FaShoppingCart className="icon" />
        <FaEllipsisV className="icon" />
      </div>
    </header>
  );
}

export default Header;