/* eslint-disable no-unused-vars */
import React from 'react';
import {connect}	from	'react-redux';
import Header from 'components/Header/Header';
import TopBlock from 'components/TopBlock/TopBlock';
import {fetchPosts} from 'actions/actions';
class User extends React.Component {
  getUsers() {
    const users = this.props.dispatch(fetchPosts());
  }
  render() {
    return (
      <section >
        <Header/>
        <TopBlock header="User228" description="active"/>
        <button onClick={this.getUsers.bind(this)}>Go bla</button>
      </section>
    );
  }
}
const	mapStateToProps	=	state	=> ({
  ...state,
});

export default connect(mapStateToProps)(User);
