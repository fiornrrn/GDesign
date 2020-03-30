import React from 'react';
import './styles/WorkingSpace.scss';

const par = 4;

const cupboardLeftRightElementWidth = 15 / par;
const cupboardLeftRightElementHeight = 10 / par;

const cupboardTopElementWidth = 10 / par;
const cupboardTopElementHeight = 50 / par;

const cupboardBottomElementWidth = 10 / par;
const cupboardBottomElementHeight = 60 / par;


class WorkingSpace extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		let topImgArr = [];
		let bottomImgArr = [];
		for(let i = 0; i < this.props.sidebarValues.cupboardWidth; i++){
			//top
			topImgArr.push(<img src="/images/foundation/light_top.png" width={cupboardTopElementWidth.toString()} height={cupboardTopElementHeight.toString()} 
				style={{position: "fixed", marginTop: "0px", marginLeft: cupboardTopElementWidth * i + "px"}}/>);

			//bottom
			bottomImgArr.push(<img src="/images/foundation/light_bottom.png" width={cupboardBottomElementWidth.toString()} height={cupboardBottomElementHeight.toString()} 
				style={{position: "fixed", marginTop: this.props.sidebarValues.cupboardHeight * cupboardLeftRightElementHeight - cupboardBottomElementHeight, marginLeft: cupboardBottomElementWidth * i + "px"}}/>);
		}

		let leftImgArr = [];
		let rightImgArr = [];
		for(let i = 0; i < this.props.sidebarValues.cupboardHeight; i++){
			//left
			leftImgArr.push(<img src="/images/foundation/light_left.png" width={cupboardLeftRightElementWidth.toString()} height={cupboardLeftRightElementHeight.toString()} 
				style={{position: "fixed", marginTop: cupboardLeftRightElementHeight * i + "px", marginLeft: "0px"}}/>);

			//right
			rightImgArr.push(<img src="/images/foundation/light_right.png" width={cupboardLeftRightElementWidth.toString()} height={cupboardLeftRightElementHeight.toString()} 
				style={{position: "fixed", marginTop: cupboardLeftRightElementHeight * i + "px",
				marginLeft: cupboardTopElementWidth * this.props.sidebarValues.cupboardWidth}}/>);
		}

		return(
			<div className="main-space">{/*{this.props.sidebarValues.cupboardHeight + " " + this.props.sidebarValues.cupboardWidth}*/}
				{topImgArr}
				{bottomImgArr}
				{rightImgArr}
				{leftImgArr}
			</div>
		);
	}
}

export default WorkingSpace;