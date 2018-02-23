import { connect } from 'react-redux';
import React from 'react';
import InputResults from './input_results';
import { addUsers } from '../../actions/users_actions';


const mapStateToProps = ({ users }) => {
  return {
    users
  }
};

const mapDispatchToProps = dispatch => ({
  addUsers: (users) => dispatch(addUsers(users)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputResults);
