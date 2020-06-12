import {createStore, compose, applyMiddleware} from 'redux'
import reducer from './reducers'
import thunkMidleware from 'redux-thunk'

const logMiddleware = (store) => (dispatch) => (action) => {
	console.log(action);
	return dispatch(action);
}
const stringMiddleware = (store) => (dispatch) => (action) => {
	if(typeof action === 'string') {
		return dispatch({type: action})
	}
	return dispatch(action)
}

const stringEnhancer = (createStore) => (...args) => {
	const store = createStore(...args);
	const originalDispatch = store.dispatch;
	store.dispatch = (action) => {
		if(typeof action === 'string') {
			return originalDispatch({type: action});
		}
		return originalDispatch(action);
	}
	
	return store
}
const logEnhancer = (createStore) => (...args) => {
	const store = createStore(...args);
	const originalDispatch = store.dispatch;
	store.dispatch = (action) => {
		console.log(action)
		return originalDispatch(action);
	}
	
	return store
}

const store = createStore(reducer, applyMiddleware(thunkMidleware, stringMiddleware, logMiddleware))//compose(stringEnhancer, logEnhancer))

const myAction = (dispatch) => {
	setTimeout(() => {
		return dispatch({type: 'MY_ACTION'})
	}, 500)
}
const delayedActionCreator = (delay) => (dispatch) => {
	setTimeout(() => dispatch({type: 'DELAYED_ACTION'}), delay)
}


store.dispatch(myAction)
store.dispatch(delayedActionCreator(501))
export default store
