import React, { Component } from 'react';
import GetAllUser from './getUser';
import CreateUser from './createUser';
class App extends Component {
  render() {
    return (
      <div>
        <CreateUser
          {...this.props}
        />
        <hr/>
        <GetAllUser
          {...this.props}
        />
      </div>
    );
  }
}

export default App;
