import React from 'react';

function Post({ title, body, image , alt}) {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{body}</p>
      <img src={image} alt ={alt} />
    </div>
  );
}

export default Post;
