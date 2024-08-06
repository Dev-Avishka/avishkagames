import React from 'react';
import Post from './components/Post';

function Devlog() {
  const imageUrl = 'https://1drv.ms/i/c/a1235a42f61ed5f0/Edgw0YFIvBFKsUsooldpHewBq13nUrDps-QRuj1eARDM-w?e=2scMES';
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