// homepg.js
import React from 'react';
import './styles.css';
import ImageWithText from './ImageWithText';
import bm from './bm.png'
function Homepg() {
  return (
    <div>
      <ImageWithText />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h3>
        <a href='https://devavishka.itch.io/shattered-reflections'><img src={bm}></img></a>
      </h3>
    </div>
  );
}

export default Homepg;
