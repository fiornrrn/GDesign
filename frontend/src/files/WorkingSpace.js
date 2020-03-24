import React from 'react';
import './styles/WorkingSpace.scss';

class WorkingSpace extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>{this.props.cupboardHeight + " " + this.props.cupboardWidth}</div>
		);
	}
}

export default WorkingSpace;