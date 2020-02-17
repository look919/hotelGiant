import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { UsersIcon, ArrowLeft } from '../img/Icons';
import { logout } from '../actions/auth';
import PropTypes from 'prop-types';

const GuestPage = ({ auth, logout }) => {
  const onSubmit = async e => {
    e.preventDefault();
    console.log('baba');
    logout();
  };

  if (!auth) {
    return <Redirect to={'/'} />;
  }

  return (
    <section className="container--guestPage">
      <div>Tom1</div>
      <div>Tom2</div>
      <div className="guestPage__info">
        <nav className="guestPage__info__nav">
          <NavLink to="/" className="sidenav__users">
            <ArrowLeft />
            <label className="sidenav__users__label">Main page</label>
          </NavLink>
          <button onClick={e => onSubmit(e)} className="sidenav__book">
            <UsersIcon />
            <label className="sidenav__users__label">Logout</label>
          </button>
        </nav>
      </div>
    </section>
  );
};
GuestPage.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(GuestPage);
