const islogged = (state = false, action) => {
    switch (action.type) {
        case "LOG_STATUS":
            return !state
        default:
            return state;
    }
}

export default islogged