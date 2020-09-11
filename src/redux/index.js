import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const initState = {};

let echancer = applyMiddleware(thunk)
if(process.env.NODE_ENV === 'development'){
    echancer = !window.devToolsExtension ? applyMiddleware(thunk, createLogger()) : compose(
        applyMiddleware(thunk, createLogger()),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}

let store = createStore(
    rootReducer,
    initState,
    echancer
)

export default store;