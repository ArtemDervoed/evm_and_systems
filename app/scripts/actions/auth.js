/* eslint-disable no-unused-vars */
import fetch from 'isomorphic-fetch';
import {push} from 'react-router-redux';
import {browserHistory} from 'react-router';
import * as token from 'util/Token';
const domen = 'https://serene-hamlet-19929.herokuapp.com';

export const logout = () => dispatch => {
  token.remove();
  dispatch({
    type: 'LOGOUT',
    isAuthenticated: false,
  });
  browserHistory.push('/');
};
export const checkLogin = () => dispatch => {
  dispatch({
    type: 'LOGOUT',
    isAuthenticated: token.isAuthenticated(),
  });
};
export const login = response => dispatch => {
  const data = JSON.stringify({
    role: response.role,
    email: response.email,
    password: response.password,
  });
  return fetch(`${domen}/api/login`, {
    method: 'post',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: data,
  })
  .then(response => response.json())
  .then(json => {
    token.add(json);
    dispatch({
      type: 'LOGIN',
      isAuthenticated: token.isAuthenticated(),
    });
    browserHistory.push('/subjects');
  });
};
