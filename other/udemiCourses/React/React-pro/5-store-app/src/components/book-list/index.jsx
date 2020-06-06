import React, {useEffect} from 'react'
import BookListItem from './item'
import './index.scss'
import WithBookStoreService from '../hoc/with-bookStore-service'
import {connect} from 'react-redux'
import compose from '../../utils'
import ErrorIndicator from '../error-boundary/error-indicator'

const BookList = (props) => {
	useEffect( () => {
		const fetchBooks = async () => {
			const {bookStoreService, booksLoaded, booksRequested, booksError} = props;
			booksRequested();
			bookStoreService.getBooks()
				.then(data => {
					booksLoaded(data);
				})
				.catch(e => {
					booksError(e)
				})
		}
		
		fetchBooks();
	}, [])
	
	const {loading, error} = props;
	if(loading) {
		return <span>loading...</span>
	}
	if(error) {
		return <ErrorIndicator/>
	}
	
	return (
		
		<ul>{props?.books.map(book => <li key={book.id}> <BookListItem  book={book}/> </li>)}</ul>
	)
}

const mapStateToProps = ({books, loading, error}) => {
	return {
		books,
		loading,
		error
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		booksLoaded: (newBooks) => dispatch({type: 'BOOKS_LOADED', payload: newBooks}),
		booksRequested: () => dispatch({type: 'BOOKS_REQUESTED'}),
		booksError: (error) => dispatch({type: 'BOOKS_ERROR', payload: error})
	}
}

export default compose(
	WithBookStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList)
//export default WithBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))
