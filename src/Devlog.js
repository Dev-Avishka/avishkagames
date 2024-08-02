import React from 'react';
import Post from './components/Post';

function Devlog() {
  const imageUrl = 'https://drive.google.com/uc?export=view&id=1XterZpW-PbsaGLPV5egW6Rzi38MikeOX';
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