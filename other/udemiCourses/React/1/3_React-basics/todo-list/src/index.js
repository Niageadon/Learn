import React from 'react';
import { render } from 'react-dom';
import Header from './components/todo-header'
import Controls from './components/todo-top-controls'
import TodoList from './components/todo-list'
import TodoAdd from './components/todo-bot-controls/todo-list-add-element'
import './index.scss'

export default  class App extends React.Component {
	nextId = 4;
	state = {
		list: [
			{label: 'boba', id: 1, important: true, done: false},
			{label: 231, id: 2, important: false, done: false},
			{label: 'biba', id: 3, important: true, done: false}
		],
		searchTerm: '',
		showType: ''
	}
	deleteItem(id) {
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
	addItem = (label) => {
		console.log(11)
		const newItem = {
			id: this.nextId++,
			label,
			important: false,
			done: false
		}
		this.setState(({list}) => {
			return{
				list: [...list, newItem]
			}
		})
	}
	toggleImportant = (id) => {
		this.setState(({list}) => {
			const index = list.findIndex(el => el.id === id);
			let item = Object.assign({}, list[index])
			console.log(item)
			item.important = !item.important;
			
			const before = list.slice(0, index);
			const after = list.slice(index + 1);
			return {
				list: [...before, item, ...after]
			}
		})
	}
	toggleDone = (id) => {
		this.setState(({list}) => {
			const index = list.findIndex(el => el.id === id);
			let item = Object.assign({}, list[index])
			console.log(item)
			item.done = !item.done;
			const before = list.slice(0, index);
			const after = list.slice(index + 1);
			return {
				list: [...before, item, ...after]
			}
		})
	}
	searchItems = (term) => {
		this.setState({searchTerm: term})
	}
	onFilterChange = (showType) => {
		this.setState({
			showType
		})
	}
	
	render() {
		let filtererList = this.state.list.filter(el => String(el.label).includes(this.state.searchTerm))
		if(this.state.showType) {
			switch (this.state.showType) {
				case 'active': {
					filtererList = filtererList.filter(el => !el.done);
					break;
				}
				case 'done': {
					filtererList = filtererList.filter(el => el.done);
					break;
				}
				case 'important': {
					filtererList = filtererList.filter(el => el.important);
					break;
				}
			}
		}
		
		return (
			<div className="todoList">
				<Header/>
				<Controls filter={this.state.showType} onFilterChange={this.onFilterChange} onSearchChange={this.searchItems} />
				
				<TodoList
					onDelete={(id) => this.deleteItem(id)}
					toggleImportant={this.toggleImportant}
					toggleDone={this.toggleDone}
					list={ filtererList }
				/>
				<TodoAdd addItem={this.addItem}/>
			</div>
		);
	}
	
	
};


render(<App/>, document.getElementById('root'))
