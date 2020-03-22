import React from 'react';
import { render } from 'react-dom';

const TodoList = () => {
	const items = [
		'Learn React',
		'build apps',
		'get bibas'
	]
	
	return (
		<ul>
			<li>Learn React</li>
		</ul>
	);
};

const ListHeader = () => {
	const style = {
		fontSize: '24px'
	}
	
	
	return (
		<h1 style={ style }>my todo list</h1>
	);
};

const SearchPanel = () => {
	return (
		<input placeholder="search"/>
	);
};

const App = () => {
	const val = '<script>alert("hacked")</script>';
	
	return (
		<div>
			{ val }
			<ListHeader/>
			<SearchPanel/>
			<TodoList/>
		</div>
	);
};


render(<App/>, document.getElementById('root'))
