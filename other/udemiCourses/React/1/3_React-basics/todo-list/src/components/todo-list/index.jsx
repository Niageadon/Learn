import React from 'react'
import Item from './item'
import './index.scss'

const Index = ({ list }) => {
	const elements = list.map(el => {
		const { id, ...props } = el
		return (
			<li key={el.id} className="list-group-item">
				<Item {...props}/>
			</li>
		)
	})
	
	return (
		<div className="todoList-container">
			<ul className="todoList col-sm-4 col">
				{elements}
			</ul>
		</div>
	);
};

export default Index
