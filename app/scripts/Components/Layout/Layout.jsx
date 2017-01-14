/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-unused-vars */

import React from 'react';
import {connect}	from	'react-redux';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import './Layout.sass';

export default class Layout extends React.Component {
  render() {
    return (
      <section className="layout">
        <Header />
        <Content />
        <Footer />
      </section>
    );
  }
}
