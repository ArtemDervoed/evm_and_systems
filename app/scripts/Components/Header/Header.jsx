/* eslint-disable no-unused-vars */

import React from 'react';
import {connect}	from	'react-redux';
import {Link} from 'react-router';
import {logoutUser} from 'actions/actions';
class Header extends React.Component {
  componentDidMount() {
    if (this.props.login === true) {
      console.log('kek');
    }
  }
  logout() {
    this.props.dispatch(logoutUser());
    //
  }
  render() {
    return (
      <header className="header">
        <span className="header--logo"><Link to={`/`}>black&white</Link></span>
        <div className="header--buttons-row">
          <span className="header--button"><Link to={`/user`}>user@mail.ru</Link></span>
          <span className="header--button"><Link to={`/subjects`}>get started</Link></span>
          <span className="header--button"><Link to={`/login`}>login</Link></span>
          <span className="header--button"><a onClick={this.logout.bind(this)} >logout</a></span>
        </div>
      </header>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Header);
