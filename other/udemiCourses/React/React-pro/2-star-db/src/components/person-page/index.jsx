import React from 'react'
import List from '../list'
import Person from '../person-page/person'
import ErrorIndicator from '../error/index'
import Swapi from '../../services/Swapi'

const Row = ({left, right}) => {
	return (
		<div className='row'>
			{left}
			{right}
		</div>
	);
}

export default class App extends React.Component{
	state = {
		personId: null,
		hasError: false
	}
	
	componentDidCatch(error, errorInfo) {
		this.setState({
			hasError: true
		})
	}
	
	onPersonSelected = (personId) => {
		this.setState({personId})
	}
	
	render() {
		const person = <Person personId={this.state.personId}/>;
		const list = (<List
			onPersonSelected={this.onPersonSelected}
			getListData={Swapi.getAllPeople}
			renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}
		/>);
		
		
		if(this.state.hasError) {
			return <ErrorIndicator/>
		}
		
		return (
			<Row left={list} right={person}/>
		)
	}
}
