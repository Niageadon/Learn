import React from 'react'
import {bindActionCreators} from 'redux'
import * as actions from '../actions'
import { connect } from 'react-redux'
const Counter = ({counter, inc, dec}) => {
    return (
        <div>
            <h2 id="counter">{counter}</h2>
            <button id="dec" onClick={dec}>-</button>
            <button id="inc" onClick={inc}>+</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
const mapDispatchToProps = (dispatch) => {
    const {inc, dec} = bindActionCreators(actions, dispatch);
    return {
        inc,//: () => dispatch({type: 'inc'}),
        dec//: () => dispatch({type: 'dec'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
