import React from 'react'
import Preloader from '../preloader'
import './index.scss'
export default class List extends React.Component{

	state = {
		list: null,
		type: null
	}
	
	
	componentDidMount() {
		const { getListData } = this.props;
		getListData()
			.then(list => {
				this.setState({list})
			})
	}
	
	render() {
		const {onPersonSelected} = this.props
		const {list} = this.state;
		if(!list) {
			return <Preloader/>
		}
		
		const items = list.map(({name, id}) => {
			return (
				<li onClick={() => onPersonSelected(id)} className="list-group-item" key={id}>{name}</li>
			)
		})
		
		return(
			<ul className="item-list list-group list">
				{items}
			</ul>
		)
	}
}
