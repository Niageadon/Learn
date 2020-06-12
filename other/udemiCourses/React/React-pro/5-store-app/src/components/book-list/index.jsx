import React, {useEffect} from 'react'
import './index.scss'
import WithBookStoreService from '../hoc/with-bookStore-service'
import {connect} from 'react-redux'
import compose from '../../utils'
import {fetchBooks, bookAddedToCard, bookRemovedFromCard} from '../../store/actions/index'
import ErrorIndicator from '../error-boundary/error-indicator'
import BookListContainer from './book-list-container'

const BookList = (props) => {
	useEffect( () => {
		const {fetchBooks} = props;
		
		fetchBooks();
	}, [])
	
	const {loading, error, addToCard} = props;
	if(loading) {
		return <span>loading...</span>
	}
	if(error) {
		return <ErrorIndicator/>
	}
	
	return (
		<BookListContainer books={props.books} addToCard={addToCard}/>
	)
}

const mapStateToProps = ({bookList: {books, loading, error}}) => {
	return {
		books,
		loading,
		error
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	const {bookStoreService} = dispatch;
	return {
		fetchBooks: fetchBooks(ownProps?.bookStoreService, dispatch),
		addToCard: id => dispatch(bookAddedToCard(id)),
	}
}

export default compose(
	WithBookStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList)
//export default WithBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))
