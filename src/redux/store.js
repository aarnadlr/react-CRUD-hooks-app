import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import {usersReducer} from './reducers/usersReducer';

const initialState = {};

const middleware = [thunk];

const rootReducer = combineReducers({
	users: usersReducer
})

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
