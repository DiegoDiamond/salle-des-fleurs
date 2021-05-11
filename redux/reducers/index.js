import { combineReducers } from 'redux'
import sortReducer from './sortReducer'
import searchReducer from './searchReducer'
import modalReducer from './modalReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    sort: sortReducer,
    search: searchReducer,
    modal: modalReducer,
    cart: cartReducer,
})

export default rootReducer
