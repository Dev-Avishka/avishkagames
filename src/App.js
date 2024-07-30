// App.js
import React, { useState } from 'react';
import './App.css';
import About from './About';
import Navigation from './Navigation';
import Homepg from './Homepg'; // Corrected the import
import Games from './Games';
import Devlog from './Devlog';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let content = null;

  if (currentPage === 'home') {
    content = <Homepg />;
  } else if (currentPage === 'about') {
    content = <About />;
  } else if (currentPage === 'games') {
    content = <Games />;
  } else if (currentPage === 'Devlog') {
    content = <Devlog />;
  }

  return (
    <div>
      <Navigation onPageChange={handlePageChange} />
      {content}

      <center>
        <h3>©2024 Dev Avishka </h3>
        <a
          href="https://www.buymeacoffee.com/DevAvishka"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            style={{ height: '60px', width: '217px' }}
          />
        </a>
      </center>
    </div>
  );
}

export default App;
