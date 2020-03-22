import React from 'react'
import Item from './item'


const Index = ({ list }) => {
	const elements = list.map(el => {
		return (
			<li>
				<Item {...el}/>
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
