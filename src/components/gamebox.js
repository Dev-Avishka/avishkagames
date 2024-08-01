import React from 'react';

function GameBox({alt,link,img}){
  return (
    <div>
        <a href={link}><img src={img} alt={alt} className="image-link" /></a>
    </div>
  );
};

export default GameBox;
