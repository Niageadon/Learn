import React from 'react'
import './index.scss'
import {connect} from 'react-redux'
const ShoppingBooksTable = ({items, total, onInc, onDec, onDelete}) => {
	const tableRow = (item, index) => {
		const {id, title, count, total} = item;
		return(
			<tr key={index}>
				<td>{index}</td>
				<td>{title}</td>
				<td>{count}</td>
				<td>{total}</td>
				<td>
					<button onClick={() => onInc(id)}>deq</button>
					<button onClick={() => onDec(id)}>inc</button>
					<button onClick={() => onDelete(id)}>del</button>
				</td>
			</tr>
		)
	}
	
	return (
		<div className="shopping-card">
			<h3>Order:</h3>
			<table className="table">
				<thead/>
				<tbody>
					{items.map(tableRow)}
				</tbody>
			</table>
		</div>
	)
}

const mapStateToProps = ({cardItems, orderTotal}) => {
	return {
		items: cardItems,
		total: orderTotal
	}
}
const mapDispatchToProps = () => {
	return {
		onInc: () => {console.log('inc')},
		onDec: () => {console.log('dec')},
		onDelete: () => {console.log('del')},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBooksTable)
