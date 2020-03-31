import React from 'react'
import Filter from './todo-list-filter'
import Search from './todo-list-search'
import './index.scss'

export default () => {
	return (
		<div className="todoList__controls">
			<Search/>
			<Filter/>
		</div>
	)
}
