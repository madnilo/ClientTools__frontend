import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {
    partsReducer,
} from './general/reducers'

export const Store = createStore(
    combineReducers({
        parts: partsReducer,
    }),
    applyMiddleware(thunkMiddleware)
)
