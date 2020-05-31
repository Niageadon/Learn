import React from 'react'
import { BookStoreServiceConsumer } from '../bookStoreContext/index'
const WithBookStoreService = () => (Wrapped) => {
	return (props) => {
		return (
			<BookStoreServiceConsumer>
			{
				(bookStoreService) => (
					<Wrapped
						{...props}
						bookStoreService={bookStoreService}/>)
			}
			</BookStoreServiceConsumer>
		
		);
	}
}
export default WithBookStoreService
