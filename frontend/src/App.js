import React from 'react';
import './files/styles/App.scss';

import Sidebar from './files/Sidebar.js';
import WorkingSpace from './files/WorkingSpace.js';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Sidebar/>
        <WorkingSpace/>
      </div>
    );
  }
}


export default App;
