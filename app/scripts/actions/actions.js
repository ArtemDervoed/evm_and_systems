/* eslint-disable no-unused-vars */
import fetch from 'isomorphic-fetch';

export const fetchPosts = () => dispatch => {
  return fetch('https://polar-forest-21563.herokuapp.com/api/users', {
    method: 'Get',
  })
    .then(response => response.json())
    .then(json => dispatch({type: 'FETCH_STUDYS', payload: json}));
};

export const logoutUser = () => dispatch => {
  return fetch('https://polar-forest-21563.herokuapp.com/api/signout/', {
    method: 'DELETE',
    headers: "Current-Type",
  })
  .then(res => dispatch({type: 'LOGOUT', payload: true}))
  .catch(err => console.error(err));
};

// export const postPosts = () => dispatch => {
//   const url = '/';
//   const json = {};
//
//   return fetch(url, {
//     method: 'post',
//     headers: {
//       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//     },
//     body: 'foo=bar&lorem=ipsum',
//   })
//   .then(json)
//   .then(data => {
//     console.log('Request succeeded with JSON response', data);
//   })
//   .catch(error => {
//     console.log('Request failed', error);
//   });
// };
