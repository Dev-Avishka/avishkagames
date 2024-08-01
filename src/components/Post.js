import React from 'react';

function Post({title,body,image}){
  return (
    <div className="post">
      <h2>{title} </h2>
      <p>{body}</p>
      <img src={image} alt="Post"></img>
    </div>
  );
};

export default Post;
