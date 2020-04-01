import React from 'react'
import './index.scss'

export default class TodoAdd extends React.Component{
	state = {
		label: ''
	}
	changeLabel = (event) => {
		this.setState({label: event.target.value})
	}
	submitForm = (event) => {
		const {addItem} = this.props
		event.preventDefault()
		addItem(this.state.label)
	}
	
	render() {
		return (
			<form className="todoList__controls__add" onSubmit={this.submitForm}>
				<input type="text"
					className="form-control"
					placeholder="Enter label"
					onChange={this.changeLabel}/>
				<button className="todoList__controls__add-btn btn btn-outline-secondary">
					Add new item
				</button>
			</form>
		);
	}
}


