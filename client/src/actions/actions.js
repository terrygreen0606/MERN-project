export const log_status = () => {
    return {
        type: "LOG_STATUS"
    }
}

// Start Pages Actions
export const elements = () => {
    return {
        type: "ELEMENTS"
    }
}

export const blogs = () => {
    return {
        type: "BLOGS"
    }
}

export const faq = () => {
    return {
        type: "FAQ"
    }
}

export const contact = () => {
    return {
        type: "CONTACT"
    }
}
// End Pages Actions

// Start User Login, Register and Auth Actions
export const user_loading = "USER_LOADING"

export const user_loaded = "USER_LOADED"

export const auth_error = "AUTH_ERROR"

export const login_success = "LOGIN_SUCCESS"

export const login_fail = "LOGIN_FAIL"

export const logout_success = "LOGOUT_SUCCESS"

export const register_success = "REGISTER_SUCCESS"

export const register_fail = "REGISTER_FAIL"

export const get_errors = "GET_ERRORS"

export const clear_errors = "CLEAR_ERRORS"
// End User Login, Register and Auth Actions
