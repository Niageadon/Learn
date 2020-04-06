import React from 'react'
import Header from '../header'
import List from '../list'
import Person from '../person'
import Planet from '../planet'
import Starship from '../starship'
import RandomPlanet from '../planet/random-planet'
import './index.scss'

export default class App extends React.Component{
	state = {
		item: null
	}
	onItemSelected(item) {
		console.log(item)
		this.setState({item})
	}
	
	
	render() {
		return (
			<div className="app">
				<Header/>
				<RandomPlanet/>
				<List onItemSelected={this.onItemSelected}/>
			</div>
		)
	}
}
