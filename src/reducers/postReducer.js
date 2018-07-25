

const initialState = {
    items: [],
    item: {}
}

export default function post(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}