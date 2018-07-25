import React, { Component } from 'react';
import { connect } from 'react-redux';
class Main extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                {React.cloneElement(this.props.children, this.props)}    
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Main);       