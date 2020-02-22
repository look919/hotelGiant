import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions/auth';

import PropTypes from 'prop-types';

import { UsersIcon, ArrowLeft } from '../img/Icons';

const RegisterPage = ({ register, auth, user }) => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    passwordConfirm: '',
    hotel: 'Warsaw - Zwyciestwa 32',
    room: '',
    days: ''
  });
  const { login, password, passwordConfirm, hotel, room, days } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    register(login, password, passwordConfirm, hotel, room, days);
  };

  if (!auth || user.role !== 'admin') {
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
          <label className="sidenav__users__label">Admin panel</label>
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
        <input
          className="loginpage__input"
          type="password"
          placeholder="passwordConfirm"
          minLength="8"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={e => onChange(e)}
          required
        />
        <input
          className="loginpage__input"
          placeholder="hotel"
          name="hotel"
          value={formData.hotel}
          onChange={e => onChange(e)}
          required
        />
        <input
          className="loginpage__input"
          placeholder="room"
          name="room"
          value={formData.room}
          onChange={e => onChange(e)}
          required
        />
        <input
          className="loginpage__input"
          placeholder="days"
          name="days"
          value={formData.days}
          onChange={e => onChange(e)}
          required
        />
        <input type="submit" className="btn loginpage__btn" value="Register" />
      </form>
    </section>
  );
};
RegisterPage.propTypes = {
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { register })(RegisterPage);
