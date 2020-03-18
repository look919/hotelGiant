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
    room: '5e3abeb9b5628623182741be',
    days: '',
    roomPrice: 0
  });
  const {
    login,
    password,
    passwordConfirm,
    hotel,
    room,
    days,
    roomPrice
  } = formData;

  const onChange = e => {
    switch (room) {
      case '5e3abeb9b5628623182741be':
        setFormData({
          ...formData,
          roomPrice: 33,
          [e.target.name]: e.target.value
        });
        break;
      case '5e3ac1d484bcca1888311b42':
        setFormData({
          ...formData,
          roomPrice: 50,
          [e.target.name]: e.target.value
        });
        break;
      case '5e3ac1ed84bcca1888311b43':
        setFormData({
          ...formData,
          roomPrice: 84,
          [e.target.name]: e.target.value
        });
        break;
      case '5e3ac21984bcca1888311b44':
        setFormData({
          ...formData,
          roomPrice: 59,
          [e.target.name]: e.target.value
        });
        break;
      case '5e3ac22d84bcca1888311b45':
        setFormData({
          ...formData,
          roomPrice: 92,
          [e.target.name]: e.target.value
        });
        break;
      case '5e3ac24184bcca1888311b46':
        setFormData({
          ...formData,
          roomPrice: 124,
          [e.target.name]: e.target.value
        });
        break;
      default:
        setFormData({
          ...formData,
          roomPrice: 33,
          [e.target.name]: e.target.value
        });
        break;
    }
  };

  const onSubmit = async e => {
    e.preventDefault();

    register(login, password, passwordConfirm, hotel, room, days, roomPrice);

    setFormData({
      login: '',
      password: '',
      passwordConfirm: '',
      hotel: 'Warsaw - Zwyciestwa 32',
      room: '',
      days: '',
      roomPrice: 0
    });
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
        <select
          className="bookpage__form__select loginpage__select"
          name="hotel"
          value={formData.hotel}
          onChange={e => onChange(e)}
          required
        >
          <option
            className="bookpage__form__select__item"
            value="Warsaw - Zwyciestwa 32"
          >
            Warsaw - Zwyciestwa 32
          </option>
          <option
            className="bookpage__form__select__item"
            value="Bilbao - Barrencalle 23"
          >
            Bilbao - Barrencalle 23
          </option>
          <option
            className="bookpage__form__select__item"
            value="Naples - Spaccanapoli 8"
          >
            Naples - Spaccanapoli 8
          </option>
          <option
            className="bookpage__form__select__item"
            value="Brussels - Bonheur 11"
          >
            Brussels - Bonheur 11
          </option>
          <option
            className="bookpage__form__select__item"
            value="Prague - Pařížská Street 3"
          >
            Prague - Pařížská Street 3
          </option>
        </select>

        <select
          className="bookpage__form__select loginpage__select"
          name="room"
          onChange={e => onChange(e)}
          value={formData.room}
          required
        >
          <option
            className="bookpage__form__select__item"
            value="5e3abeb9b5628623182741be"
          >
            Room nr 1
          </option>
          <option
            className="bookpage__form__select__item"
            value="5e3ac1d484bcca1888311b42"
          >
            Room nr 2
          </option>
          <option
            className="bookpage__form__select__item"
            value="5e3ac1ed84bcca1888311b43"
          >
            Room nr 3
          </option>
          <option
            className="bookpage__form__select__item"
            value="5e3ac21984bcca1888311b44"
          >
            Double bed room
          </option>
          <option
            className="bookpage__form__select__item"
            value="5e3ac22d84bcca1888311b45"
          >
            Family room (max 4 people)
          </option>
          <option
            className="bookpage__form__select__item"
            value="5e3ac24184bcca1888311b46"
          >
            Apartament
          </option>
        </select>
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
