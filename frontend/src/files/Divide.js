import React, {useRef, useEffect, useState} from 'react';

const Divide = (props) => {
	let hfScrW = ((window.innerWidth) / 2) - ((props.sidebarValues.doorWidth * props.constants.oneSM) / 2) - 240 / 2;
	let hfScrH = (window.innerHeight / 2) - ((props.sidebarValues.doorHeight * props.constants.oneSM) / 2) - 20;

	let imgArr = [];
	let max = props.max, min = props.min;
	
	if(props.dndValues[props.num].type == 'vertical'){
		for(let i = 0; i < ((((max-hfScrH) - (min - hfScrH)) / props.constants.oneSM)/*Погрешность*/ - 1); i++){
			imgArr.push(<img src="/images/profil/light_vertical.png" width={props.constants.profilLeftRightWidth} height={props.constants.oneSM} 
				style={{position: "fixed", marginTop: /*Погрешность*/3 + min + props.constants.oneSM * i, marginLeft: (parseFloat(props.dndValues[props.num].x, 10) - props.constants.sidebarWidth)}}/>);
		}
	}
	else if(props.dndValues[props.num].type == 'horizontal'){
		for(let i = 0; i < (((max-hfScrW) - (min - hfScrW)) / props.constants.oneSM); i++){
			imgArr.push(<img src="/images/profil/light_horizontal.png" width={props.constants.oneSM} height={props.constants.profilLeftRightWidth} 
				style={{position: "fixed", marginTop: props.dndValues[props.num].y, marginLeft: min + props.constants.oneSM * i}}/>);
		}
	}

	return(
		<div>
			{imgArr}
		</div>
	);
}

export default Divide;