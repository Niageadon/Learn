import React from 'react'
import './index.scss'
import Swapi from '../../../services/Swapi'
import Preloader from '../../preloader'
export default class RandomPlanet extends React.Component{

	
	state = {
		planetId: null,
		name: null,
		population: null,
		rotationPeriod: null,
		diameter: null
	}
	constructor() {
		super();
		this.getPlanet()
	}
	
	onPlanetLoaded(planet, planetId) {
		console.log(planet)
		this.setState({planetId, ...planet})
	}
	getPlanet() {
		const planetId = Math.ceil(Math.random() * 19);
		//this.setState({planetId})
		Swapi.getPlanet(planetId)
			.then(planet => {
				this.onPlanetLoaded(planet, planetId)
			})
	}
	
	render() {
		//this.getPlanet()
		const {name, population, rotationPeriod, diameter} = this.state
		
		
		return(
			<div className="random-planet-wrapper bg-dark">
				<Preloader/>
				<img src={`https://starwars-visualguide.com/assets/img/planets/${this.state.planetId}.jpg`}/>
				<div className="random-planet-info">
					<h3>{name || 'Planet name'}</h3>
					<ul>
						<li className="random-planet-info-label">
							<span>Planet population:</span>
							<span>{population}</span>
						</li>
						<li className="random-planet-info-label">
							<span>Planet rotation period:</span>
							<span>{rotationPeriod}</span>
						</li>
						<li className="random-planet-info-label">
							<span>Planet diameter:</span>
							<span>{diameter}</span>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
