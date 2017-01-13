/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-unused-vars */

import React from 'react';
import	{connect}	from	'react-redux';

class List extends React.Component {
  onLoadList() {
    console.log('hello');
  }
  render() {
    return (
      <section className="layout--list">
        <button onClick={this.onLoadList}>Load list</button>
        <nav>
          List
          <ul>
          </ul>
        </nav>
      </section>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(List);
