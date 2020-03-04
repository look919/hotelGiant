import React, { Fragment } from 'react';
import GuestLayout from './GuestLayout';
import AdminLayout from './AdminLayout';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

const GuestPage = ({ auth, user }) => {
  if (!auth) {
    return <Redirect to={'/'} />;
  }

  return (
    <Fragment>
      {user.role === 'admin' ? <AdminLayout /> : <GuestLayout />}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps)(GuestPage);
