import React from 'react';
import '../styles.css';
import home from '../images/home.png';

function ImageWithText() {
  return (
    <div className="image-container">
      <img src={home} alt="Sample" className="background-image" />
      <div className="text-overlay">
        <h2 className="overlay-heading">Welcome</h2>
        <p className="overlay-paragraph">
          Change in the world of gaming where horror comedy
          and action are mixed together. This is an indie game
          developer with 2x years of experience in Java and C#.
          I am already 16 years old and I like to program in OOP 
          languages. My most favourite language is Java.
          <h4>I am developing Shattered Memories. </h4>
        </p>
      </div>
    </div>
  );
}

export default ImageWithText;
