import React from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => { 

    let post_color = props.function
    return (
      <div className="colorOptions">
          <Color handleclick = {post_color("red")} color="red" />
          <Color handleclick = {post_color("pink")} color="pink" />
          <Color handleclick = {post_color("green")} color="green" />
          <Color handleclick = {post_color("blue")} color="blue" />
      </div>
    );
}

export default Menu;