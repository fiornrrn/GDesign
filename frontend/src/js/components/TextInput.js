import React from 'react';
import '@stl/RegisterPage.scss';

const TextInput = (props) => {
  return(
     <div>
        <label for="tinp" class="text_input" style={{marginLeft: props.styleArr.marginLeft, marginTop: props.styleArr.marginTop}}>
           <input type="text" id="tinp" placeholder="&nbsp;" style={{width: props.styleArr.width}}/>
           <span class="label">{props.styleArr.text}</span>
        </label>
     </div>
  );
}

export default TextInput;