// Navigation.js
import React from 'react';

function Navigation({ onPageChange }) {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li className="nav-item" onClick={() => onPageChange('home')}>
          <a>
          Home
          </a>
        </li>
        <li className="nav-item" onClick={() => onPageChange('about')}>
          <a>About</a>
        </li>
        <li className="nav-item" onClick={() => onPageChange('games')}>
          <a>Games</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
