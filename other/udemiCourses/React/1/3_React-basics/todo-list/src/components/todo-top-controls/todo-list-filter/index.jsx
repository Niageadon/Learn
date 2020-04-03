import React from 'react'
import './index.scss'

export default class TodoListFilter extends React.Component{
	buttons = [
		{type: 'all', label: 'All'},
		{type: 'active', label: 'Active'},
		{type: 'done', label: 'Done'},
	]
	
	render() {
		const {filter, onFilterChange} = this.props;
		const buttons = this.buttons.map(({type, label}) => {
			const isActive = type === filter;
			const style =  isActive? 'btn-info': 'btn-outline-secondary'
			
			return (
				<button type="button" className={`btn ${style}`} onClick={() => onFilterChange(type)} key={type}>
					{ label }
				</button>
			)
		})
		
		return (
			<div className="todoList__controls__filter-container">
				<div className="btn-group btn-group-toggle" data-toggle="buttons">
					{buttons}
				</div>
			</div>
		);
	}
}


