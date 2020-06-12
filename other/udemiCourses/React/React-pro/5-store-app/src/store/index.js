import {createStore, compose, applyMiddleware} from 'redux'
import reducer from './reducers'

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

const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware))//compose(stringEnhancer, logEnhancer))
export default store
