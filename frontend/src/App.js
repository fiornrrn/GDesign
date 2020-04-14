import React, {useRef} from 'react';
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
      dndValues: [
        // {
        //   type: "vertical",
        //   x: 1,
        //   y: 49,
        // }
      ]
    }

    this.onSidebarValuesChange = this.onSidebarValuesChange.bind(this);
    this.onDndValuesChange = this.onDndValuesChange.bind(this)
  }

  onSidebarValuesChange(e, paramName){
    let bufArr = this.state.sidebarValues;
    bufArr[paramName] = e.target.value;
    this.setState({sidebarValues: bufArr});
  }

  onDndValuesChange(type, x, y){
    let bufArr = this.state.dndValues;
    bufArr.push(
      {
        type: type,
        x: x,
        y: y,
      }
    );
    this.setState({dndValues: bufArr})
  }

  render(){
    // for(let i = 0; i < this.state.dndValues.length; i++){
    //   console.log(this.state.dndValues[i].type + " " + this.state.dndValues[i].x + " " + this.state.dndValues[i].y);
    // }
    return (
      <div>
        <Sidebar sidebarValues={this.state.sidebarValues} onSidebarValuesChange={this.onSidebarValuesChange}
          onDndValuesChange={this.onDndValuesChange}/>
        <WorkingSpace sidebarValues={this.state.sidebarValues} dndValues={this.state.dndValues}/>
      </div>
    );
  }
}


export default App;
