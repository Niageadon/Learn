import React from 'react'
import './index.scss'
import {CardPage, HomePage} from '../pages'
import {Route, Switch} from 'react-router-dom'
const App = () => {
	return (
		<Switch>
			<Route path="/" component={HomePage} exact/>
			<Route path="/card" component={CardPage} exact/>
		</Switch>
	)
}

export default App
