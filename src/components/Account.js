import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import AccountImage from './AccountImage';
import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

const AccountPage = ({ authUser }) =>
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
        <AccountImage />
      </div>

const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser,
  });

const authCondition = (authUser) => !!authUser;

export default compose(
    withAuthorization(authCondition),
    connect(mapStateToProps)
  )(AccountPage);