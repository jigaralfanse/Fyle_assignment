import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src="img/logo.png" alt="Logo" />
          </div>
          <ul className="nav-links">
            <li><a href="/Hero">Home</a></li>
            <li><a href="/DetailPage">Detail</a></li>
            <li><a href="/Project">Project</a></li>
            <li><a href="/Growth">Growth</a></li>
            <li><a href="/Footer">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
