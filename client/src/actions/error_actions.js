import { get_errors, clear_errors } from "../actions/actions";

// Return errors
export const returnErrors = (msg, status, id = null) => {
    return {
        type: get_errors,
        payload: {
            msg: status, id
        }
    }
}

// Clear Errors
export const clearErrors = () => {
    return {
        type: clear_errors
    }
}