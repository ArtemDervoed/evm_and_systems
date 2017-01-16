/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-unused-vars */

import React from 'react';
import {connect}	from	'react-redux';
import './Header.sass';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <span className="header--logo-name">Black&White.inc</span>
        <button className="header--sing-in">Sing in</button>
      </header>
    );
  }
}
