// App.js
import React, { useState } from 'react';
import './App.css';
import About from './About';
import Navigation from './Navigation';
import ImageWithText from './ImageWithText';
import Homepg from './Homepg'; // Corrected the import
import Games from './Games';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let content = null;

  if (currentPage === 'home') {
    content = <Homepg />; // Corrected the component name
  } else if (currentPage === 'about') {
    content = <About />;
  } else if (currentPage === 'games') {
    content = <Games />;
  }

  return (
    <div>
      <Navigation onPageChange={handlePageChange} />
      {content}
      <br />
      <br />
      <br />
      <br />
      <center>
        <h3>©2023 Dev Avishka</h3>
      </center>
    </div>
  );
}

export default App;
