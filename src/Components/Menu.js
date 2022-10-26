import React from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => { 

    let post_color = props.function
    return (
      <div className="colorOptions">
          <Color handleclick = {post_color} color="red" />
          <Color handleclick = {post_color} color="pink" />
          <Color handleclick = {post_color} color="green" />
          <Color handleclick = {post_color} color="blue" />
      </div>
    );
}

export default Menu;