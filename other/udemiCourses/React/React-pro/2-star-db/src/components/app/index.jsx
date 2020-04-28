import React from 'react'
import Header from '../header'
import List from '../list'
import Person from '../person'
import Planet from '../planet'
import Starship from '../starship'
import RandomPlanet from '../planet/random-planet'
import ErrorIndicator from '../error/index'
import './index.scss'

export default class App extends React.Component{
	state = {
		itemId: 1,
		error: false
	}
	
	componentDidCatch(error, errorInfo) {
		this.setState({error: true})
	}
	
	onItemSelected = (itemId) => {
		this.setState({itemId})
	}
	
	render() {
		if(this.state.error) {
			return <ErrorIndicator/>
		}
		
		return (
			<div className="app">
				<Header/>
				<RandomPlanet/>
				<div className="row">
					<List onItemSelected={this.onItemSelected}/>
					<Person personId={this.state.itemId}/>
				</div>
				
			</div>
		)
	}
}
