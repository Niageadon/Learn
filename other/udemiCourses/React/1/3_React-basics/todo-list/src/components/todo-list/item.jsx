import React from 'react'
import './item.scss'

export default class Item extends React.Component {
	onLabelClick = () => {
		console.log(22)
	}
	
	render() {
		const {label} = this.props
		
		return (
			<span className="todoList__item">
				<span onClick={ this.onLabelClick }>
					{label}
				</span>
				<div className="todoList__item-controls">
					<button type="button" className="todoList__item-controls-btn btn btn-outline-success">
						<i className="fa fa-exclamation"></i>
					</button>
					<button type="button" className="todoList__item-controls-btn btn btn-outline-danger">
						<i className="fa fa-trash"></i>
					</button>
				</div>
			</span>
		)
	}
}

