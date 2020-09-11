import { combineReducers } from 'redux';
import {testReducer} from './test'
import {anycActionReducer} from './anycReducer'

const rootReducer = combineReducers({
    testReducer,
    anycActionReducer
})

export default rootReducer;