import React from 'react'
import Swapi from '../../services/Swapi'
import Preloader from '../preloader'
import './index.scss'
export default class List extends React.Component{

	state = {
		list: null,
		type: null
	}
	
	componentDidMount() {
		Swapi.getAllPeople()
			.then(list => {
				this.setState({list})
			})
	}
	
	render() {
		const {onItemSelected} = this.props
		const {list} = this.state;
		if(!list) {
			return <Preloader/>
		}
		
		const items = list.map(({name, id}) => {
			return (
				<li onClick={() => onItemSelected()} className="list-group-item" key={id}>{name}</li>
			)
		})
		
		return(
			<ul className="item-list list-group list">
				{items}
			</ul>
		)
	}
}
