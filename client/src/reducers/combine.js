import {combineReducers} from 'redux'
// import all reducers here
import islogged from './islogged'
import pagename from './pagename'
import auth_reducer from './auth_reducer'
import error_reducer from './error_reducer'

const allReducers = combineReducers({
    // imported reducers
    islogged: islogged,
    pagename: pagename,
    auth: auth_reducer,
    error: error_reducer
})

export default allReducers