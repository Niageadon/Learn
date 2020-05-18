import React from 'react'
import List from '../list'
import Person from '../person-page/person'
import ErrorIndicator from '../error/index'
import ErrorBoundary from '../error/ErrorBoundary'
import Swapi from '../../services/Swapi'
import Row from '../Row'




export default class App extends React.Component{
	state = {
		personId: null,
	}

	onPersonSelected = (personId) => {
		this.setState({personId})
	}
	
	render() {
		const person = (
			<ErrorBoundary>
				<Person personId={this.state.personId}/>
			</ErrorBoundary>
		)
		const list = (
			<ErrorBoundary>
				<List
				onPersonSelected={this.onPersonSelected}
				getListData={Swapi.getAllPeople}
				renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}
				/>
			</ErrorBoundary>
		);

		return (
			<Row left={list} right={person}/>
		)
	}
}
