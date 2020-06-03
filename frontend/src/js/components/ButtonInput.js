import React from 'react';
import '@stl/components.scss';

const ButtonInput = (props) => {
  return (
    <div>
      <button className='button_input' onClick={props.onClick} style={props.styleArr}>{props.text}</button>
    </div>
  );
}

export default ButtonInput;