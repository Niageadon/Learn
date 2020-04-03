import React from 'react'
import Filter from './todo-list-filter'
import Search from './todo-list-search'
import './index.scss'

export default ({onSearchChange, onFilterChange, filterByState, filter}) => {
	return (
		<div className="todoList__controls">
			<Search onSearchChange={onSearchChange}/>
			<Filter filter={filter} onFilterChange={onFilterChange}/>
		</div>
	)
}
