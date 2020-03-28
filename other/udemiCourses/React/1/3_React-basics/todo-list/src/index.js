import React from 'react';
import { render } from 'react-dom';
import Search from './components/todo-search'
import Header from './components/todo-header'
import TodoList from './components/todo-list'
import TodoListFilter from './components/todo-list-filter'
import './index.scss'
const App = () => {
	const val = '<script>alert("hacked")</script>';
	
	return (
		<div>
			{ val }
			<Header/>
			<Search/>
			<TodoListFilter/>
			<TodoList list={[
				{label: 'boba', id: 1},
				{label: 231, id: 2},
				{label: 'biba', id: 3}
			]}/>
		</div>
	);
};


render(<App/>, document.getElementById('root'))
