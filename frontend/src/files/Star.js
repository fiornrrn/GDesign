import React from 'react';

function Star(props){
	let values = {
		position: "fixed",
		backgroundColor: "#F0FFFF",
		borderRadius: "50%",
		height: props.size + "px", 
		width: props.size + "px",
		marginLeft: props.leftIndent + "vw",
		marginTop: props.topIndent + "vh",
	}
	return(
		<div style={values}></div>
	);
}

export default Star;