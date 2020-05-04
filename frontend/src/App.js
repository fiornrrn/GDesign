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
  onDndValuesAdd(type, x, y){ 
    let hfScrW = ((window.innerWidth) / 2) - ((this.state.sidebarValues.doorWidth * constants.oneSM) / 2) - 240 / 2;
    let hfScrH = (window.innerHeight / 2) - ((this.state.sidebarValues.doorHeight * constants.oneSM) / 2) - 20;

    let max = 0, min = 0;

    if(type=='vertical'){
      max = hfScrH + constants.oneSM * this.state.sidebarValues.doorHeight; min = hfScrH;

      for(let i = 0; i < this.state.dndValues.length; i++){
        if(this.state.dndValues[i].type != 'vertical'){
          let iy = parseFloat(this.state.dndValues[i].y, 10), numy = parseFloat(y, 10);
          if(this.state.dndValues[i].max > parseFloat(x, 10) - constants.sidebarWidth && this.state.dndValues[i].min < parseFloat(x, 10) - constants.sidebarWidth){
            if(iy > min && iy < numy){
              min = iy;
            }
            if(iy < max && iy > numy){
              max = iy;
            }
          }
        }	
      }
    }
    else if(type == 'horizontal'){
      max = hfScrW + constants.oneSM * this.state.sidebarValues.doorWidth; min = hfScrW;
  
      for(let i = 0; i < this.state.dndValues.length; i++){
        if(this.state.dndValues[i].type != 'horizontal'){
          let ix = (parseFloat(this.state.dndValues[i].x, 10)-constants.sidebarWidth), numx = (parseFloat(x, 10)-constants.sidebarWidth);
          if(this.state.dndValues[i].max > parseFloat(y, 10) && this.state.dndValues[i].min < parseFloat(y, 10)){
            if(ix > min && ix < numx){
              min = ix;
            }
            if(ix < max && ix > numx){
              max = ix;
            }
          }
        }	 
      }
    }
    console.log("type: " + type + ' x: ' + x + ' y: ' + y + ' min: ' + min + ' max: ' + max);
    this.setState({dndValues: this.state.dndValues.concat([{type: type, x: x , y: y, min: min, max: max}])}); 
  }
  onDndValuesChange(paramName, num, value){let bufArr = this.state.dndValues[num]; bufArr[paramName] = value; this.setState({dndValues: bufArr});}

  render(){
    let hfValues = {
      hfScrW: ((window.innerWidth) / 2) - ((this.state.sidebarValues.doorWidth * constants.oneSM) / 2) - 240 / 2,
      hfScrH: (window.innerHeight / 2) - ((this.state.sidebarValues.doorHeight * constants.oneSM) / 2) - 20,
    }
    let dndDivides = [];

    for(let i = 0; i < this.state.dndValues.length; i++){
      dndDivides.push(<Divide min={this.state.dndValues[i].min} max={this.state.dndValues[i].max} num={i}
        onDndValuesChange={this.onDndValuesChange} sidebarValues={this.state.sidebarValues} dndValues={this.state.dndValues} constants={constants}/>)
    }
    return (
      <div>
        <Sidebar onCreateBtnClick={this.onCreateBtnClick} onDndValuesAdd={this.onDndValuesAdd} constants={constants}/>
        <WorkingSpace sidebarValues={this.state.sidebarValues} dndDivides={dndDivides} constants={constants} hfValues={hfValues}/>
      </div>
    );
  }
}

export default App;
