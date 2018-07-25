import { FETCH_POST, NEW_POST } from '../constants/getUser';

export const createPost = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(post => dispatch({
            type: FETCH_POST,
            payload: posts
        }));
}
