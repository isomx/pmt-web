import { applyMiddleware, createStore } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import reducers from './reducers/Index';
import thunk from 'redux-thunk';

// import {createLogger} from 'redux-logger';


export const history = createBrowserHistory();

/**
 const error = store => next => (action) => {
    try {
        next(action);
    } catch (e) {
        console.log('AHHHH!!!', e);
    }
};
 **/
const middleware = applyMiddleware(thunk, routerMiddleware(history));

// const middleware = applyMiddleware(thunk, error, routerMiddleware(history));
// const middleware = applyMiddleware(thunk, createLogger(), error, routerMiddleware(history));
export default createStore(reducers, middleware);