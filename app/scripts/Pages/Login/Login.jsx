/* eslint-disable no-unused-vars */

import React from 'react';
import {connect}	from	'react-redux';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import TopBlock from 'components/TopBlock/TopBlock';
import {Link} from 'react-router';
export default class Login extends React.Component {
  render() {
    return (
      <section >
        <Header login={false}/>
        <TopBlock header="Войдите в систему" description="Введите свои логин и пароль" />
        <div className="login-form">
        <iframe id="iframe" name="my_iframe"></iframe>
          <form method="post" action="https://polar-forest-21563.herokuapp.com/api/signin" target="my_iframe" className="login-form--form">
            <input type="text" name="email" className="login-form--input" placeholder="UserName"/>
            <input type="password" name="password" className="login-form--input" placeholder="Password"/>
            <button type="submit" className="login-form--button">Login</button>
            <Link to={`/registration`}>Registration</Link>
          </form>
        </div>
        <Footer/>
      </section>
    );
  }
}
