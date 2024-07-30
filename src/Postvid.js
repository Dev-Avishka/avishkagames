import React from 'react';

function Postvid({title,body,video}) {
  return (
    <div className='post'>
      <h1>{title}</h1>
      <p>{body}</p>
      <video src={video} controls></video>
    </div>
  );
}

export default Postvid;

