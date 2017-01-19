/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-unused-vars */

import React from 'react';
import {connect}	from	'react-redux';
import logo from 'images/sketchapp.png';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header--row">
          <span className="row--logo-name">Black&White</span>
          <div className="row--controll">
            <div className="row--controll-button">about</div>
            <div className="row--controll-button">Login</div>
          </div>
        </div>
        <div className="header--description">
        <div className="description--logos">
          <img src={logo} className="logos--img"/>
        </div>
          <article className="description--article">
            <h1>Learn anything and anyherny</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.</p>
          </article>
        </div>
      </header>
    );
  }
}
