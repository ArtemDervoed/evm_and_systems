/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-unused-vars */

import React from 'react';
import {connect}	from	'react-redux';
import Header from '../Header/Header';
import ListCourses from '../ListCourses/ListCourses';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

export default class Layout extends React.Component {

  render() {
    return (
      <section >
        <Header />
        <ListCourses />
        <Footer />
      </section>
    );
  }
}
