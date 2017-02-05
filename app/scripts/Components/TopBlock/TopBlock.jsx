/* eslint-disable no-unused-vars */

import React from 'react';
import {connect}	from	'react-redux';

class TopBlock extends React.Component {
  componentDidMount() {
    if (this.props.login === true) {
      console.log('kek');
    }
  }
  render() {
    return (
      <section className="top-block">
        <article className="top-block--content">
          <h1>{this.props.header}</h1>
          <p>{this.props.description}</p>
        </article>
      </section>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(TopBlock);
