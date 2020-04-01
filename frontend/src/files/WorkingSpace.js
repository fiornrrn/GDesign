import React from 'react';
import './styles/WorkingSpace.scss';

const par = 4;
const oneSM = 10 / par;

//foundations
const cupboardLeftRightElementWidth = 15 / par;
const cupboardTopElementHeight = 50 / par;
const cupboardBottomElementHeight = 60 / par;

//profil
const cupboardProfilWidth = 35 / par;

class WorkingSpace extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		let hfScrW = ((window.innerWidth) / 2) - ((this.props.sidebarValues.cupboardWidth * oneSM) / 2)- 213;
		let hfScrH = (window.innerHeight / 2) - ((this.props.sidebarValues.cupboardHeight * oneSM) / 2) - 20;

		console.log(window.innerWidth / 2 + " " + hfScrW);

		//cupboard profil creation
		let leftProfilImgArr = [];
		let rightProfilImgArr = [];
		let anotherProfilImgArr = [];
		for(let i = 0; i < this.props.sidebarValues.cupboardHeight; i++){
			//left
			leftProfilImgArr.push(<img src="/images/profil/light_left.png" width={cupboardProfilWidth} height={oneSM}
				style={{position: "fixed", marginTop: hfScrH + oneSM * i, marginLeft: hfScrW + cupboardLeftRightElementWidth}}/>);
			//right
			rightProfilImgArr.push(<img src="/images/profil/light_right.png" width={cupboardProfilWidth} height={oneSM}
				style={{position: "fixed", marginTop: hfScrH + oneSM * i, marginLeft: hfScrW + oneSM * this.props.sidebarValues.cupboardWidth - cupboardProfilWidth}}/>);
		}
		for(let i = 1; i < this.props.sidebarValues.doorsQuantity; i++){
			for(let j = 0; j < this.props.sidebarValues.cupboardHeight; j++){
				anotherProfilImgArr.push(<img src="/images/profil/light_right.png" width={cupboardProfilWidth} height={oneSM}
					style={{position: "fixed", marginTop: hfScrH + oneSM * j, 
					marginLeft: hfScrW + ((this.props.sidebarValues.cupboardWidth * oneSM / this.props.sidebarValues.doorsQuantity) * i) - (cupboardProfilWidth / 2)}}/>);
			}
		}

		//cupboard foundation creation 
		let topImgArr = [];
		let bottomImgArr = [];
		for(let i = 0; i < this.props.sidebarValues.cupboardWidth; i++){
			//top
			topImgArr.push(<img src="/images/foundation/light_top.png" width={oneSM} height={cupboardTopElementHeight} 
				style={{position: "fixed", marginTop: hfScrH, marginLeft: hfScrW + oneSM * i}}/>);

			//bottom
			bottomImgArr.push(<img src="/images/foundation/light_bottom.png" width={oneSM} height={cupboardBottomElementHeight} 
				style={{position: "fixed", marginTop: hfScrH + this.props.sidebarValues.cupboardHeight * oneSM - cupboardBottomElementHeight, marginLeft: hfScrW + oneSM * i}}/>);
		}

		let leftImgArr = [];
		let rightImgArr = [];
		for(let i = 0; i < this.props.sidebarValues.cupboardHeight; i++){
			//left
			leftImgArr.push(<img src="/images/foundation/light_left.png" width={cupboardLeftRightElementWidth} height={oneSM} 
				style={{position: "fixed", marginTop: hfScrH + oneSM * i, marginLeft: hfScrW + 0}}/>);

			//right
			rightImgArr.push(<img src="/images/foundation/light_right.png" width={cupboardLeftRightElementWidth} height={oneSM} 
				style={{position: "fixed", marginTop: hfScrH + oneSM * i,
				marginLeft: hfScrW + oneSM * this.props.sidebarValues.cupboardWidth}}/>);
		}

		return(
			<div className="main-space">
				{leftProfilImgArr}
				{rightProfilImgArr}
				{anotherProfilImgArr}

				{topImgArr}
				{bottomImgArr}
				{rightImgArr}
				{leftImgArr}
			</div>
		);
	}
}

export default WorkingSpace;