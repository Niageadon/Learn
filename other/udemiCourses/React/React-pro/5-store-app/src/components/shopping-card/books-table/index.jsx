import React from 'react'
import './index.scss'
import {connect} from 'react-redux'
import {booksRemovedFromCard, bookRemovedFromCard, bookAddedToCard} from '../../../store/actions'
const ShoppingBooksTable = ({items, total, onInc, onDec, onDelete}) => {
	const tableRow = (item, index) => {
		const {id, title, count, total} = item;
		return(
			<tr key={index}>
				<td>{id}</td>
				<td>{title}</td>
				<td>{count}</td>
				<td>{total}</td>
				<td>
					<button onClick={() => onInc(id)}>inc</button>
					<button onClick={() => onDec(id)}>dec</button>
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
					<tr>
						<td>id</td>
						<td>title</td>
						<td>count</td>
						<td>total</td>
						<td>actions</td>
					</tr>
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
const mapDispatchToProps = (dispatch) => {
	return {
		onDelete: id => dispatch(booksRemovedFromCard(id)),
		onDec: id => dispatch(bookRemovedFromCard(id)),
		onInc: id => dispatch(bookAddedToCard(id)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBooksTable)
