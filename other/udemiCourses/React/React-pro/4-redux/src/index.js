import { createStore } from 'redux'

const initState = 0;
const reducer = (state = 0, action) => {
    switch(action?.type) {
        case 'inc': {
            return state + 1
        }
        default: {
            return state
        }
    }
}

let state = reducer(initState, {type: 'inc'})


const store = createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch({type: 'inc'});
store.dispatch({type: 'inc'});

