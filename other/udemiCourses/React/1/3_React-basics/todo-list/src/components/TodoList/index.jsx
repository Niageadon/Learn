import React from 'react'
import Item from './item'

const Index = () => {
	const items = [
		'Learn React',
		'build apps',
		'get bibas'
	]
	
	return (
		<ul>
			<li>
				<Item content="biba"/>
			</li>
		</ul>
	);
};

export default Index
