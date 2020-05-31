import React from 'react';

import '@stl/RegisterPage.scss';
import TextInput from '@js/components/TextInput.js';

const LoginPage = (props) => {
  return(
    <div> 
      <img src={"./assets/img/anime.png"} className="globalx-logo"/>
      <h1>Регистрация</h1>
      <div className="block" >
         <TextInput styleArr={{marginLeft: "20px", marginTop: "20px", text: "Почта", width: 440}}/>
         <TextInput styleArr={{marginLeft: "20px", marginTop: "100px", text: "Пароль", width: 200}}/>
         <TextInput styleArr={{marginLeft: "260px", marginTop: "100px", text: "Повторите пароль", width: 200}}/>
      </div>
   </div>
  );
}

export default LoginPage;