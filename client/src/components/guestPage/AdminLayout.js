import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { getAllOrders } from '../../actions/orders';

import Logo from '../../img/logo2.png';
import {
  UsersIcon,
  HomePageIcon,
  PasswordIcon,
  NewAccountIcon
} from '../../img/Icons';

const AdminLayout = ({ user, auth, logout, getAllOrders }) => {
  useEffect(() => {
    getAllOrders();
  }, [getAllOrders]);

  const onSubmit = async e => {
    e.preventDefault();
    logout();
  };

  if (!auth) {
    return <Redirect to={'/'} />;
  }

  return (
    <section className="container--guestPage">
      <div className="guestPage__services">Tomato</div>
      <div className="guestPage__info">
        <img src={Logo} alt="logo" className="guestPage__info__logo" />
        <li className="guestPage__info__list">
          <ul className="guestPage__info__list__item">Name: {user.login}</ul>
          <ul className="guestPage__info__list__item">Role: {user.role}</ul>
          <p className="devinfo">
            Some data aggregation will be added here in the future
          </p>
        </li>
        <nav className="guestPage__info__nav">
          <NavLink to="/" className="sidenav__users">
            <HomePageIcon />
            <label className="sidenav__users__label">Main page</label>
          </NavLink>

          <NavLink to="/registerpage" className="sidenav__users">
            <NewAccountIcon />
            <label className="sidenav__users__label">Create account</label>
          </NavLink>

          <NavLink to="/updatepassword" className="sidenav__users">
            <PasswordIcon />
            <label className="sidenav__users__label">Change password</label>
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

AdminLayout.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  getAllOrders: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { logout, getAllOrders })(AdminLayout);
