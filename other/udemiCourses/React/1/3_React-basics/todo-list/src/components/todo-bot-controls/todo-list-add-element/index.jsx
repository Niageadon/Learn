import React from 'react'
import './index.scss'

export default class TodoAdd extends React.Component{
	render() {
		
		const {addItem} = this.props
		return (
			<div className="todoList__controls__add">
				<button onClick={() => addItem('111222')} className="todoList__controls__add-btn btn btn-outline-secondary">
					Add new item
				</button>
			</div>
		);
	}
}


