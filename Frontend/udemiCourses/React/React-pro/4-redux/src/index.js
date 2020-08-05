import React from 'react'
import { Provider } from 'react-redux'
import App from './components/app'
import {render} from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'
import {inc, dec} from './actions'

const store = createStore(reducer);
/*const { dispatch } = store
const {incDispatch, decDispatch} = bindActionCreators({
    incDispatch: inc,
    decDispatch: dec
}, dispatch);*/


/*document.getElementById('inc').addEventListener('click',() => console.log(incDispatch));
document.getElementById('dec').addEventListener('click', decDispatch);*/

//const update = () => {
    //document.getElementById('counter').innerHTML = store.getState()
   //}
//store.subscribe(() => update())
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

/* <Counter
    counter={store.getState()}
    inc={incDispatch}
    dec={decDispatch}
    />*/
