// homepg.js
import React from 'react';
import './styles.css';
import ImageWithText from './ImageWithText';
import bm from './bm.png'
import ftb from './ftb.png'
import sr from './sr.png'
function Homepg() {
  return (
    <div>
      <ImageWithText />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h3>
        <a href='https://devavishka.itch.io/blender-man'><img src={bm}></img></a>
        <a href='https://devavishka.itch.io/find-the-bun'><img src={ftb}></img></a>
        <a href='https://devavishka.itch.io/shattered-reflections'><img src={sr}></img></a>
      </h3>
    </div>
  );
}

export default Homepg;
