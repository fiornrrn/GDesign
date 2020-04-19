import React, {useRef, useEffect, useState} from 'react';
import './files/styles/App.scss';

import Sidebar from './files/Sidebar.js';
import WorkingSpace from './files/WorkingSpace.js';

const App = (props) =>{
  const [sidebarValues, setSidebarValues] = useState({
    doorHeight: 200,
    doorWidth: 100,
  });

  const onCreateBtnClick = (e, values) => {
    console.log('ok')
    setSidebarValues(values);
  }

  return (
    <div>
      <Sidebar onCreateBtnClick={onCreateBtnClick}/>
      <WorkingSpace sidebarValues={sidebarValues}/>
    </div>
  );
}

export default App;
