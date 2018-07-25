import React, { Component } from 'react';
import { getUsers, deleteUsers } from '../actions/getUser';
class GetAllUser extends Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        this.props.dispatch(getUsers());
    }
    onDelete = (id) => {console.log(id)
        this.props.dispatch(deleteUsers(id))
    }
    render() {console.log(this.props.user.list);
    
        const allUsers = !!this.props.user.list.length && this.props.user.list.map(user => (
            <div key={user.id}>
                <h3>{user.title}</h3>
                <p>{user.body}</p>
                <button onClick={id => this.onDelete(user.id)}>Delete</button>
            </div>
        ))
        return (
            <div>
                <h1>All Users</h1>
                {allUsers}
            </div>
        );
    }
}

export default GetAllUser;