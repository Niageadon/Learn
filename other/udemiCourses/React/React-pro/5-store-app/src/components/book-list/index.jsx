import React from 'react'
import BookListItem from './item'
import './index.scss'

const BookList = ({books}) => {
	return (
		<ul>{books.map(book => <li> <BookListItem book={book}/> </li>)}</ul>
	)
}

export default BookList
