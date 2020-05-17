import React from 'react'
import swapi from '../../../services/Swapi'
import ItemDetails from '../../item-details/index'
import './index.scss'



export default class Person extends React.Component{
	
	state = {
		person: null,
	}
	
	componentDidMount() {
		this.updatePerson()
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if(prevProps.personId !== this.props.personId) {
			this.updatePerson();
		}
	}
	
	updatePerson() {
		const { personId } = this.props;
		if(!personId) {
			console.log(personId)
			return
		}
		swapi.getPerson(personId)
			.then(person => this.setState({person}))
	}
	
	render() {
		if (!this.state.person) {
			return <div className="person card">Select person from list</div>
		}
		const { id, name, gender, birthYear, eyeColor} = this.state.person;


		const left = <img className="person__avatar" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>;
		const right = (
			<div className="person__info">
				<h3>{name}</h3>
				<ul>
					<li className="person__info-label">
						<span>gender: {gender}</span>
					</li>
					<li className="person__info-label">
						<span>birthYear: {birthYear}</span>
					</li><li className="person__info-label">
					<span>eyeColor: {eyeColor}</span>
				</li>
				</ul>
			</div>
		)
		return(

			<ItemDetails left={left} right={right}>
			</ItemDetails>
		)
	}
}
