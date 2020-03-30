import React from 'react'
import './item.scss'

export default class Item extends React.Component {
	
	state = {
		isDone: false,
		isImportant: this.props.important
	}
	onLabelClick = () => {
		this.setState(
			({isDone}) => {
				return{
					isDone: !isDone
				}
			}
		)
	}
	setImportance = () => {
		this.setState(
			({isImportant}) => {
				return{
					isImportant: !isImportant
				}
			}
		)
	}
	
	render() {
		const { label, onDelete } = this.props;
		let { isDone, isImportant } = this.state;
		let style = 'todoList__item'
		if(isDone) {
			style += ' done'
		}
		if(isImportant) {
			style += ' important'
		}
		
		return (
			<span className={ style }>
				<span className="todoList__item-label" onClick={ this.onLabelClick }>
					{label}
				</span>
				<div className="todoList__item-controls">
					<button onClick={this.setImportance} type="button" className="todoList__item-controls-btn btn btn-outline-success">
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

