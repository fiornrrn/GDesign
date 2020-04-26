import React, {useRef, useEffect, useState} from 'react';
import './files/styles/App.scss';

import Sidebar from './files/Sidebar.js';
import WorkingSpace from './files/WorkingSpace.js';
import Divide from './files/Divide.js';

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

  onCreateBtnClick(e, values){
    this.setState({sidebarValues: values, dndValues: []});
  }
  onDndValuesChange(type, x, y){
    let bufArr = this.state.dndValues;
    bufArr.push(<Divide x={x} y={y} type={type} sidebarValues={this.state.sidebarValues} dndValues={this.state.dndValues}/>);
    this.setState({dndValues: bufArr});
  }

  render(){
    return (
      <div>
        <Sidebar onCreateBtnClick={this.onCreateBtnClick} onDndValuesChange={this.onDndValuesChange}/>
        <WorkingSpace sidebarValues={this.state.sidebarValues} dndValues={this.state.dndValues}/>
      </div>
    );
  }
}

export default App;
