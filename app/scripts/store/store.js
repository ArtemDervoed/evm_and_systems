/* eslint linebreak-style: ["error", "windows"] */

import {applyMiddleware, createStore} from 'redux';
import {index} from './../reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const middleware = applyMiddleware(thunk, logger());
export const store = createStore(index, middleware);

store.subscribe(() => {
  console.log("changed", store.getState());
});
