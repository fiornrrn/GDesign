import React from 'react';

import './styles/BackGround.scss';
import Star from './Star.js';

class BackGround extends React.Component{
	constructor(props){
		super(props);

		let bufArr = [];
		for(let i=0; i<150; i++){
			bufArr.push({
				size: ((Math.random() * 3) + 1),
				remoteness: Math.floor((Math.random() * 80) + 40),
				leftIndent: Math.floor(Math.random() * (90 - -20)) + -20,
				topIndent: Math.floor(Math.random() * (50 - -7)) + -7,
			})
		}

		this.state = { 
			mouseCoordinates: {
				x: 0,
				y: 0,
			},
			starsValues: bufArr,
		};

		this._onMouseMove = this._onMouseMove.bind(this);
	}

	_onMouseMove(e) {
		this.setState({mouseCoordinates: { x: e.screenX, y: e.screenY }});
	}

	render(){
		let x = this.state.mouseCoordinates.x, y = this.state.mouseCoordinates.y;
		let starsArr = [];

		for(let i = 0; i < this.state.starsValues.length; i++){
			starsArr.push(<Star size={this.state.starsValues[i].size} 
				leftIndent={this.state.starsValues[i].leftIndent + x/this.state.starsValues[i].remoteness} 
				topIndent={this.state.starsValues[i].topIndent + y/this.state.starsValues[i].remoteness}/>);
		}
		return(
			<div className='bg' onMouseMove={this._onMouseMove}>
				{starsArr}
			</div>
		);
	}
}

export default BackGround;