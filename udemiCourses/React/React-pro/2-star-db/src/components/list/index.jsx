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
		const {onPersonSelected, renderItem} = this.props
		const {list} = this.state;
		if(!list) {
			return <Preloader/>
		}
		
		const items = list.map((item) => {
			return (
				<li onClick={() => onPersonSelected(item.id)} className="list-group-item" key={item.id}>{renderItem(item)}</li>
			)
		})
		
		return(
			<ul className="item-list list-group list">
				{items}
			</ul>
		)
	}
}
