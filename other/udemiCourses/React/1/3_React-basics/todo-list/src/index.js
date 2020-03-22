import React from 'react';
import { render } from 'react-dom';

const elem =
	<div>
		<input placeholder="search"/>
		<ul>
			<li>Learn React</li>
			<li>bib  </li>
		</ul>
	</div>
	
render(elem, document.getElementById('root'))
