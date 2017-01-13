/* eslint linebreak-style: ["error", "windows"] */

import {applyMiddleware, createStore} from 'redux';
import {list} from './../reducers/list';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const middleware = applyMiddleware(thunk, logger());
export const store = createStore(list, middleware);

store.subscribe(() => {
  console.log("changed", store.getState());
});
