import React from 'react'
import './index.scss'
export default class Person extends React.Component{
	state = {
	}
	
	render() {
		const {left, right} = this.props;
		return (
			<div className="item-details_container card">
				<div className="item-details__avatar">
					{left}
				</div>
				<div className="item-details">
					{right}
				</div>
			</div>
		)
	}
}
