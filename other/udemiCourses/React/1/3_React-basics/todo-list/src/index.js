import React from 'react';
import { render } from 'react-dom';

const TodoList = () => {
	return (
		<ul>
			<li>Learn React</li>
			<li>bib  </li>
		</ul>
	);
};

const ListHeader = () => {
	return (
		<h1>my todo list</h1>
	);
};

const SearchPanel = () => {
	return (
		<input placeholder="search"/>
	);
};

const App = () => {
	return (
		<div>
			<ListHeader/>
			<SearchPanel/>
			<TodoList/>
		</div>
	);
};
	

render(<App/>, document.getElementById('root'))
