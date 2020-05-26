const initState = 0;
const reducer = (state, action) => {
    if(action?.type === 'inc') {
        return state + 1
    }
    return 0
}

let state = reducer(initState, {type: 'inc'})
