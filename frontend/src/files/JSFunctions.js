function MaxMinCalculate(type, x, y, dndValues, sidebarValues, constants){
	let hfScrW = ((window.innerWidth) / 2) - ((sidebarValues.doorWidth * constants.oneSM) / 2) - 240 / 2;
  let hfScrH = (window.innerHeight / 2) - ((sidebarValues.doorHeight * constants.oneSM) / 2) - 20;
  let max = 0, min = 0;

  if(type=='vertical'){
    max = hfScrH + constants.oneSM * sidebarValues.doorHeight; min = hfScrH;

    for(let i = 0; i < dndValues.length; i++){
      if(dndValues[i].type != 'vertical'){
        let iy = parseFloat(dndValues[i].y, 10), numy = parseFloat(y, 10);
        if(dndValues[i].max > parseFloat(x, 10) - constants.sidebarWidth && dndValues[i].min < parseFloat(x, 10) - constants.sidebarWidth){
          if(iy > min && iy < numy){
            min = iy;
          }
          if(iy < max && iy > numy){
            max = iy;
          }
        }
      }	
    }
  }
  else if(type == 'horizontal'){
    max = hfScrW + constants.oneSM * sidebarValues.doorWidth; min = hfScrW;

    for(let i = 0; i < dndValues.length; i++){
      if(dndValues[i].type != 'horizontal'){
        let ix = (parseFloat(dndValues[i].x, 10)-constants.sidebarWidth), numx = (parseFloat(x, 10)-constants.sidebarWidth);
        if(dndValues[i].max > parseFloat(y, 10) && dndValues[i].min < parseFloat(y, 10)){
          if(ix > min && ix < numx){
            min = ix;
          }
          if(ix < max && ix > numx){
            max = ix;
          }
        }
      }	 
    }
	}
	return {max: max, min: min}
}

export default MaxMinCalculate;