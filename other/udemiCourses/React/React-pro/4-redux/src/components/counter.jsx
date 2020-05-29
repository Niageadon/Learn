import React from 'react'
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

export default connect(mapStateToProps)(Counter)
