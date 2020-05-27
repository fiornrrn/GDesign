import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import RegisterPage from '@js/pages/RegisterPage.js';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/register' component={RegisterPage} />
        {/*<Route path='/add-item' component={AddItem} />
        <Route path='/index' component={IndexItem} />*/}
      </div>
  </Router>,
  document.getElementById("root"));