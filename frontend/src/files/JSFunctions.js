import React from 'react';

function DivideRendering(type, x, y, num, dndValues, sidebarValues, constants){
    let hfScrW = ((window.innerWidth) / 2) - ((sidebarValues.doorWidth * constants.oneSM) / 2) - 240 / 2;
	let hfScrH = (window.innerHeight / 2) - ((sidebarValues.doorHeight * constants.oneSM) / 2) - 20;

	let imgArr = [];
	let returnValues = {min: 0, max: 0};
	
	if(type == 'vertical'){
		returnValues.max = hfScrH + constants.oneSM * sidebarValues.doorHeight; returnValues.min = hfScrH;

		for(let i = 0; i < num; i++){
			if(dndValues[i].type != 'vertical'){
				let iy = (parseInt(dndValues[i].y, 10)), numy = (parseInt(dndValues[num].y, 10));

				if(iy > returnValues.min && iy < numy){
					returnValues.min = iy;
				}
				if(iy < returnValues.max && iy > numy){
					returnValues.max = iy;
				}
			}	
		}

		for(let i = 0; i < ((((returnValues.max-hfScrH) - (returnValues.min - hfScrH)) / constants.oneSM)/*Погрешность*/ - 1); i++){
			imgArr.push(<img src="/images/profil/light_vertical.png" width={constants.profilLeftRightWidth} height={constants.oneSM} 
				style={{position: "fixed", marginTop: /*Погрешность*/3 + returnValues.min + constants.oneSM * i, marginLeft: (parseInt(x, 10) - constants.sidebarWidth)}}/>);
		}
	}
	else if(type == 'horizontal'){
		returnValues.max = hfScrW + constants.oneSM * sidebarValues.doorWidth; returnValues.min = hfScrW;

		for(let i = 0; i < num; i++){
			if(dndValues[i].type != 'horizontal'){
				let ix = (parseInt(dndValues[i].x, 10)-constants.sidebarWidth), numx = (parseInt(dndValues[num].x, 10)-constants.sidebarWidth);

				if(ix > returnValues.min && ix < numx){
					returnValues.min = ix;
				}
				if(ix < returnValues.max && ix > numx){
					returnValues.max = ix;
				}
			}	 
		}
    }
    return returnValues;
}

export default DivideRendering;