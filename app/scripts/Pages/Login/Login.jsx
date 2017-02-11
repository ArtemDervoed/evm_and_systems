/* eslint-disable no-unused-vars */

import React from 'react';
import {connect}	from	'react-redux';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import TopBlock from 'components/TopBlock/TopBlock';
import {Link} from 'react-router';
import {login} from 'actions/auth';
class Login extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    this.props.dispatch(login({
      role: this.refs.role.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
    })
  );}
  render() {
    return (
      <section >
        <Header />
        <TopBlock header="Войдите в систему" description="Введите свои логин и пароль" />
        <div className="login-form">
          <form className="login-form--form">
            <input type="hidden" ref="role" value="user" name="role"/>
            <input type="text" ref="email" name="email" className="login-form--input" placeholder="UserName"/>
            <input type="password" ref="password" name="password" className="login-form--input" placeholder="Password"/>
            <button type="submit" className="login-form--button" onClick={this.onSubmit.bind(this)}>Login</button>
            <Link to={`/registration`}>Registration</Link>
          </form>
        </div>
        <Footer/>
      </section>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(Login);
