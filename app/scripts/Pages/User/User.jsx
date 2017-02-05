/* eslint-disable no-unused-vars */
import React from 'react';
import {connect}	from	'react-redux';
import Header from 'components/Header/Header';
import TopBlock from 'components/TopBlock/TopBlock';
import {fetchPosts} from 'actions/actions';
class User extends React.Component {
  getUsers() {
    const users = this.props.dispatch(fetchPosts());
    console.log(users);
  }
  render() {
    return (
      <section >
        <Header header={false}/>
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
