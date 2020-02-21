import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePassword } from '../actions/auth';
import PropTypes from 'prop-types';

import { UsersIcon, ArrowLeft } from '../img/Icons';

const UpdatePassword = ({ auth, updatePassword }) => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    password: '',
    passwordConfirm: ''
  });
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    updatePassword(
      formData.currentPassword,
      formData.password,
      formData.passwordConfirm
    );
    return <Redirect to={'/guestPage'} />;
  };

  if (!auth) {
    return <Redirect to={'/'} />;
  }

  return (
    <section className="container--loginPage">
      <nav className="loginpage__nav">
        <NavLink to="/" className="sidenav__users">
          <ArrowLeft />
          <label className="sidenav__users__label">Main page</label>
        </NavLink>
        <NavLink to="/guestpage" className="sidenav__book">
          <UsersIcon />
          <label className="sidenav__users__label">Guest page</label>
        </NavLink>
      </nav>

      <h3 className="heading-3">Sign in</h3>
      <form className="loginpage__form" onSubmit={e => onSubmit(e)}>
        <input
          className="loginpage__input"
          type="password"
          placeholder="password"
          minLength="8"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={e => onChange(e)}
          required
        />
        <input
          className="loginpage__input"
          type="password"
          placeholder="new password"
          minLength="8"
          name="password"
          value={formData.password}
          onChange={e => onChange(e)}
          required
        />
        <input
          className="loginpage__input"
          type="password"
          placeholder="new password confirm"
          minLength="8"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={e => onChange(e)}
          required
        />
        <input
          type="submit"
          className="btn loginpage__btn"
          value="Change password"
        />
      </form>
    </section>
  );
};

UpdatePassword.propTypes = {
  updatePassword: PropTypes.func.isRequired,
  auth: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { updatePassword })(UpdatePassword);
