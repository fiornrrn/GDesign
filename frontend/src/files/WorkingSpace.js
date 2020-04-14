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

const WorkingSpace = (props) => {
	let hfScrW = ((window.innerWidth) / 2) - ((props.sidebarValues.cupboardWidth * oneSM) / 2)- 213;
	let hfScrH = (window.innerHeight / 2) - ((props.sidebarValues.cupboardHeight * oneSM) / 2) - 20;

	//cupboard profil creation
	let leftProfilImgArr = [];
	let rightProfilImgArr = [];
	let anotherProfilImgArr = [];
	for(let i = 0; i < props.sidebarValues.cupboardHeight; i++){
		//left
		leftProfilImgArr.push(<img src="/images/profil/light_left.png" width={cupboardProfilWidth} height={oneSM}
			style={{position: "fixed", marginTop: hfScrH + oneSM * i, marginLeft: hfScrW + cupboardLeftRightElementWidth}}/>);
		//right
		rightProfilImgArr.push(<img src="/images/profil/light_right.png" width={cupboardProfilWidth} height={oneSM}
			style={{position: "fixed", marginTop: hfScrH + oneSM * i, marginLeft: hfScrW + oneSM * props.sidebarValues.cupboardWidth - cupboardProfilWidth}}/>);
	}
	for(let i = 1; i < props.sidebarValues.doorsQuantity; i++){
		for(let j = 0; j < props.sidebarValues.cupboardHeight; j++){
			anotherProfilImgArr.push(<img src="/images/profil/light_right.png" width={cupboardProfilWidth} height={oneSM}
				style={{position: "fixed", marginTop: hfScrH + oneSM * j, 
				marginLeft: hfScrW + ((props.sidebarValues.cupboardWidth * oneSM / props.sidebarValues.doorsQuantity) * i) - (cupboardProfilWidth / 2)}}/>);
		}
	}

	//cupboard foundation creation 
	let topImgArr = [];
	let bottomImgArr = [];
	for(let i = 0; i < props.sidebarValues.cupboardWidth; i++){
		//top
		topImgArr.push(<img src="/images/foundation/light_top.png" width={oneSM} height={cupboardTopElementHeight} 
			style={{position: "fixed", marginTop: hfScrH, marginLeft: hfScrW + oneSM * i}}/>);

		//bottom
		bottomImgArr.push(<img src="/images/foundation/light_bottom.png" width={oneSM} height={cupboardBottomElementHeight} 
			style={{position: "fixed", marginTop: hfScrH + props.sidebarValues.cupboardHeight * oneSM - cupboardBottomElementHeight, marginLeft: hfScrW + oneSM * i}}/>);
	}

	let leftImgArr = [];
	let rightImgArr = [];
	for(let i = 0; i < props.sidebarValues.cupboardHeight; i++){
		//left
		leftImgArr.push(<img src="/images/foundation/light_left.png" width={cupboardLeftRightElementWidth} height={oneSM} 
			style={{position: "fixed", marginTop: hfScrH + oneSM * i, marginLeft: hfScrW + 0}}/>);

		//right
		rightImgArr.push(<img src="/images/foundation/light_right.png" width={cupboardLeftRightElementWidth} height={oneSM} 
			style={{position: "fixed", marginTop: hfScrH + oneSM * i,
			marginLeft: hfScrW + oneSM * props.sidebarValues.cupboardWidth}}/>);
	}
	//======================================================================================
	let horizontalDivisionsImgArr = [];
	let verticalDivisionsImgArr = [];

	let marginLeft_RightElements = hfScrW + oneSM * props.sidebarValues.cupboardWidth;
	let marginTop_BottomElements = hfScrH + props.sidebarValues.cupboardHeight * oneSM - cupboardBottomElementHeight;
	for(let i = 0; i < props.dndValues.length; i++){
        if(((parseInt(props.dndValues[i].x, 10)) - 213) < marginLeft_RightElements && ((parseInt(props.dndValues[i].x, 10)) - 213) > hfScrW && parseInt(props.dndValues[i].y, 10) < marginTop_BottomElements && parseInt(props.dndValues[i].y, 10) > hfScrH){
        	if(props.dndValues[i].type == 'horizontal'){
        		for(let j = 0; j < props.sidebarValues.cupboardWidth; j++){
	       			//horizontal
        			horizontalDivisionsImgArr.push(<img src="/images/profil/light_horizontal.png" width={oneSM} height={cupboardProfilWidth} 
						style={{position: "fixed", marginTop: parseInt(props.dndValues[i].y, 10), marginLeft: hfScrW + oneSM * j}}/>);
	        		}
    	    }
        	if(props.dndValues[i].type == 'vertical'){
        		for(let j = 0; j < props.sidebarValues.cupboardHeight; j++){
	    	    	//vertical
        			horizontalDivisionsImgArr.push(<img src="/images/profil/light_horizontal.png" width={cupboardProfilWidth} height={oneSM} 
						style={{position: "fixed", marginTop: hfScrH + oneSM * j, marginLeft: ((parseInt(props.dndValues[i].x, 10)) - 213)}}/>);
        	    }
        	}
        }
    }

	//======================================================================================

	return(
		<div className="main-space">
			{horizontalDivisionsImgArr}

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

export default WorkingSpace;