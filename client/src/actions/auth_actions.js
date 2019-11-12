import axios from 'axios'
import { user_loading, user_loaded, login_success, register_success, auth_error, login_fail, logout_success, register_fail } from "../actions/actions";
import {returnErrors} from './error_actions'


// Check token and load user
export const loadUser = () => (dispatch, getState) => {

    // User Loading
    dispatch({ type: user_loading })

    axios.get('/auth/user', tokenConfig(getState))
        .then(res => dispatch({
            type: user_loaded,
            payload: res.data
        }))

        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: auth_error
            })
        })
}

// Register User
export const register = ({first_name, last_name, username, email, password}) => dispatch => {
    
    // Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    // Request Body
    const body = JSON.stringify({ first_name, last_name, username, email, password })

    axios.post('/users', body, config)
        .then(res => dispatch({
            type: register_success,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAILED'))
            dispatch({
                type: register_fail
            })
        })
}

//Setup config/headers and token
export const tokenConfig = getState => {
    // Get token from localstorage
    const token = getState().auth.token

    // Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    // If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token
    }

    return config
}