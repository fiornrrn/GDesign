import React from 'react';
import '@stl/components.scss';

const ImgButtonInput = (props) => {
  return (
    <div>
      <button className='img_button_input' onClick={props.onClick} style={{ marginLeft: props.styleArr.marginLeft, marginTop: props.styleArr.marginTop, width: props.styleArr.width, height: props.styleArr.height, position: 'fixed'}}>
        <img src={props.styleArr.imgSrc} style={{ width: props.styleArr.width, height: props.styleArr.height, }}></img>
      </button>
    </div>
  );
}

export default ImgButtonInput;