/* eslint-disable no-unused-vars */
/* eslint linebreak-style: ["error", "windows"] */
import 'styles/index.sass';
import {render} from 'react-dom';
import React from 'react';
import Layout from './Components/Layout/Layout';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {store} from './store/store';

export default class Application {
  start() {
    render(
      <Provider store={store}>
        <Layout className="layout" />
      </Provider>
      , document.getElementById('app'));
  }
}
