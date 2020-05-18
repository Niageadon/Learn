import React from 'react'
import './index.scss'
export default class Row extends React.Component{
	
	state = {
	}
	render() {
		const {left, right} = this.props;
		return (
			<div className='row'>
				{left}
				{right}
			</div>
		);
	}
}
