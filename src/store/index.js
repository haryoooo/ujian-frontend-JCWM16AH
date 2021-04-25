import cartReducer from './reducers/cartReducer'
import productReducer from './reducers/productReducer'
import historiesReducer from './reducers/historiesReducer'
import userReducer from './reducers/userReducer'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

const reducers = combineReducers({cartReducer, productReducer, historiesReducer, userReducer})
const store = createStore(reducers,applyMiddleware(thunk))

export default store;