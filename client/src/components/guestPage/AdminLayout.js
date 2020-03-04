import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import { getAllUsers, getUser } from '../../actions/users';
import { getAllOrders, getOrder } from '../../actions/orders';
import moment from 'moment';

import Logo from '../../img/logo2.png';
import {
  UsersIcon,
  HomePageIcon,
  PasswordIcon,
  NewAccountIcon
} from '../../img/Icons';

const AdminLayout = ({
  user,
  auth,
  logout,
  getAllUsers,
  getUser,
  users,
  getAllOrders,
  getOrder,
  orders
}) => {
  const [formData, setFormData] = useState({
    hotel: 'Warsaw',
    sort: '-createdAt',
    hotelForGuests: 'Warsaw - Zwyciestwa 32',
    sortForGuests: '-createdAt'
  });

  const onLogout = async e => {
    e.preventDefault();
    logout();
  };

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleGetOrder = async e => {
    e.preventDefault();
    getOrder(e.target.value);
  };
  const handleGetUser = async e => {
    e.preventDefault();
    getUser(e.target.value);
  };

  useEffect(() => {
    getAllOrders(formData);
    getAllUsers(formData);
  }, [formData]);

  if (!auth) {
    return <Redirect to={'/'} />;
  }

  return (
    <section className="container--guestPage">
      <div className="guestPage__services">
        <h3 className="heading-3">Bookings:</h3>

        <div className="guestPage__services__bookings">
          <select
            className="bookpage__form__select"
            name="hotel"
            value={formData.hotel}
            onChange={e => onChange(e)}
            required
          >
            <option className="bookpage__form__select__item" value="Warsaw">
              Warsaw - Zwyciestwa 32
            </option>
            <option className="bookpage__form__select__item" value="Bilbao">
              Bilbao - Barrencalle 23
            </option>
            <option className="bookpage__form__select__item" value="Naples">
              Naples - Spaccanapoli 8
            </option>
            <option className="bookpage__form__select__item" value="Brussels">
              Brussels - Bonheur 11
            </option>
            <option className="bookpage__form__select__item" value="Prague">
              Prague - Pařížská Street 3
            </option>
          </select>
          <select
            className="bookpage__form__select"
            name="sort"
            value={formData.sort}
            onChange={e => onChange(e)}
            required
          >
            <option className="bookpage__form__select__item" value="-createdAt">
              Recent created
            </option>
            <option className="bookpage__form__select__item" value="createdAt">
              First created
            </option>
            <option className="bookpage__form__select__item" value="startDate">
              Start Date
            </option>
          </select>
          <h4 className="heading-4 guestPage__services__bookings__header">
            Found {orders.results || 0} (maximum 5 shows) bookings in that hotel
          </h4>
          {orders.results &&
            orders.data.data.map(order => (
              <button
                key={order._id}
                value={order._id}
                className="guestPage__services__bookings__btn"
                onClick={e => handleGetOrder(e)}
              >
                {order._id}
              </button>
            ))}
        </div>
        <div className="guestPage__services__booking">
          <h4 className="heading-4 guestPage__services__booking__header">
            Order informations
          </h4>

          {orders.order && (
            <div className="guestPage__services__booking__data">
              <p>Name: {orders.order.data.data.name}</p>
              <p>Vorname: {orders.order.data.data.vorname}</p>
              <p>Phone: {orders.order.data.data.phone}</p>
              <p>Email: {orders.order.data.data.email}</p>
              <p>Country: {orders.order.data.data.country}</p>
              <p>Town: {orders.order.data.data.town}</p>
              <p>Zip: {orders.order.data.data.zip}</p>
              <p>Adress: {orders.order.data.data.adress}</p>
              <p>Room: {orders.order.data.data.choosenRoom}</p>
              <p>Info: {orders.order.data.data.info}</p>
              <p>
                Start date:{' '}
                {moment(orders.order.data.data.startDate).format('DD-MM-YY')}
              </p>
              <p>
                End date:{' '}
                {moment(orders.order.data.data.endDate).format('DD-MM-YY')}
              </p>
            </div>
          )}
        </div>

        <h3 className="heading-3">Guests:</h3>
        <div className="guestPage__services__guests">
          <select
            className="bookpage__form__select"
            name="hotelForGuests"
            value={formData.hotelForGuests}
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
            className="bookpage__form__select"
            name="sortForGuests"
            value={formData.sortForGuests}
            onChange={e => onChange(e)}
            required
          >
            <option className="bookpage__form__select__item" value="-createdAt">
              Recent created
            </option>
            <option className="bookpage__form__select__item" value="createdAt">
              First created
            </option>
            <option className="bookpage__form__select__item" value="startDate">
              Start Date
            </option>
          </select>
          <h4 className="heading-4 guestPage__services__bookings__header">
            Found {users.results || 0} (maximum 5 shows) guests in that hotel
          </h4>
          {users.results &&
            users.data.data.map(singleUser => (
              <button
                key={singleUser._id}
                value={singleUser._id}
                className="guestPage__services__bookings__btn"
                onClick={e => handleGetUser(e)}
              >
                {singleUser._id}
              </button>
            ))}
        </div>
        <div className="guestPage__services__guest">
          <h4 className="heading-4 guestPage__services__guest__header">
            Informations about guest:
          </h4>

          {users.userLoaded && (
            <div className="guestPage__services__guest__data">
              <p>Login: {users.userLoaded.data.data.login}</p>
              <p>Stay duration: {users.userLoaded.data.data.days} days</p>
              <p>Room: {users.userLoaded.data.data.room.name}</p>
              <p>expenses: {users.userLoaded.data.data.expenses}</p>
            </div>
          )}
        </div>
      </div>
      <div className="guestPage__info">
        <img src={Logo} alt="logo" className="guestPage__info__logo" />
        <li className="guestPage__info__list">
          <ul className="guestPage__info__list__item">Name: {user.login}</ul>
          <ul className="guestPage__info__list__item">Role: {user.role}</ul>
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
          <button onClick={e => onLogout(e)} className="sidenav__book">
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
  getAllOrders: PropTypes.func.isRequired,
  getOrder: PropTypes.func.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated,
  user: state.auth.user,
  orders: state.orders,
  users: state.users
});

export default connect(mapStateToProps, {
  logout,
  getAllOrders,
  getOrder,
  getAllUsers,
  getUser
})(AdminLayout);
