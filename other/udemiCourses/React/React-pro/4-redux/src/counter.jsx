import React from 'react'
const Counter = ({counter, inc, dec}) => {
    return (
        <div>
            <h2 id="counter">{counter}</h2>
            <button id="dec" onClick={dec}>-</button>
            <button id="inc" onClick={inc}>+</button>
        </div>
    )
};

export default Counter
