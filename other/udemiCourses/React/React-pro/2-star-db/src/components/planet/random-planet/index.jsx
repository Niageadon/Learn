import React from 'react'
import './index.scss'
import Swapi from '../../../services/Swapi'
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
	
	getPlanet() {
		const planetId = Math.ceil(Math.random() * 19);
		Swapi.getPlanet(planetId)
			.then(planet => {
				this.setState({
					planetId,
					name: planet.name,
					population: planet.population,
					rotationPeriod: planet.rotation_period,
					diameter: planet.diameter
				})
				console.log(this.state)
			})
	}
	
	render() {
		//this.getPlanet()
		const {name, population, rotationPeriod, diameter} = this.state
		
		
		return(
			<div className="random-planet-wrapper bg-dark">
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
