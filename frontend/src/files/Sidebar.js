import React, {useRef, useEffect, useState} from 'react';
import './styles/Sidebar.scss';

const Sidebar = (props) => {

	const [sidebarValues, setSidebarValues] = useState({
		doorHeight: 200,
		doorWidth: 100,
	});

	const onSidebarValuesChange = (e, paramName) => {
		let bufArr = sidebarValues;
    	bufArr[paramName] = parseInt(e.target.value);
   		setSidebarValues({doorHeight: bufArr.doorHeight,doorWidth: bufArr.doorWidth});
	}

	return(
		<div className='sidebar'>
			<input type="number" className="input" placeholder="Height" value={sidebarValues.doorHeight} onChange={(e) => onSidebarValuesChange(e, 'doorHeight')} style={{marginTop: "20px"}}/>
			<input type="number" className="input" placeholder="Width" value={sidebarValues.doorWidth} onChange={(e) => onSidebarValuesChange(e, 'doorWidth')}/>
			<button className="create-btn" onClick={(e) => props.onCreateBtnClick(e,sidebarValues)}>Создать шкаф</button>
		</div>
	);
}
export default Sidebar;	