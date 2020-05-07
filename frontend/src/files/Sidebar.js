import React, {useRef, useEffect, useState} from 'react';
import './styles/Sidebar.scss';

const divisionHeight = 90;
const divisionWidth = 15;

const squareSide = 60;

const horizontalTopMargin = 250;
const horizontalLeftMargin = 140;
const verticalTopMargin = 250;
const verticalLeftMargin = 65; 


const Sidebar = (props) => {
	//=========== Refs ============
	const dndHorizontalRef = useRef(null);
	const dndVerticalRef = useRef(null);

	const dndFirstTextureRef = useRef(null);

	//=========== onMove =============
	//----------- Divide -------------
	const handleDownHorizontal = (e) => {
		document.body.appendChild(dndHorizontalRef.current);
		dndHorizontalRef.current.style.zIndex = 1000;
		function moveAt(e) {
			dndHorizontalRef.current.style.left = e.clientX - dndHorizontalRef.current.offsetWidth / 2 + 'px';
			dndHorizontalRef.current.style.top = e.clientY - dndHorizontalRef.current.offsetHeight / 2 + 'px'; 
		} 

		document.onmousemove = function(e) {
			moveAt(e, 'horizontal', dndHorizontalRef);
		}

		dndHorizontalRef.current.onmouseup = function() {
			props.onDndValuesAdd('horizontal',dndHorizontalRef.current.style.left, dndHorizontalRef.current.style.top);
			
			dndHorizontalRef.current.style.left = horizontalLeftMargin - dndHorizontalRef.current.offsetWidth / 2 + 'px';
			dndHorizontalRef.current.style.top = horizontalTopMargin - dndHorizontalRef.current.offsetHeight / 2 + 'px';

			document.onmousemove = null;
			dndHorizontalRef.current.onmouseup = null;
		}

		dndHorizontalRef.current.ondragstart = function() {
			return false;
		};
	}
	const handleDownVertical = (e) => {
		document.body.appendChild(dndVerticalRef.current)

		dndVerticalRef.current.style.zIndex = 1000;

		function moveAt(e) {
			dndVerticalRef.current.style.left = e.clientX - dndVerticalRef.current.offsetWidth / 2 + 'px';
        	dndVerticalRef.current.style.top = e.clientY - dndVerticalRef.current.offsetHeight / 2 + 'px';
		}

		document.onmousemove = function(e) {
			moveAt(e, 'horizontal', dndVerticalRef);
		}

		dndVerticalRef.current.onmouseup = function() {
			props.onDndValuesAdd('vertical',dndVerticalRef.current.style.left, dndVerticalRef.current.style.top);

			dndVerticalRef.current.style.left = verticalLeftMargin - dndVerticalRef.current.offsetWidth / 2 + 'px';
			dndVerticalRef.current.style.top = verticalTopMargin - dndVerticalRef.current.offsetHeight / 2 + 'px';

			document.onmousemove = null;
			dndVerticalRef.current.onmouseup = null;
		}

		dndVerticalRef.current.ondragstart = function() {
			return false;
		};
	}

	//----------- Textures ------------
	const handleDownFirstTexture = (e) => {
		document.body.appendChild(dndFirstTextureRef.current);
		dndFirstTextureRef.current.style.zIndex = 1000;
		function moveAt(e) {
			dndFirstTextureRef.current.style.left = e.clientX - dndFirstTextureRef.current.offsetWidth / 2 + 'px';
			dndFirstTextureRef.current.style.top = e.clientY - dndFirstTextureRef.current.offsetHeight / 2 + 'px'; 
		} 

		document.onmousemove = function(e) {
			moveAt(e, 'horizontal', dndFirstTextureRef);
		}

		dndFirstTextureRef.current.onmouseup = function() {
			props.onTextureValuesAdd('/images/textures/beton.jpg',dndFirstTextureRef.current.style.left, dndFirstTextureRef.current.style.top);
			
			dndFirstTextureRef.current.style.left = horizontalLeftMargin - dndFirstTextureRef.current.offsetWidth / 2 + 'px';
			dndFirstTextureRef.current.style.top = ((horizontalTopMargin - dndFirstTextureRef.current.offsetHeight / 2) + 100) + 'px';

			document.onmousemove = null;
			dndFirstTextureRef.current.onmouseup = null;
		}

		dndFirstTextureRef.current.ondragstart = function() {
			return false;
		};
	}

	//=========== Effect ============
	useEffect(() => {
		dndHorizontalRef.current.style.left = horizontalLeftMargin - dndHorizontalRef.current.offsetWidth / 2 + 'px';
		dndHorizontalRef.current.style.top = horizontalTopMargin - dndHorizontalRef.current.offsetHeight / 2 + 'px';

		dndVerticalRef.current.style.left = verticalLeftMargin - dndVerticalRef.current.offsetWidth / 2 + 'px';
		dndVerticalRef.current.style.top = verticalTopMargin - dndVerticalRef.current.offsetHeight / 2 + 'px';

		dndFirstTextureRef.current.style.left = horizontalLeftMargin - dndFirstTextureRef.current.offsetWidth / 2 + 'px';
		dndFirstTextureRef.current.style.top = ((horizontalTopMargin - dndFirstTextureRef.current.offsetHeight / 2) + 100) + 'px';
	});

	//=========== Sidebar values ==============
	const [sidebarValues, setSidebarValues] = useState({
		doorHeight: 200,
		doorWidth: 100,
	});

	const onSidebarValuesChange = (e, paramName) => {
		let bufArr = sidebarValues;
    	bufArr[paramName] = parseInt(e.target.value);
   		setSidebarValues({doorHeight: bufArr.doorHeight,doorWidth: bufArr.doorWidth});
	}

	return(
		<div className='sidebar'>
			<input type="number" className="input" placeholder="Height" value={sidebarValues.doorHeight} onChange={(e) => onSidebarValuesChange(e, 'doorHeight')} style={{marginTop: "20px"}}/>
			<input type="number" className="input" placeholder="Width" value={sidebarValues.doorWidth} onChange={(e) => onSidebarValuesChange(e, 'doorWidth')}/>
			<button className="create-btn" onClick={(e) => props.onCreateBtnClick(e,sidebarValues)}>Создать шкаф</button>
			<img src="/images/profil/light_vertical.png" width={divisionWidth} height={divisionHeight} 
				style={{position:"fixed"}}
				onMouseDown={handleDownVertical} ref={dndVerticalRef}/>
			<img src="/images/profil/light_horizontal.png" width={divisionHeight} height={divisionWidth} 
				style={{position:"fixed"}}
				onMouseDown={handleDownHorizontal} ref={dndHorizontalRef}/>

			<img src="/images/textures/beton.jpg" width={squareSide} height={squareSide} 
				style={{position:"fixed"}}
				onMouseDown={handleDownFirstTexture} ref={dndFirstTextureRef}/>
		</div>
	);
}
export default Sidebar;