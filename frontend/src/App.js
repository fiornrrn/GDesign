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
        {/* <img src="/images/scroll.svg" width="700" height="700" style={{position: "fixed"}}/>*/}
      </div>
    );
  }
}


export default App;
