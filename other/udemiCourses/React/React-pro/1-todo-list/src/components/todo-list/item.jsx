import React from 'react'
import './item.scss'

export default class Item extends React.Component {
	
	
	render() {
		const { label, done, important, onDelete, toggleImportant, toggleDone } = this.props;
		let style = 'todoList__item'
		if(done) {
			style += ' done'
		}
		if(important) {
			style += ' important'
		}
		
		
		return (
			<span className={ style }>
				<span className="todoList__item-label" onClick={toggleDone}>
					{label}
				</span>
				<div className="todoList__item-controls">
					<button onClick={toggleImportant} type="button" className="todoList__item-controls-btn btn btn-outline-success">
						<i className="fa fa-exclamation"></i>
					</button>
					<button onClick={onDelete} type="button" className="todoList__item-controls-btn btn btn-outline-danger">
						<i className="fa fa-trash"></i>
					</button>
				</div>
			</span>
		)
	}
}

