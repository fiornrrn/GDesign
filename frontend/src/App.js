import React, {useRef, useEffect, useState} from 'react';

import Sidebar from './files/Sidebar.js';
import WorkingSpace from './files/WorkingSpace.js';
import Divide from './files/Divide.js';
import MaxMinCalculate from './files/JSFunctions.js';

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
    this.onTextureValuesAdd = this.onTextureValuesAdd.bind(this);

    this.state = {
      sidebarValues: {
        doorHeight: 200,
        doorWidth: 100,
      },
      dndValues: [],
      textureValues: [],
    }
  }

  //========== functions ============
  onCreateBtnClick(e, values){ this.setState({sidebarValues: values, dndValues: []}); }
  onDndValuesAdd(type, x, y){ 
    let values = MaxMinCalculate(type, x, y, this.state.dndValues, this.state.sidebarValues, constants);
    this.setState({dndValues: this.state.dndValues.concat([{type: type, x: x , y: y, min: values.min, max: values.max}])}); 
  }
  onTextureValuesAdd(src, x, y){
    let valuesY = MaxMinCalculate('vertical', x, y, this.state.dndValues, this.state.sidebarValues, constants)
    let valuesX = MaxMinCalculate('horizontal', x, y, this.state.dndValues, this.state.sidebarValues, constants)

    this.setState({textureValues: this.state.textureValues.concat([{src: src ,x: valuesX.min, y: valuesY.min, 
      width: valuesX.max - valuesX.min, height: valuesY.max - valuesY.min}])});
  }

  //========== render ===========
  render(){
    let hfValues = {
      hfScrW: ((window.innerWidth) / 2) - ((this.state.sidebarValues.doorWidth * constants.oneSM) / 2) - 240 / 2,
      hfScrH: (window.innerHeight / 2) - ((this.state.sidebarValues.doorHeight * constants.oneSM) / 2) - 20,
    }
    let dndDivides = [];
    for(let i = 0; i < this.state.dndValues.length; i++){
      dndDivides.push(<Divide min={this.state.dndValues[i].min} max={this.state.dndValues[i].max} num={i}
        sidebarValues={this.state.sidebarValues} dndValues={this.state.dndValues} hfValues={hfValues} constants={constants}/>)
    }

    let textureImg = [];
    for(let i = 0; i < this.state.textureValues.length; i++){
      textureImg.push(<div style={{marginLeft: this.state.textureValues[i].x, marginTop: this.state.textureValues[i].y, 
        width: this.state.textureValues[i].width, height: this.state.textureValues[i].height, position: "fixed"}}>
          <img style={{width: "100%", height: "100%", objectFit: "none", objectPosition: "0 0"}} src="/images/textures/beton.jpg"/></div>)
    }
    return (
      <div>
        {/* <div style={{width: 100, height: 100}}><img style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "0 0"}} src="/images/textures/beton.jpg"/></div> */}
        <Sidebar onCreateBtnClick={this.onCreateBtnClick} onDndValuesAdd={this.onDndValuesAdd} onTextureValuesAdd={this.onTextureValuesAdd} constants={constants}/>
        <WorkingSpace sidebarValues={this.state.sidebarValues} dndDivides={dndDivides} textureImg={textureImg} constants={constants} hfValues={hfValues}/>
      </div>
    );
  }
}

export default App;
