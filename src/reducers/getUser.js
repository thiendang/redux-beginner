import {
    GET_USER,
    DELETE_USER
} from '../constants/getUser';

import {
    CREATE_USER,
} from '../constants/createUser';

const initialState = {
    list: []
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                list: action.response
            }
        case CREATE_USER:
            return {
                ...state,
                list: [action.response, ...state.list]
            }
        case DELETE_USER:
            return {
                ...state,
                list: state.list.filter(user => user.id !== action.id)
            }
        default:
            return state;
    }
}