import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'

import combine from './reducers/combine';

const initialState = {}

const middleware = [thunk]

const store = createStore(
    combine,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store