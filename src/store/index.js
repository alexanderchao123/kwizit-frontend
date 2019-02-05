import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/RootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
