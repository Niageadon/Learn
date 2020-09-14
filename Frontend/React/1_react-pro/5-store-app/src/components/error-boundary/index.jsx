import React from 'react'
import ErrorIndicator from './error-indicator'
import './index.scss'

export default class ErrorBoundary extends React.Component {
	
	state = {
		hasError: false
	}
	componentDidCatch(error, errorInfo) {
		this.setState({hasError: true})
	}
	
	render() {
		const {hasError} = this.state;
		if(hasError) {
			return <ErrorIndicator/>
		}
		return this.props.children
	}
}

