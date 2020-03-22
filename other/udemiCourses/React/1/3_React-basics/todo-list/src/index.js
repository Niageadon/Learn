import React from 'react';
import { render } from 'react-dom';
import SearchPanel from './components/SearchPanel.jsx'
import ListHeader from './components/ListHeader.jsx'
import Index from './components/TodoList/index'

const App = () => {
	const val = '<script>alert("hacked")</script>';
	
	return (
		<div>
			{ val }
			<ListHeader/>
			<SearchPanel/>
			<Index/>
		</div>
	);
};


render(<App/>, document.getElementById('root'))
