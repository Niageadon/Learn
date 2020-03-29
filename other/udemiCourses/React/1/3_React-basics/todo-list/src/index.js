import React from 'react';
import { render } from 'react-dom';
import Header from './components/todo-header'
import Controls from './components/todo-controls'
import TodoList from './components/todo-list'
import './index.scss'

const App = () => {
	let list = [
		{label: 'boba', id: 1},
		{label: 231, id: 2},
		{label: 'biba', id: 3}
	]
	
	return (
		<div className="todoList">
			<Header/>
			<Controls/>
			
			<TodoList
				onDelete={(id) => {console.log(id)}}
				list={ list }/>
		</div>
	);
};


render(<App/>, document.getElementById('root'))
