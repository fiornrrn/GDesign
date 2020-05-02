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

  sidebarWidth: 210,
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.onCreateBtnClick = this.onCreateBtnClick.bind(this);
    this.onDndValuesAdd = this.onDndValuesAdd.bind(this);
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
  onDndValuesAdd(type, x, y){ this.setState({dndValues: this.state.dndValues.concat([{type: type, x: x , y: y,}])}); }
  onDndValuesChange(paramName, num, value){let bufArr = this.state.dndValues[num]; bufArr[paramName] = value; this.setState({dndValues: bufArr});}

  render(){
    let dndDivides = [];
    for(let i = 0; i < this.state.dndValues.length; i++){
      dndDivides.push(<Divide type={this.state.dndValues[i].type} x={this.state.dndValues[i].x} y={this.state.dndValues[i].y} num={i} onDndValuesChange={this.onDndValuesChange} sidebarValues={this.state.sidebarValues} dndValues={this.state.dndValues} constants={constants}/>)
    }
    return (
      <div>
        <Sidebar onCreateBtnClick={this.onCreateBtnClick} onDndValuesAdd={this.onDndValuesAdd} constants={constants}/>
        <WorkingSpace sidebarValues={this.state.sidebarValues} dndDivides={dndDivides} constants={constants}/>
      </div>
    );
  }
}

export default App;
