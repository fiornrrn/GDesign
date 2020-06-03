import React from 'react';

const ErrorsList = (props) => {
  let ErrorsArr = [];
  for(let i = 0; i < props.errorsArr.length; i++) {
    ErrorsArr.push(<li className='error_element' key={i}>{props.errorsArr[i]}</li>)
  }
  return (
    <div style = {props.styleArr}>
      <ul>
        {ErrorsArr}
      </ul>
    </div>
  );
}

export default ErrorsList;