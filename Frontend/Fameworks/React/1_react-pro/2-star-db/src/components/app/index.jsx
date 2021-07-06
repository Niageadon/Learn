import React from 'react'
import Header from '../header'
import List from '../list'
import Person from '../person-page/person'
import Planet from '../planet'
import Starship from '../starship'
import RandomPlanet from '../planet/random-planet'
import ErrorIndicator from '../error/index'
import PersonPage from '../person-page/index'
import ErrorBoundary from '../error/ErrorBoundary'
import Row from '../Row'
import ItemDetail from '../item-details'
import Swapi from '../../services/Swapi'
import './index.scss'

export default class App extends React.Component{
	state = {
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
		
		const left = (
			<ItemDetail itemId={2} fetch={Swapi.getStarship} imageUrl={Swapi.getStarshipImgUrl(2)}/>
		)
		const right = (
			<ItemDetail itemId={2} fetch={Swapi.getPerson} imageUrl={Swapi.getPersonImgUrl(2)}/>
		)
		return (
			<ErrorBoundary>
					<div className="app">
						<Header/>
						<RandomPlanet/>
						<PersonPage/>
						
						<Row left={left} right={right}>
						</Row>
						{/*<div className="row">
							<List onItemSelected={this.onItemSelected}/>
							<Person personId={this.state.itemId}/>
ы						</div>*/}
					</div>
			</ErrorBoundary>
		)
	}
}
