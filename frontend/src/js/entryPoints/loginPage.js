import React from 'react';
import ReactDOM from "react-dom";
import '@stl/RegisterPage.scss';

import TextInput from '@js/components/TextInput.js';

ReactDOM.render(
   <div> 
      <img src={"./assets/img/anime.png"} className="globalx-logo"/>
      <h1>Регистрация</h1>
      <div className="block" >
         <TextInput styleArr={{marginLeft: "20px", marginTop: "20px", text: "Почта", width: 440}}/>
         <TextInput styleArr={{marginLeft: "20px", marginTop: "100px", text: "Пароль", width: 200}}/>
         <TextInput styleArr={{marginLeft: "260px", marginTop: "100px", text: "Повторите пароль", width: 200}}/>
      </div>
   </div>,
   document.getElementById("loginPage")
);


