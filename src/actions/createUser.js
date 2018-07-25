import {
    CREATE_USER
} from '../constants/createUser';

export function createUsers(data) {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(response => dispatch({
            type: CREATE_USER,
            response
        }));
    }
}