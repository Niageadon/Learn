import React from 'react'
import Item from './item'
import './index.scss'

const Index = ({ list, onDelete }) => {
	const elements = list.map(el => {
		const { id, ...props } = el
		return (
			<li key={id} className="list-group-item">
				<Item
					{...props}
					onDelete={() => onDelete(id)}
				/>
			</li>
		)
	})
	
	return (
		<div className="todoList-container">
			<ul className="todoList col">
				{elements}
			</ul>
		</div>
	);
};

export default Index
