import { get_errors, clear_errors } from "../actions/actions";

const initialState = {
    msg: {},
    status: null,
    id: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case get_errors:
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            }

        case clear_errors:
            return {
                msg: {},
                status: null,
                id: null
            }

        default: 
            return state
    }
}