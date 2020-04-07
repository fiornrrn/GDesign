import React from 'react';
import './files/styles/App.scss';

import Sidebar from './files/Sidebar.js';
import WorkingSpace from './files/WorkingSpace.js';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      sidebarValues: {
        cupboardHeight: 230,
        cupboardWidth: 150,
        doorsQuantity: 2,
      },
      DnDValues: {

      }
    }

    this.onSidebarValuesChange = this.onSidebarValuesChange.bind(this);

    //=============== DnD ================
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  onSidebarValuesChange(e, paramName){
    let bufArr = this.state.sidebarValues;
    bufArr[paramName] = e.target.value;
    this.setState({sidebarValues: bufArr});
  }

  //==================== DnD =====================
  onMouseDown(e){
    console.log(e);
    this.setState({isDown: true});
  }
  
  onMouseUp(e){
    console.log(e);
    this.setState({isDown: false});
  }
  onMouseMove(e){
    if(this.state.isDown == true){
      this.setState({X: e.clientX - 90});
    }
  }


  render(){
    return (
      <div>
        <Sidebar sidebarValues={this.state.sidebarValues} onSidebarValuesChange={this.onSidebarValuesChange}
          DnDValues={this.state.DnDValues} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} onMouseMove={this.onMouseMove} />
        <WorkingSpace sidebarValues={this.state.sidebarValues}/>
      </div>
    );
  }
}


export default App;
