import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import sneaker from './releaseInfo'

const reducer = combineReducers({
    sneaker,
})
const store = configureStore({
    reducer,
})
export default store;