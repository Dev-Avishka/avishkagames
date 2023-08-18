import React from 'react';
import './styles.css';
import home from './home.png';
import bm from './bm.png'
import ftb from './ftb.png'
import sr from './sr.png'

function Games() {
  return (
    <div>
      <center>
        <h1>My Games</h1>
        <br></br>
        <br></br>
        <br></br>
        <h3>
          <a href='https://devavishka.itch.io/blender-man'><img src={bm} alt="Blender Man" className="image-link" /></a>
          <a href='https://devavishka.itch.io/find-the-bun'><img src={ftb} alt="Find the Bun" className="image-link" /></a>
          <a href='https://devavishka.itch.io/shattered-reflections'><img src={sr} alt="Shattered Reflections" className="image-link" /></a>
        </h3>
      </center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Games;
