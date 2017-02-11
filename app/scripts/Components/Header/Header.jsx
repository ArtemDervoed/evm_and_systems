/* eslint-disable no-unused-vars */
import React from 'react';
import {connect}	from	'react-redux';
import {Link} from 'react-router';
import {logout} from 'actions/auth';
import {checkLogin} from 'actions/auth';
class Header extends React.Component {
  logout() {
    this.props.dispatch(logout());
  }
  render() {
    let link;
    if (this.props.auth.isAuthenticated) {
      link = <Link onClick={this.logout.bind(this)} to={`/`} >logout</Link>;
    } else {
      link = <Link to={`/login`}>login</Link>;
    }
    return (
      <header className="header">
        <span className="header--logo"><Link to={`/`}>black&white</Link></span>
        <div className="header--buttons-row">
        <span className="header--button">
        {link}
        </span>
       </div>
      </header>
    );
  }
}
const	mapStateToProps	=	(state, ownProps)	=> {
  return {...state};
};

export default connect(mapStateToProps)(Header);
