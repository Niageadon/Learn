import React from 'react';
import { render } from 'react-dom';
import Header from './components/todo-header'
import Controls from './components/todo-controls'
import TodoList from './components/todo-list'
import './index.scss'

export default  class App extends React.Component {
	state = {
		list: [
			{label: 'boba', id: 1, important: true},
			{label: 231, id: 2, important: false},
			{label: 'biba', id: 3, important: true}
		]
	}
	deleteListItem(id) {
		this.setState(({list}) => {
			const index = list.findIndex(el => el.id === id)
			/*list.splice(index, 1)
			return {
				list
			}*/
			const before = list.slice(0, index);
			const after = list.slice(index+1);
			return{
				list: [...before, ...after]
			}
		})
	}
	
	render() {
		return (
			<div className="todoList">
				<Header/>
				<Controls/>
				
				<TodoList
					onDelete={(id) => this.deleteListItem(id)}
					list={ this.state.list }/>
			</div>
		);
	}
	
	
};


render(<App/>, document.getElementById('root'))
