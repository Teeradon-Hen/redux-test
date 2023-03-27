import { combineReducers } from 'redux'
import test from './test'
import todo from './todo'
// import {co} from '@reduxjs/toolkit'
const rootReducer = combineReducers({
    test,
    todo
})
export default rootReducer