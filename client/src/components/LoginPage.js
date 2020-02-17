import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

import PropTypes from 'prop-types';

import { PurchaseIcon, ArrowLeft } from '../img/Icons';

const LoginPage = ({ login, auth }) => {
  const [formData, setFormData] = useState({
    login: '',
    password: ''
  });
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    login(formData.login, formData.password);
  };

  if (auth) {
    return <Redirect to={'/guestPage'} />;
  }

  return (
    <section className="container--loginPage">
      <nav className="loginpage__nav">
        <NavLink to="/" className="sidenav__users">
          <ArrowLeft />
          <label className="sidenav__users__label">Main page</label>
        </NavLink>
        <NavLink to="/bookpage" className="sidenav__book">
          <PurchaseIcon />
          <label className="sidenav__users__label">Book Now!</label>
        </NavLink>
      </nav>

      <h3 className="heading-3">Sign in</h3>
      <form className="loginpage__form" onSubmit={e => onSubmit(e)}>
        <input
          className="loginpage__input"
          placeholder="login"
          name="login"
          value={formData.login}
          onChange={e => onChange(e)}
          required
        />
        <div className="form-group">
          <input
            className="loginpage__input"
            type="password"
            placeholder="password"
            minLength="8"
            name="password"
            value={formData.password}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <input type="submit" className="btn loginpage__btn" value="Login" />
      </form>
    </section>
  );
};
LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(LoginPage);
