import React from 'react'
import BookListItem from './item'

const BookListContainer = (props) => {
	return (
		<ul>{props?.books.map(book => <li key={book.id}> <BookListItem  book={book}/> </li>)}</ul>
	)
}
export default BookListContainer
