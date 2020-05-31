import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import RegisterPage from '@js/pages/RegisterPage';
import LoginPage from '@js/pages/LoginPage';
import AppPage from '@js/pages/AppPage';

ReactDOM.render(
   <Router>
      <div>
        <Route exact path='/register' component={RegisterPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/' component={AppPage} />
      </div>
  </Router>,
   document.getElementById("test")
);
