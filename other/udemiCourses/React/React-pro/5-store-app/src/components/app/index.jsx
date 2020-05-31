import React from 'react'
import './index.scss'
import WithBookStoreService from '../hoc/with-bookStore-service'
const App = ({bookStoreService}) => {
	console.log(bookStoreService.getBooks())
	return (
		<div>APP</div>
	)
}

export default WithBookStoreService()(App)
