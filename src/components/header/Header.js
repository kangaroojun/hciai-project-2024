import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Ensure this is the correct relative path
import logo from '../../logo.svg'; // Update this path if needed

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/review-entry" activeClassName="active">Review Entry</NavLink></li>
          <li><NavLink to="/flower-encyclopedia" activeClassName="active">Flower Encyclopedia</NavLink></li>
          <li><NavLink to="/journal-entry" activeClassName="active">Journal Entry</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
