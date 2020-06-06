import React, {useEffect} from 'react'
import BookListItem from './item'
import './index.scss'
import WithBookStoreService from '../hoc/with-bookStore-service'
import {connect} from 'react-redux'
import compose from '../../utils'
import {booksLoaded, booksRequested,booksError} from '../../store/actions/index'
import ErrorIndicator from '../error-boundary/error-indicator'

const BookList = (props) => {
	useEffect( () => {
		const {fetchBooks} = props;
		
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
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		booksLoaded,
		booksRequested,
		booksError,
		fetchBooks: () => {
			const {bookStoreService} = ownProps;
			dispatch(booksRequested());
			bookStoreService.getBooks()
				.then(data => {
					dispatch(booksLoaded(data));
				})
				.catch(e => {
					dispatch(booksError(e))
				})
		}
	}
}

export default compose(
	WithBookStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList)
//export default WithBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))
