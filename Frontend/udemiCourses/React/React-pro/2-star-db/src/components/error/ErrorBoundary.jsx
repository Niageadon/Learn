import React from 'react'
import './index.scss'
import ErrorIndicator from "./index";
export default class ErrorBoundary extends React.Component{
	state = {
		error: false
	}
	componentDidCatch() {
		this.setState({error: true})
	}
	render() {
		if(this.state.error) {
			return <ErrorIndicator/>
		}
		return this.props.children
	}
}
