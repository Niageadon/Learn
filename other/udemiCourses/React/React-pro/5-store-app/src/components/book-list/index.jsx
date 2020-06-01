import React from 'react'
import BookListItem from './item'
import './index.scss'
import {connect} from 'react-redux'

const BookList = ({books}) => {
	return (
		<ul>{books.map(book => <li key={book.id}> <BookListItem  book={book}/> </li>)}</ul>
	)
}

const mapStateToProps = (state) => {
	return {
		books: state.books
	}
}
export default connect(mapStateToProps)(BookList)
