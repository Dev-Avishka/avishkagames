// homepg.js
import React from 'react';
import './styles.css';
import Games from './Games';
import ImageWithText from './components/ImageWithText';
import youtube from './images/youtube.png'
import insta from './images/insta.png'
function Homepg() {
  return (
    <div>
      <ImageWithText />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <center>
        <Games></Games>
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
