import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(rootReducer);

// if (module.hot) {
// 	module.hot.accept('./reducers', () => {
// 		const nextReducer = require('./reducers/index').default;
// 		store.replaceReducer(nextReducer);
// 	});
// }

export default store; 