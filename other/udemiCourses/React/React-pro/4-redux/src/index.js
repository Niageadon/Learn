import { createStore } from 'redux'
import reducer from './reducer'
import {inc, dec} from './actions'
const initState = 0;

let state = reducer(initState, {type: 'inc'})


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

