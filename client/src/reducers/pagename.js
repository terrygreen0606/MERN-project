const pagename = (state = '', action) => {
    switch (action.type) {
        case "ELEMENTS":
            return 'elements'
        case "BLOGS":
            return 'blogs'
        case "FAQ":
            return 'faq'
        case "CONTACT":
            return 'contact'
        default:
            return state;
    }
}

export default pagename