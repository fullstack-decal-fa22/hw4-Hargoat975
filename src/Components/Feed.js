import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [post, setPost] = useState([]);
    
    function post_color(color){
      setPost(post => [color, ...post])
    }

    
    
    /* Use the map() function to render multiple Blocks! */
    const posts = post.map(color => (
        <Block color = {color}></Block>
    )) // TODO: edit this variable

    
    return (
        <div>
            <Menu function = {post_color}></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;