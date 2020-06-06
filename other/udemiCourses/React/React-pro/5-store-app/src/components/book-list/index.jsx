import React, {useEffect} from 'react'
import BookListItem from './item'
import './index.scss'
import WithBookStoreService from '../hoc/with-bookStore-service'
import {connect} from 'react-redux'
import compose from '../../utils'

const BookList = (props) => {
	useEffect( () => {
		const fetchBooks = async () => {
			const {bookStoreService, booksLoaded} = props;
			const data = await bookStoreService.getBooks();
			booksLoaded(data);
		}
		fetchBooks();
	}, [])
	
	const {loading} = props;
	if(loading) {
		return <span>loading...</span>
	}
	
	return (
		
		<ul>{props?.books.map(book => <li key={book.id}> <BookListItem  book={book}/> </li>)}</ul>
	)
}

const mapStateToProps = ({books, loading}) => {
	return {
		books,
		loading
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
