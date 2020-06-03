import React, { useEffect, useState, useRef } from 'react';

import '@stl/RegisterPage.scss';
import TextInput from '@js/components/TextInput.js';
import ButtonInput from '@js/components/ButtonInput.js';
import ImgButtonInput from '@js/components/ImgButtonInput.js';
import ErrorsList from '@js/components/ErrorsList.js';
import MyCaptcha from '@js/components/MyCaptcha.js';

const RegisterPage = (props) => {
  const [eyeImgState, setEyeImgState] = useState(true);
  const [errorArrState, setErrorArrState] = useState([]);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordRepeatRef = useRef(null);

  const onEyeButtonClick = (e) => { setEyeImgState(!eyeImgState); }
  const onContinueButtonClick = (e) => {
    let bufErrorArr = [];
    if(emailRef.current.value === "") { bufErrorArr.push("Не заполненно поле почты"); }
    if(passwordRef.current.value === "" || passwordRepeatRef.current.value === "") { bufErrorArr.push("Не заполненно поле пароля"); }
    else if(passwordRef.current.value !== passwordRepeatRef.current.value) { bufErrorArr.push("Пароли не соответсвуют") }
    if(bufErrorArr.length === 0) { window.location.href = "http://localhost:8080/validation" } //page link
    setErrorArrState(bufErrorArr);
  }

  return(
    <div> 
      <img src={"./assets/img/globalx_logo.svg"} className="globalx-logo"/>
      <h1>Регистрация</h1>
      <div className="register-block" >
         <TextInput type="text" inputRef={emailRef}  text={"Почта"} styleArr={{marginLeft: "30px", marginTop: "30px", width: 440}}/>
         <TextInput type={ eyeImgState?'password':'text' } inputRef={passwordRef} text={"Пароль"} styleArr={{marginLeft: "30px", marginTop: "110px", width: 170}}/>
         <TextInput type={ eyeImgState?'password':'text' } inputRef={passwordRepeatRef} text={"Повторите пароль"} styleArr={{marginLeft: "240px", marginTop: "110px", width: 170}}/>
         <ImgButtonInput onClick={onEyeButtonClick} styleArr={{marginLeft: "435px", marginTop: '110px', width: '60px', height: "60px", imgSrc: eyeImgState?'./assets/img/close_eye.svg':"./assets/img/open_eye.svg"}}/>
         <img src={"./assets/img/GX.svg"} className="GX"/>

         <ButtonInput onClick={onContinueButtonClick} text={"Продолжить"} styleArr={{marginLeft: "30px", marginTop: "340px", width: 300}}/>
         <ErrorsList errorsArr={errorArrState} styleArr={{marginTop: "180px", position: 'fixed'}}></ErrorsList>
      </div>
   </div>
  );
}

export default RegisterPage;