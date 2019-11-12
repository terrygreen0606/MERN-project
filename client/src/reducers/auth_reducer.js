import { user_loading, user_loaded, login_success, register_success, auth_error, login_fail, logout_success, register_fail } from "../actions/actions";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case user_loading:
            return {
                ...state,
                isLoading: true
            }

        case user_loaded:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }

        case login_success:
        case register_success:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }

        case auth_error:
        case login_fail:
        case logout_success:
        case register_fail:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }

        default:
            return state
    }
}