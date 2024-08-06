import React from 'react';
import Post from './components/Post';

function Devlog() {
  const imageUrl = 'https://www.dropbox.com/scl/fi/fs5ofqgd9ppxe46q75e4a/Screenshot-2024-08-01-113634.png?rlkey=nepuzxw486m7ldptlw1574q8e&st=srhr0a7h&dl=0';
  return (
    <div>
      <center>
        <h1>Shattered Memories Devlog</h1>
        <br></br>
        <br></br>
        <br></br>
        
        <Post title="Update 1" body="Added basics" image={imageUrl} alt={"image"}/>
      </center>
    </div>
  );
}

export default Devlog;