import { connect } from 'react-redux';
import React from 'react';
import InputResults from './input_results';
import { addUsers } from '../../actions/users_actions';
import { client_id, client_secret } from '../../../github_secret_id';


const mapStateToProps = ({ users }) => {
  return {
    users
  }
};

const mapDispatchToProps = dispatch => ({
  addUsers: (users) => dispatch(addUsers(users)),
  client_id: () => (client_id()),
  client_secret: () => (client_secret()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputResults);
