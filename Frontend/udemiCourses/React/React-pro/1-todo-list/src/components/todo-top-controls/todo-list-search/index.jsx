import React from 'react'
import './index.scss'
export default class Search extends React.Component {
	state = {
		term: ''
	}
	onTermChange = (e) => {
		const term = e.target.value
		this.setState({
			term
		});
		this.props.onSearchChange(term)
	}
	
	render() {
		return (
			<input className="todoList__controls__search" placeholder="search" value={this.state.term} onChange={this.onTermChange}/>
		);
	}
	

};

