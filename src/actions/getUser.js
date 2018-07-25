import {
    GET_USER,
    DELETE_USER
} from '../constants/getUser';

export function getUsers() {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(response => dispatch({
                type: GET_USER,
                response
            }));
    }
}
export function deleteUsers(id){
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(response => dispatch({
            type: DELETE_USER,
            response,
            id
        }))
    }
}