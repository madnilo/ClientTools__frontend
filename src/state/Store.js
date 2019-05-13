import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {
    partsReducer,
    partDetailsReducer,
} from './general/reducers'

export const Store = createStore(
    combineReducers({
        parts: partsReducer,
        partDetails: partDetailsReducer,
    }),
    applyMiddleware(thunkMiddleware)
)
