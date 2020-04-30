import React, {useRef, useEffect, useState} from 'react';
import './files/styles/App.scss';

import Sidebar from './files/Sidebar.js';
import WorkingSpace from './files/WorkingSpace.js';
import Divide from './files/Divide.js';

const par = 4;

const constants = {
  oneSM: 10 / par,
  profilLeftRightWidth: 35 / par, 
  profilTopHeight: 20 / par, 
  profilBottomHeight: 55 / par,
} 

class App extends React.Component {
  constructor(props){
    super(props);
    this.onCreateBtnClick = this.onCreateBtnClick.bind(this);
    this.onDndValuesChange = this.onDndValuesChange.bind(this);

    this.state = {
      sidebarValues: {
        doorHeight: 200,
        doorWidth: 100,
      },
      dndValues: [],
    }
  }

  onCreateBtnClick(e, values){ this.setState({sidebarValues: values, dndValues: []}); }
  onDndValuesChange(type, x, y){ this.setState({dndValues: this.state.dndValues.concat([<Divide type={type} x={x} y={y}/>])}); }

  render(){
    return (
      <div>
        <Sidebar onCreateBtnClick={this.onCreateBtnClick} onDndValuesChange={this.onDndValuesChange}/>
        <WorkingSpace sidebarValues={this.state.sidebarValues} dndValues={this.state.dndValues} constants={constants}/>
      </div>
    );
  }
}

export default App;
