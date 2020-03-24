import React from 'react';
import './styles/Sidebar.scss';

class Sidebar extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className='sidebar'>
				<input type="number" className="number input"/> <i className="text">Длина</i>
				<input type="number" className="number input"/> <i className="text">Ширина</i>
			</div>
		);
	}
}

export default Sidebar;