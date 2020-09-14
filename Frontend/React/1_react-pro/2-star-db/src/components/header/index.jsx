import React from 'react'
import './index.scss'
export default class Header extends React.Component {
	
	
	render() {
		const nav = [
			{type: 'Persons', link: '/persons'},
			{type: 'Planets', link: '/planets'},
			{type: 'Starships', link: '/starships'},
		]
		const list = nav.map(({type, link}) => {
			return (
				<li key={type}>
					<a href={link}>{type}</a>
				</li>
			)
		})
		return (
			<nav className="header navbar navbar-expand-lg">
				<ul> {list} </ul>
			</nav>
		)
	}
}
