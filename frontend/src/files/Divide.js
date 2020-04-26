import React, {useRef, useEffect, useState} from 'react';

const Divide = (props) => {
	const [params, setParams] = useState({x: props.x, y: props.y, type: props.type})
	let imgArr = [];
	let endX, endY;

	for(let i = 0; i < props.dndValues; i++)
	{
		if(params.type != props.dndValues[i].type){
			
		}
	}

	return(
		<div>
			
		</div>
	);
}

export default Divide;