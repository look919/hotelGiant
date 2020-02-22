import React, { useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import {
  UsersIcon,
  HomePageIcon,
  PasswordIcon,
  NewAccountIcon
} from '../img/Icons';
import { logout } from '../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from './../img/gallery-restaurant.jpg';
import Gym from './../img/gallery-gym.jpg';
import GameRoom from './../img/gallery-gameroom.jpg';

import Logo from './../img/logo2.png';

const GuestPage = ({ auth, user, logout }) => {
  useEffect(() => {
    loadExpenses();
  });

  const onSubmit = async e => {
    e.preventDefault();
    logout();
  };
  const loadExpenses = () => {
    const userExpenses = user ? user.expenses : [];
    if (!userExpenses) {
      userExpenses.push({
        name: 'Room cost',
        cost: user.room.cost * user.days
      });
    }
  };
  if (!auth) {
    return <Redirect to={'/'} />;
  }
  const admin = (
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
  );

  const guest = (
    <div className="guestPage__info">
      <img src={Logo} alt="logo" className="guestPage__info__logo" />
      <li className="guestPage__info__list">
        <ul className="guestPage__info__list__item">Name: {user.login}</ul>
        <ul className="guestPage__info__list__item">Hotel: {user.hotel}</ul>
        <ul className="guestPage__info__list__item">
          Room-type: {user.room.name}
        </ul>
        <ul className="guestPage__info__list__item">
          Estimated duration of stay: {user.days} days
        </ul>
      </li>
      <div className="guestPage__info__list">
        <h3 className="heading-4 guestPage__info__heading">Your Expenses</h3>
        <li className="guestPage__info__list">
          <ul className="guestPage__info__list__item">
            Room cost: {user.room.price}$ * {user.days}days ={' '}
            {user.room.price * user.days}$
          </ul>
          <p className="devinfo">
            Expenses are not saved to db just yet, will add that with online
            payments later
          </p>
        </li>
      </div>
      <nav className="guestPage__info__nav">
        <NavLink to="/" className="sidenav__users">
          <HomePageIcon />
          <label className="sidenav__users__label">Main page</label>
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
  );
  return (
    <section className="container--guestPage">
      <div className="guestPage__services">
        <h3 className="heading-2 guestPage__services__heading">Our services</h3>
        <div className="guestPage__services__item guestPage__services__item--restaurant">
          <img
            src={Restaurant}
            alt="service"
            className="guestPage__services__item__photo"
          />
        </div>
        <div className="guestPage__services__item guestPage__services__item--gameroom">
          <img
            src={GameRoom}
            alt="service"
            className="guestPage__services__item__photo"
          />
        </div>
        <div className="guestPage__services__item guestPage__services__item--gym">
          <img
            src={Gym}
            alt="service"
            className="guestPage__services__item__photo"
          />
        </div>
        <div className="guestPage__services__item guestPage__services__item--gym">
          <h3 className="heading-3">Extend your room reservation</h3>
        </div>
      </div>
      {user.role === 'admin' ? admin : guest}
    </section>
  );
};
GuestPage.propTypes = {
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { logout })(GuestPage);
