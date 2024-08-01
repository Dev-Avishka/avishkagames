import React from 'react';

function Navigation({ onPageChange }) {
  return (
    <div className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#" onClick={(e) => { e.preventDefault(); onPageChange('home'); }}>Home</a>
        </li>
        <li className="nav-item">
          <a href="#" onClick={(e) => { e.preventDefault(); onPageChange('about'); }}>About</a>
        </li>
        <li className="nav-item">
          <a href="#" onClick={(e) => { e.preventDefault(); onPageChange('games'); }}>Games</a>
        </li>
        <li className="nav-item">
          <a href="#" onClick={(e) => { e.preventDefault(); onPageChange('Devlog'); }}>Devlogs</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
