/* eslint-disable no-unused-vars */
import {applyMiddleware, createStore} from 'redux';
import combineReducers from './../reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {syncHistoryWithStore} from 'react-router-redux';

export const middleware = applyMiddleware(thunk, logger());
export const store = createStore(combineReducers, middleware);
