import React from 'react'
import Item from './item'


const Index = ({ list }) => {
	const elements = list.map(el => {
		const { id, ...props } = el
		return (
			<li key={el.id}>
				<Item {...props}/>
			</li>
		)
	})
	
	const items = [
		'Learn React',
		'build apps',
		'get bibas'
	]
	
	return (
		<ul>
			{elements}
		</ul>
	);
};

export default Index
