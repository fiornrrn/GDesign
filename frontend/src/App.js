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
      dndValues: {
        verticalX: 0,
        verticalY: 0,
        horizontalX: 0,
        horizontalY: 0,
      }
    }

    this.onSidebarValuesChange = this.onSidebarValuesChange.bind(this);
  }

  onSidebarValuesChange(e, paramName){
    let bufArr = this.state.sidebarValues;
    bufArr[paramName] = e.target.value;
    this.setState({sidebarValues: bufArr});
  }

  // dndValuesChange(paramName, value){
  //   let bufArr = this.state.dndValues;
  //   bufArr[paramName] = value;
  //   console.log(paramName + " = " + value);
  //   this.setState({dndValues: bufArr});
  // }

  render(){
    return (
      <div>
        <Sidebar sidebarValues={this.state.sidebarValues} onSidebarValuesChange={this.onSidebarValuesChange}
          onDndValuesChange={this.onDndValuesChange}/>
        <WorkingSpace sidebarValues={this.state.sidebarValues}/>
      </div>
    );
  }
}


export default App;
