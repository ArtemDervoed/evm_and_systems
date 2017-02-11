/* eslint-disable no-unused-vars */
/* eslint linebreak-style: ["error", "windows"] */
import 'styles/index.sass';
import {render} from 'react-dom';
import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import Main from 'pages/Main/Main';
import Login from 'pages/Login/Login';
import Registration from 'pages/Registration/Registration';
import Subjects from 'pages/Subjects/Subjects';
import User from 'pages/User/User';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {store} from './store/store';

const history = syncHistoryWithStore(browserHistory, store);

export default class Application {
  start() {
    render(
      <Provider store= {store}>
        <Router history={history}>
         <Route path="/" component={Main} />
         <Route path="/login" component={Login} />
         <Route path="/user" component={User} />
         <Route path="/registration" component={Registration} />
         <Route path="/subjects" component={Subjects} />
        </Router>
      </Provider>
      , document.getElementById('app'));
  }
}
