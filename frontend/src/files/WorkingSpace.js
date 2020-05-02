import React from 'react';
import './styles/WorkingSpace.scss';

const WorkingSpace = (props) => {
	let hfScrW = ((window.innerWidth) / 2) - ((props.sidebarValues.doorWidth * props.constants.oneSM) / 2) - 240 / 2;
	let hfScrH = (window.innerHeight / 2) - ((props.sidebarValues.doorHeight * props.constants.oneSM) / 2) - 20;

	//============================================ main profil creation =====================================================
	let leftProfilImgArr = [], rightProfilImgArr = [], topProfilImgArr = [], bottomProfilImgArr = [];
	for(let i = 0; i < props.sidebarValues.doorHeight; i++){
		//left
		leftProfilImgArr.push(<img src='/images/profil/light_left.png' width={props.constants.profilLeftRightWidth} height={props.constants.oneSM}
			style={{position: "fixed", marginTop: hfScrH + props.constants.oneSM * i, marginLeft: hfScrW}}/>);
		//right
		rightProfilImgArr.push(<img src="/images/profil/light_right.png" width={props.constants.profilLeftRightWidth} height={props.constants.oneSM}
			style={{position: "fixed", marginTop: hfScrH + props.constants.oneSM * i, marginLeft: hfScrW + props.constants.oneSM * props.sidebarValues.doorWidth}}/>);
	}
	for(let i = 0; i < props.sidebarValues.doorWidth; i++){
		//top
		topProfilImgArr.push(<img src="/images/profil/light_top.jpg" width={props.constants.oneSM} height={props.constants.profilTopHeight} 
			style={{position: "fixed", marginTop: hfScrH, marginLeft: hfScrW + props.constants.oneSM * i}}/>);
		//bottom
		bottomProfilImgArr.push(<img src="/images/profil/light_bottom.jpg" width={props.constants.oneSM} height={props.constants.profilBottomHeight} 
			style={{position: "fixed", marginTop: hfScrH + props.sidebarValues.doorHeight * props.constants.oneSM - props.constants.profilBottomHeight, marginLeft: hfScrW + props.constants.oneSM * i}}/>);
	}
	//=======================================================================================================================
	
	return(
		<div className="main-space">
			{props.dndDivides}
			{topProfilImgArr}
			{bottomProfilImgArr}
			{leftProfilImgArr}
			{rightProfilImgArr}
			{props.dndValues}
		</div>
	);
}

export default WorkingSpace;