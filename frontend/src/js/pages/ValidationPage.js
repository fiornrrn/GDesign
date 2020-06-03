import React, { useRef, useState, useEffect } from 'react';
import '@stl/ValidationPage.scss';  

import TextInput from '@js/components/TextInput.js';
import ButtonInput from '@js/components/ButtonInput.js';
import Timer from '@js/components/Timer.js';
import ErrorsList from '@js/components/ErrorsList.js';

const ValidationPage = (props) => {
  const codeInputRef = useRef(null);
  const [counter, setCounter] = useState(60);
  const [errorArrState, setErrorArrState] = useState([]);

  const onResendEmailButtonClick = (e) => {
    setCounter(60);
  }
  const onExitButtonClick = (e) => {
    let bufErrorArr = [];
    if(codeInputRef.current.value === "") bufErrorArr.push("Поле ввода кода не заполненно");
    else if(codeInputRef.current.value === "") bufErrorArr.push("Код не совпадает");
    setErrorArrState(bufErrorArr);
    if(bufErrorArr.length === 0) { window.location.href = "http://localhost:8080/login" } //page link
  }

  let buttonOrTimer;
  if(counter == 0) {
    buttonOrTimer = <ButtonInput onClick={onResendEmailButtonClick} text={"Отправить повторно"} styleArr={{marginLeft: "30px", marginTop: "220px", width: 270}}/>
  } 
  else {
    buttonOrTimer = <div>
      <p style={{marginLeft: '30px', marginTop: '220px'}}>  Письмо можно будет повторно</p>
      <Timer styleArr={{marginLeft: '30px', marginTop: '242px', position: 'fixed'}} text={`отправить через ${counter} секкунд`} timerState={counter} timerSetState={setCounter}></Timer>
    </div>
  }

  return (
    <div className='validation-block'>
      <p style={{marginLeft: '30px', marginTop: '30px'}}>  В течение минуты на введенный вами почтовый </p>
      <p style={{marginLeft: '30px', marginTop: '50px'}}>  адресс прийдет сообщение с кодом вертификации </p>
      <p style={{marginLeft: '30px', marginTop: '75px'}}>  Введите этот код в панель ниже </p>
      <TextInput type="text" inputRef={codeInputRef} text={"Код"} styleArr={{marginLeft: "30px", marginTop: "130px", width: 250}}/>
      {buttonOrTimer}
      <ButtonInput onClick={onExitButtonClick} text={"На страницу входа"} styleArr={{marginLeft: "310px", marginTop: "290px", width: 180}}/>
      <ErrorsList errorsArr={errorArrState} styleArr={{marginTop: "280px", marginLeft: "-10px", position: 'fixed'}}></ErrorsList>
      <img src={"./assets/img/G.svg"} className="G"/>
    </div>
  );
}

export default ValidationPage;