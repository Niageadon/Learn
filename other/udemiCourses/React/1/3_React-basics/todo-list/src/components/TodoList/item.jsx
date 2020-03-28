import React from 'react'
import './item.scss'
const Item = ({
	label
}) => {
	
	return (
		<span className="todoList__item">
			{ label }
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

export default Item
