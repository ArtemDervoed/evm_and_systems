/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-unused-vars */

import React from 'react';
import {connect}	from	'react-redux';
import List from './List/List';
import Images from './Images/Images';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <List/>
        <Images />
      </div>
    );
  }
}
