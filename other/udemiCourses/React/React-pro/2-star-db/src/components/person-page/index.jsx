import React from 'react'
import List from '../list'
import Person from '../person-page/person'
import ErrorIndicator from '../error/index'
import Swapi from '../../services/Swapi'


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
		if(this.state.hasError) {
			return <ErrorIndicator/>
		}
		
		return (
			<div className='row'>
				<List
					onPersonSelected={this.onPersonSelected}
					getListData={Swapi.getAllPeople}
					renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}
				/>
				<Person personId={this.state.personId}/>
			</div>
		)
	}
}
