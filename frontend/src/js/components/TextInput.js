import React from 'react';
import '@stl/components.scss';

const TextInput = (props) => {
  return(
     //for="tinp" in label
     <div>
        <label className="text_input" style={{marginLeft: props.styleArr.marginLeft, marginTop: props.styleArr.marginTop}}>
           <input type={props.type} ref={props.inputRef} placeholder="&nbsp;" style={{width: props.styleArr.width}}/>
           <span className="label">{props.text}</span>
        </label>
     </div>
  );
}

export default TextInput;