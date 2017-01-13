/* eslint-disable no-unused-vars */
/* eslint linebreak-style: ["error", "windows"] */
import 'styles/index.css';
import {render} from 'react-dom';
import React from 'react';
import Layout from './Components/Layout';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {store} from './store/store';

export default class Application {
  start() {
    render(
      <Provider store={store}>
        <Layout />
      </Provider>
      , document.getElementById('app'));
  }
}
