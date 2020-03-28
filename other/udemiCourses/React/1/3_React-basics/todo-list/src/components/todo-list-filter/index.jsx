import React from 'react'
import './index.scss'

export default class TodoListFilter extends React.Component{
	render() {
		return (
			<div className="todoList__filter-container">
				<div className="btn-group btn-group-toggle" data-toggle="buttons">
					<label className="btn btn-secondary active">
						<input type="radio" name="options" id="option1" autoComplete="off"/> All
					</label>
					<label className="btn btn-secondary">
						<input type="radio" name="options" id="option2" autoComplete="off"/> Active
					</label>
					<label className="btn btn-secondary">
						<input type="radio" name="options" id="option3" autoComplete="off"/> Important
					</label>
				</div>
			</div>
		);
	}
}


