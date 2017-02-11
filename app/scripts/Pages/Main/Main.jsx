/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-unused-vars */

import React from 'react';
import {connect}	from	'react-redux';
import Header from 'components/Header/Header';
import TopBlock from 'components/TopBlock/TopBlock';
import Info from 'components/Info/Info';
import Footer from 'components/Footer/Footer';

class Main extends React.Component {
  render() {
    return (
      <section >
        <Header/>
        <TopBlock header="header" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
         ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
           sunt in culpa qui officia deserunt mollit anim id est laborum." />
        <Info />
        <Footer />
      </section>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Main);
