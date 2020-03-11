import React from 'react';

import './files/styles/App.scss';
import BackGround from './files/BackGround.js';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <BackGround/>
      </div>
    );
  }
}


export default App;
