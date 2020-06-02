import React, {useEffect} from 'react'
import BookListItem from './item'
import './index.scss'
import WithBookStoreService from '../hoc/with-bookStore-service'
import {connect} from 'react-redux'
import compose from '../../utils'

const BookList = (props) => {
	useEffect(() => {
		const {bookStoreService} = props;
		const data = bookStoreService.getBooks();
		props.booksLoaded(data);
		console.log(data)
	}, [])
	
	return (
		<ul>{props?.books.map(book => <li key={book.id}> <BookListItem  book={book}/> </li>)}</ul>
	)
}

const mapStateToProps = (state) => {
	return {
		books: state.books
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		booksLoaded: (newBooks) => dispatch({type: 'BOOKS_LOADED', payload: newBooks})
	}
}

export default compose(
	WithBookStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList)
//export default WithBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))
