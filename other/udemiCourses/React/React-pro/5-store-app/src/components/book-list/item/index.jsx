import React from 'react'
import './index.scss'

const BookListItem = ({ book }) => {
	const {title, author} = book;
	return (
		<React.Fragment>
			<span>title: {title}</span>
			<span> author: {author}</span>
		</React.Fragment>
	)
}

export default BookListItem
