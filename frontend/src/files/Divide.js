import React, {useRef, useEffect, useState} from 'react';

const Divide = (props) => {
	let hfScrW = ((window.innerWidth) / 2) - ((props.sidebarValues.doorWidth * props.constants.oneSM) / 2) - 240 / 2;
	let hfScrH = (window.innerHeight / 2) - ((props.sidebarValues.doorHeight * props.constants.oneSM) / 2) - 20;

	let imgArr = [];
	let max = 0, min = 0;
	
	if(props.type == 'vertical'){
		max = hfScrH + props.constants.oneSM * props.sidebarValues.doorHeight; min = hfScrH;

		for(let i = 0; i < props.num; i++){
			if(props.dndValues[i].type != 'vertical'){
				let iy = (parseInt(props.dndValues[i].y, 10)), numy = (parseInt(props.dndValues[props.num].y, 10));

				if(iy > min && iy < numy){
					min = iy;
				}
				if(iy < max && iy > numy){
					max = iy;
				}
			}	
		}

		for(let i = 0; i < ((((max-hfScrH) - (min - hfScrH)) / props.constants.oneSM)/*Погрешность*/ - 1); i++){
			imgArr.push(<img src="/images/profil/light_vertical.png" width={props.constants.profilLeftRightWidth} height={props.constants.oneSM} 
				style={{position: "fixed", marginTop: /*Погрешность*/3 + min + props.constants.oneSM * i, marginLeft: (parseInt(props.x, 10) - props.constants.sidebarWidth)}}/>);
		}
	}
	else if(props.type == 'horizontal'){
		max = hfScrW + props.constants.oneSM * props.sidebarValues.doorWidth; min = hfScrW;

		for(let i = 0; i < props.num; i++){
			if(props.dndValues[i].type != 'horizontal'){
				let ix = (parseInt(props.dndValues[i].x, 10)-props.constants.sidebarWidth), numx = (parseInt(props.dndValues[props.num].x, 10)-props.constants.sidebarWidth);

				if(ix > min && ix < numx){
					min = ix;
				}
				if(ix < max && ix > numx){
					max = ix;
				}
			}	 
		}

		for(let i = 0; i < (((max-hfScrW) - (min - hfScrW)) / props.constants.oneSM); i++){
			imgArr.push(<img src="/images/profil/light_horizontal.png" width={props.constants.oneSM} height={props.constants.profilLeftRightWidth} 
				style={{position: "fixed", marginTop: props.y, marginLeft: min + props.constants.oneSM * i}}/>);
		}
	}

	return(
		<div>
			{imgArr}
		</div>
	);
}

export default Divide;