/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable no-unused-vars */

import React from 'react';
import	{connect}	from	'react-redux';

class Images extends React.Component {
  render() {
    return (
      <section className="layout--images">
        Images
      </section>
    );
  }
}

const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Images);
