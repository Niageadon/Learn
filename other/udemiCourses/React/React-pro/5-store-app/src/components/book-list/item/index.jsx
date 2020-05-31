import React from 'react'
import './index.scss'

const BookListItem = ({ book }) => {
	const {title, autor} = book;
	return (
		<React.Fragment>
			<span>title: {title}</span>
			<span>autor: {autor}</span>
		</React.Fragment>
	)
}

export default BookListItem
