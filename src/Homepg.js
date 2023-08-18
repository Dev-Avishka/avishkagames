// homepg.js
import React from 'react';
import './styles.css';
import ImageWithText from './ImageWithText';
import bm from './bm.png'
import ftb from './ftb.png'
import sr from './sr.png'
import youtube from './youtube.png'
import insta from './insta.png'
function Homepg() {
  return (
    <div>
      <ImageWithText />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <center>
        <h2>Check My Popular Games</h2>
        <h3>
          <a href='https://devavishka.itch.io/blender-man'><img src={bm} alt="Blender Man" className="image-link" /></a>
          <a href='https://devavishka.itch.io/find-the-bun'><img src={ftb} alt="Find the Bun" className="image-link" /></a>
          <a href='https://devavishka.itch.io/shattered-reflections'><img src={sr} alt="Shattered Reflections" className="image-link" /></a>
        </h3>

      </center>
      <br></br>
      <br></br>
      <br></br>
      <center>
        <p>
          <a href='https://www.instagram.com/dev_avishka/'><img src={insta} className='logo'></img></a>  
                                        
          <a href='https://www.youtube.com/channel/UClv661CK2A9sxw0AlzeN3yw'><img src={youtube} className='logo'></img></a>
        </p>
      </center>
    </div>
  );
}

export default Homepg;
