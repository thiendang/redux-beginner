import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';

import App from './components/App';
import Main from './components/Main';

import 'babel-polyfill';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={App}/>
                <Route path="*" onEnter={() => browserHistory.push("/")}/>
            </Route>
        </Router>
    </Provider>, document.getElementById('root')
);
 