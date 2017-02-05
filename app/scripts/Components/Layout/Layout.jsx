/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-unused-vars */

import React from 'react';
import {connect}	from	'react-redux';
import Header from '../Header/Header';
import ListCourses from '../ListCourses/ListCourses';
import Content from '../Content/Content';
import Info from '../Info/Info';
import Footer from '../Footer/Footer';

class Layout extends React.Component {
  render() {
    return (
      <section >
        <Header header="Лабораторная работа №1" text="Изучение микропрограммного режима работы"/>
        <ListCourses />
        <Info />
        <Footer />
      </section>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Layout);
