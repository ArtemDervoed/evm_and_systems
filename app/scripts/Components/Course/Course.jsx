/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-unused-vars */

import React from 'react';
import {connect}	from	'react-redux';
import bg from './bg.jpg';

export default class Course extends React.Component {
  render() {
    return (
      <div className="course">
        <div className="course--description">
          <img className="description--logo" src={bg} alt="logo"/>
          <article className="description--info">
            <h2>Header</h2>
            <p>Description Description Description Description</p>
          </article>
        </div>
        <button className="course--button" >Try it</button>
      </div>
    );
  }
}
