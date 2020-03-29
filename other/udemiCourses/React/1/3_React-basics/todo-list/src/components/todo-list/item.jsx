import React from 'react'
import './item.scss'

export default class Item extends React.Component {
	
	state = {
		isDone: false,
		isImportant: false
	}
	onLabelClick = () => {
		this.setState({
			isDone: !this.state.isDone
		})
 		console.log(this.state.isDone)
	}
	
	render() {
		const { label } = this.props;
		let { isDone } = this.state;
		
		return (
			<span className="todoList__item">
				<span className={ isDone? 'done': ''} onClick={ this.onLabelClick }>
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

