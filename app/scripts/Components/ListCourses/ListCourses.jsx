/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-unused-vars */

import React from 'react';
import {connect}	from	'react-redux';
import Course from '../Course/Course';

export default class ListCourses extends React.Component {
  render() {
    return (
      <section className="container--list">
        <ul className="list-courses" >
          <Course />
          <Course />
          <Course />
          <Course />
        </ul>
      </section>
    );
  }
}
