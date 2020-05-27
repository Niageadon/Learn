import { createStore, bindActionCreators } from 'redux'
import reducer from './reducer'
import {inc, dec} from './actions'

const store = createStore(reducer);
const { dispatch } = store
const {incDispatch, decDispatch} = bindActionCreators({
    incDispatch: inc,
    decDispatch: dec
}, dispatch);


document.getElementById('inc').addEventListener('click',() => console.log(incDispatch));
document.getElementById('dec').addEventListener('click', decDispatch);
const update = () => {
    document.getElementById('counter').innerHTML = store.getState()
}
store.subscribe(() => update())
store.dispatch({type: 'inc'});
store.dispatch({type: 'inc'});

