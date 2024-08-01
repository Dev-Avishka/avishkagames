import React from 'react';
import './styles.css';
import bm from './images/bm.png'
import ftb from './images/ftb.png'
import GameBox from './components/gamebox';

function Games() {
  return (
    <div>
      <center>
        <h1>My Games</h1>
        <br></br>
        <br></br>
        <br></br>
        <h3 className='game-container'>
          <GameBox alt="Blender Man" link="https://devavishka.itch.io/blender-man" img={bm} / >
          <GameBox alt="Find the Bun" link="https://devavishka.itch.io/find-the-bun" img={ftb} / >
          
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
