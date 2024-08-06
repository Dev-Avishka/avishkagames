import React, { useState, useEffect } from 'react';

function Post({ title, body, image, alt }) {
  const [convertedLink, setConvertedLink] = useState('');

  useEffect(() => {
    if (image) {
      const newLink = image.replace('dropbox.com', 'dl.dropboxusercontent.com');
      setConvertedLink(newLink);
    }
  }, [image]);

  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{body}</p>
      {convertedLink && <img src={convertedLink} alt={alt} />}
    </div>
  );
}

export default Post;
