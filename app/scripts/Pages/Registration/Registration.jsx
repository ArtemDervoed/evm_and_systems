/* eslint-disable no-unused-vars */
import React from 'react';
import {connect}	from	'react-redux';
import Header from 'components/Header/Header';
import TopBlock from 'components/TopBlock/TopBlock';
export default class Registration extends React.Component {
  render() {
    return (
      <section >
        <Header header={false}/>
        <TopBlock header="Зарегайся епта" description="kek" />
        <form method="POST" action="https://polar-forest-21563.herokuapp.com/api/users" >
          <input type="text" name="name" placeholder="Имя" />
          <input type="text" name="email" placeholder="Мыло" />
          <input type="password" name="password" placeholder="password" />
          <input type="password" name="password_confirmation" placeholder="password again" />
          <input type="submit" value="Отправить"/>
        </form>
      </section>
    );
  }
}
