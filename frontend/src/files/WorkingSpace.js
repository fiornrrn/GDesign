import React from 'react';
import './styles/WorkingSpace.scss';

const par = 4;
const oneSM = 10 / par;
const profilLeftRightWidth = 35 / par;
const profilTopHeight = 20 / par;
const profilBottomHeight = 55 / par;

const WorkingSpace = (props) => {
	let hfScrW = ((window.innerWidth) / 2) - ((props.sidebarValues.doorWidth * oneSM) / 2) - 240 / 2;
	let hfScrH = (window.innerHeight / 2) - ((props.sidebarValues.doorHeight * oneSM) / 2) - 20;

	//profil
	let leftProfilImgArr = [];
	let rightProfilImgArr = [];
	let topProfilImgArr = [];
	let bottomProfilImgArr = [];
	for(let i = 0; i < props.sidebarValues.doorHeight; i++){
		console.log(hfScrH + " " +  hfScrW);
		//left
		leftProfilImgArr.push(<img src='/images/profil/light_left.png' width={profilLeftRightWidth} height={oneSM}
			style={{position: "fixed", marginTop: hfScrH + oneSM * i, marginLeft: hfScrW}}/>);
		//right
		rightProfilImgArr.push(<img src="/images/profil/light_right.png" width={profilLeftRightWidth} height={oneSM}
			style={{position: "fixed", marginTop: hfScrH + oneSM * i, marginLeft: hfScrW + oneSM * props.sidebarValues.doorWidth}}/>);
	}
	for(let i = 0; i < props.sidebarValues.doorWidth; i++){
		//top
		topProfilImgArr.push(<img src="/images/profil/light_top.jpg" width={oneSM} height={profilTopHeight} 
			style={{position: "fixed", marginTop: hfScrH, marginLeft: hfScrW + oneSM * i}}/>);
		//bottom
		bottomProfilImgArr.push(<img src="/images/profil/light_bottom.jpg" width={oneSM} height={profilBottomHeight} 
			style={{position: "fixed", marginTop: hfScrH + props.sidebarValues.doorHeight * oneSM - profilBottomHeight, marginLeft: hfScrW + oneSM * i}}/>);
	}

	return(
		<div className="main-space">
			{topProfilImgArr}
			{bottomProfilImgArr}
			{leftProfilImgArr}
			{rightProfilImgArr}
		</div>
	);
}

export default WorkingSpace;