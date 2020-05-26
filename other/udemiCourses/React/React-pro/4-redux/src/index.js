import { createStore } from 'redux'

const initState = 0;
const reducer = (state = 0, action) => {
    switch(action?.type) {
        case 'inc': {
            return state + 1
        }
        case 'dec': {
            return state - 1
        }
        default: {
            return state
        }
    }
}

let state = reducer(initState, {type: 'inc'})
const inc = () => { type: 'inc' };
const dec = () => { type: 'dec' };


const store = createStore(reducer);
document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc())
})
document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec())
})
const update = () => {
    document.getElementById('counter').innerHTML = store.getState()
}
store.subscribe(() => update())
store.dispatch({type: 'inc'});
store.dispatch({type: 'inc'});

