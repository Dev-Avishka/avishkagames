import React from 'react';
import Post from './components/Post';
import home from './images/home.png'
function Devlog(){
    return(
        <div>
    
            <center>
                <h1>Shattered Memories Devlog</h1>
                <br></br>
                <br></br>
                <br></br>
                <Post title="Update 1" body="Added basics"  image={home}></Post>
            </center>
        </div>
    );
}
export default Devlog;