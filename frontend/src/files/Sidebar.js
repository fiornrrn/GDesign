import React from 'react';
import './styles/Sidebar.scss';

class Sidebar extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className='sidebar'>
				<input type="number" className="number input" value={this.props.sidebarValues.cupboardHeight} onChange={(e) => this.props.onSidebarValuesChange(e, 'cupboardHeight')}/> <i className="text">Высота</i>
				<input type="number" className="number input" value={this.props.sidebarValues.cupboardWidth} onChange={(e) => this.props.onSidebarValuesChange(e, 'cupboardWidth')}/> <i className="text">Ширина</i>
				<input type="number" className="number input" value={this.props.sidebarValues.doorsQuantity} onChange={(e) => this.props.onSidebarValuesChange(e, 'doorsQuantity')}/> <i className="text">Двери</i>
				<button className="create-btn">Создать шкаф</button>
				<img src="/images/profil/light_vertical.png" width={15} height={90} style={{ marginTop: 10, marginLeft: 40}}/>
				<img src="/images/profil/light_horizontal.png" width={90} height={15} style={{position:"fixed", marginTop: 50, marginLeft: 30}}
					onMouseDown={this.props.onMouseDown} onMouseUp={this.props.onMouseUp} onMouseMove={this.props.onMouseMove}/>
			</div>
		);
	}
}

export default Sidebar;