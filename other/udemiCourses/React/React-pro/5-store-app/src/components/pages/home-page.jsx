import React from 'react'
import BookList from '../book-list'
import BooksCard from '../shopping-card/books-table/index'

const HomePage = () => {
	return (
		<React.Fragment>
			<BookList/>
			<BooksCard/>
		</React.Fragment>
	)
}

export default HomePage
