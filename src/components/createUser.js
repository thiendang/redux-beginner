import React, { Component } from 'react';
import { createUsers } from '../actions/createUser';
class CreateUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        const data = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.dispatch(createUsers(data));
        this.setState({
            title: "",
            body: ""
        })
    }
    render() {
        return (
            <div>
                <h1>Create User</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title</label><br/>
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
                    </div>
                    <br/>
                    <div>
                        <label>Body</label><br/>
                        <textarea type="text" name="body" value={this.state.body} onChange={this.onChange} />
                    </div>  
                    <br/>
                    <button type="submit">Submit</button>              
                </form>
            </div>
        );
    }
}

export default CreateUser;