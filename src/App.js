// App.js
import React, { useState } from 'react';
import './App.css';
import About from './About';
import Navigation from './components/Navigation';
import Homepg from './Homepg'; // Corrected the import
import Games from './Games';
import Devlog from './Devlog';
import Coffee from './components/coffee';


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
        <Coffee />
      </center>
    </div>
  );
}

export default App;
