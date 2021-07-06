import React from 'react'
import './index.scss'
const {
	Provider: BookStoreServiceProvider,
	Consumer: BookStoreServiceConsumer
} = React.createContext();

export {
	BookStoreServiceConsumer,
	BookStoreServiceProvider
}
