import React from 'react';
import './styles.css';
import home from './home.png';
import youtube from './youtube.png'
import insta from './insta.png'

function ImageWithText() {
  return (
    <div className="image-container">
      <img src={home} alt="Sample" className="background-image" />
      <div className="text-overlay">
        <center>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2 className="overlay-heading">Welcome</h2>
          <br />
          <p className="overlay-paragraph">
            Change in the world of gaming where horror comedy
            <br /> and action are mixed together. This is an indie game
            <br /> developer with 2x years of experience in Java and C#.
            <br/> I am already 16 years old and I like to program in oop 
            <br/>languages. My most favourite language is Java.
            <br></br>
            <h4>I am developing Shattered Reflections right now</h4>
          </p>
        </center>
      </div>
    </div>
  );
}

export default ImageWithText;
