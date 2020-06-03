import React from 'react';
import '@stl/components.scss';

const ButtonInput = (props) => {
  return (
    <div>
      <button className='button_input' onClick={props.onClick} style={{marginLeft: props.styleArr.marginLeft, marginTop: props.styleArr.marginTop, width: props.styleArr.width}}>{props.styleArr.text}</button>
    </div>
  );
}

export default ButtonInput;