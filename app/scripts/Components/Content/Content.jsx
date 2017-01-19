/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-unused-vars */

import React from 'react';
import {connect}	from	'react-redux';
import Category from '../Category/Category';

export default class Content extends React.Component {
  render() {
    return (
      <main className="content">
        <Category />
        <Category />
        <Category />
        <Category />
      </main>
    );
  }
}
