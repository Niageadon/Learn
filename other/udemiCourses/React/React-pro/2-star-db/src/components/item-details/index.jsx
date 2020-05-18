import React from 'react'
import './index.scss'
import ErrorBoundary from '../error/ErrorBoundary'

export default class ItemDetail extends React.Component{
	state = {
		item: null,
		image: null
	}
	componentDidMount() {
		this.loadDetail()
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		if(prevProps.itemId !== this.props.itemId) {
			this.loadDetail();
		}
	}
	
	loadDetail() {
		const { itemId, fetch, } = this.props;
		if(!itemId) {
			return
		}
		fetch(itemId).then(item => this.setState({ item }))
	}
	
	render() {
		console.log(this.state)
		const { itemId, imageUrl } = this.props;
		
		const {item} = this.state;
		if (!item) {
			return <div className="person card">Select person from list</div>
		}
		const {name, ...details} = item;
		
		const list = Object.keys(details).map(key =>
			<li>
				{key}: {details[key]}
			</li>
		)
		
		
		return (
			<div className="item-details_container card">
				<div className="item-details__avatar">
					<ErrorBoundary>
						<img className="person__avatar" src={imageUrl}/>
					</ErrorBoundary>
				
				</div>
				<div className="item-details">
					<h3>{name}</h3>
					<ul>
						{list}
					</ul>
				</div>
			</div>
		)
	}
}
