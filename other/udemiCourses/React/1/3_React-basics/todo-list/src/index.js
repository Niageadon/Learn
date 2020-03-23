import React from 'react';
import { render } from 'react-dom';
import SearchPanel from './components/SearchPanel.jsx'
import ListHeader from './components/ListHeader.jsx'
import TodoList from './components/TodoList/index'

const App = () => {
	const val = '<script>alert("hacked")</script>';
	
	return (
		<div>
			{ val }
			<ListHeader/>
			<SearchPanel/>
			<TodoList list={[
				{label: 'boba', id: 1},
				{label: 231, id: 2},
				{label: 'biba', id: 3}
			]}/>
		</div>
	);
};


render(<App/>, document.getElementById('root'))
