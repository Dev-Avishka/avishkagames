import React from 'react';

function Navigation({ onPageChange }) {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <button className="nav-button" onClick={() => onPageChange('home')}>Home</button>
        </li>
        <li className="nav-item">
          <button className="nav-button" onClick={() => onPageChange('about')}>About</button>
        </li>
        <li className="nav-item">
          <button className="nav-button" onClick={() => onPageChange('games')}>Games</button>
        </li>
        <li className="nav-item">
          <button className="nav-button" onClick={() => onPageChange('Devlog')}>Devlogs</button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
