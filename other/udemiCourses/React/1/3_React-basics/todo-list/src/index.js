import React from 'react';
import { render } from 'react-dom';
import Header from './components/todo-header'
import Controls from './components/todo-controls'
import TodoList from './components/todo-list'
import './index.scss'

const App = () => {
	const val = '<script>alert("hacked")</script>';
	
	return (
		<div className="todoList">
			{ val }
			<Header/>
			<Controls/>
			
			<TodoList list={[
				{label: 'boba', id: 1},
				{label: 231, id: 2},
				{label: 'biba', id: 3}
			]}/>
		</div>
	);
};


render(<App/>, document.getElementById('root'))
