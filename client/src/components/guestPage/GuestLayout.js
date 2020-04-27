import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { UsersIcon, HomePageIcon, PasswordIcon } from '../../img/Icons';
import { v4 as uuidv4 } from 'uuid';
import { logout } from './../../actions/auth';
import { updateUserExpenses } from './../../actions/users';

import Restaurant from '../../img/gallery-restaurant.jpg';
import Gym from '../../img/gallery-gym.jpg';
import GameRoom from '../../img/gallery-gameroom.jpg';
import Logo from '../../img/logo2.png';

const GuestLayout = ({ user, auth, logout, updateUserExpenses }) => {
  if (!auth) {
    return <Redirect to={'/'} />;
  }
  let totalExpenses = 0;

  useEffect(() => {
    const checkIfUserHasExpenses = async () => {
      if (user.expenses.length === 0) {
        const roomFee = [
          { expense: 'Hotel room fee', cost: user.room.price * user.days },
        ];
        totalExpenses = user.room.price * user.days;
        await updateUserExpenses(user._id, roomFee, totalExpenses);
      }
    };
    checkIfUserHasExpenses();
  }, [updateUserExpenses]);

  const [purchaseOptions, setPurchaseOptions] = useState({
    service: '',
    codeInputRestaurant: false,
    codeInputGameRoom: false,
    codeInputGym: false,
    devInfo: false,
  });

  const handleSetExpenseFromCodeService = (
    code1,
    code2,
    code3,
    object1,
    object2,
    object3
  ) => {
    const newUserExpenses = user.expenses;
    let bought = false;
    let totalExpenses = user.totalExpenses;
    switch (purchaseOptions.service) {
      case code1:
        newUserExpenses.push(object1);
        totalExpenses += object1.cost;
        updateUserExpenses(user._id, newUserExpenses, totalExpenses);
        bought = true;
        break;
      case code2:
        newUserExpenses.push(object2);
        totalExpenses += object2.cost;
        updateUserExpenses(user._id, newUserExpenses, totalExpenses);
        bought = true;
        break;
      case code3:
        newUserExpenses.push(object3);
        totalExpenses += object3.cost;
        updateUserExpenses(user._id, newUserExpenses, totalExpenses);
        bought = true;
        break;
      default:
        break;
    }

    if (bought) {
      setPurchaseOptions({
        ...purchaseOptions,
        codeInputGym: false,
        codeInputRestaurant: false,
        codeInputGameRoom: false,
        devInfo: false,
        service: '',
      });
    } else {
      setPurchaseOptions({
        devInfo: true,
      });
    }
  };

  const handleRestaurantButton = (e) => {
    e.preventDefault();
    if (!purchaseOptions.codeInputRestaurant) {
      setPurchaseOptions({
        ...purchaseOptions,
        codeInputRestaurant: true,
        codeInputGameRoom: false,
        codeInputGym: false,
        service: '',
      });
    } else {
      handleSetExpenseFromCodeService(
        '2555',
        '4612',
        '7433',
        { expense: 'Breakfast', cost: 5 },
        { expense: 'All meals for 1 day', cost: 9 },
        { expense: 'All meals for stay peroid', cost: 15 }
      );
    }
  };
  const handleGameRoomButton = (e) => {
    e.preventDefault();
    if (!purchaseOptions.codeInputGameRoom) {
      setPurchaseOptions({
        ...purchaseOptions,
        codeInputGameRoom: true,
        codeInputRestaurant: false,
        codeInputGym: false,
        service: '',
      });
    } else {
      handleSetExpenseFromCodeService(
        '2123',
        '4003',
        '7213',
        { expense: 'Game room - 2 hours ticket', cost: 5 },
        { expense: 'Game room - 1 day ticket', cost: 9 },
        { expense: 'Game room - stay peroid ticket', cost: 15 }
      );
    }
  };
  const handleGymButton = (e) => {
    e.preventDefault();
    if (!purchaseOptions.codeInputGym) {
      setPurchaseOptions({
        ...purchaseOptions,
        codeInputGym: true,
        codeInputRestaurant: false,
        codeInputGameRoom: false,
        service: '',
      });
    } else {
      handleSetExpenseFromCodeService(
        '2443',
        '4032',
        '7993',
        { expense: 'Gym - 2 hours ticket', cost: 5 },
        { expense: 'Gym - 1 day ticket', cost: 9 },
        { expense: 'Gym - stay peroid ticket', cost: 15 }
      );
    }
  };
  const onInputChange = (e) => {
    setPurchaseOptions({
      ...purchaseOptions,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    logout();
  };

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
          <div className="guestPage__services__item__pseudo guestPage__services__item__pseudo--column">
            <div className="guestPage__services__item__container--restaurant">
              <h3 className="heading-3 guestPage__services__item__header">
                Breakfast
              </h3>
              <p className="guestPage__services__item__p">
                Cost 5$ | Code 2555
              </p>
            </div>
            <div className="guestPage__services__item__container--restaurant">
              <h3 className="heading-3 guestPage__services__item__header">
                All meals for 1 day only
              </h3>
              <p className="guestPage__services__item__p">Cost 9$ Code 4612</p>
            </div>
            <div className="guestPage__services__item__container--restaurant">
              <h3 className="heading-3 guestPage__services__item__header">
                All meals for the stay peroid
              </h3>
              <p className="guestPage__services__item__p">Cost 15$ Code 7433</p>
            </div>
            {purchaseOptions.codeInputRestaurant && (
              <input
                name="service"
                value={purchaseOptions.sevice}
                className="guestPage__services__item__input"
                placeholder="code of the service"
                maxLength={4}
                onChange={(e) => onInputChange(e)}
              />
            )}
            <button
              onClick={(e) => handleRestaurantButton(e)}
              className="btn guestPage__services__item__btn"
            >
              Purchase online
            </button>
            {purchaseOptions.devInfo && (
              <p className="devinfo">Make sure your code is correct!</p>
            )}
          </div>
        </div>
        <div className="guestPage__services__item guestPage__services__item--gameroom">
          <img
            src={GameRoom}
            alt="service"
            className="guestPage__services__item__photo"
          />
          <div className="guestPage__services__item__pseudo">
            <div className="guestPage__services__item__container">
              <h3 className="heading-3 guestPage__services__item__header">
                2hours ticket
              </h3>
              <p className="guestPage__services__item__p">
                Cost 5$ | Code 2123
              </p>
            </div>
            <div className="guestPage__services__item__container">
              <h3 className="heading-3 guestPage__services__item__header">
                1 day ticket
              </h3>
              <p className="guestPage__services__item__p">Cost 9$ Code 4003</p>
            </div>
            <div className="guestPage__services__item__container">
              <h3 className="heading-3 guestPage__services__item__header">
                Ticket for the stay peroid
              </h3>
              <p className="guestPage__services__item__p">Cost 15$ Code 7213</p>
            </div>
            {purchaseOptions.codeInputGameRoom && (
              <input
                name="service"
                value={purchaseOptions.sevice}
                className="guestPage__services__item__input"
                placeholder="code of the service"
                maxLength={4}
                minLength={4}
                onChange={(e) => onInputChange(e)}
              />
            )}
            <button
              onClick={(e) => handleGameRoomButton(e)}
              className="btn guestPage__services__item__btn"
            >
              Purchase online
            </button>
            {purchaseOptions.devInfo && (
              <p className="devinfo">Make sure your code is correct!</p>
            )}
          </div>
        </div>
        <div className="guestPage__services__item guestPage__services__item--gym">
          <img
            src={Gym}
            alt="service"
            className="guestPage__services__item__photo"
          />
          <div className="guestPage__services__item__pseudo">
            <div className="guestPage__services__item__container">
              <h3 className="heading-3 guestPage__services__item__header">
                2hours ticket
              </h3>
              <p className="guestPage__services__item__p">
                Cost 5$ | Code 2443
              </p>
            </div>
            <div className="guestPage__services__item__container">
              <h3 className="heading-3 guestPage__services__item__header">
                1 day ticket
              </h3>
              <p className="guestPage__services__item__p">Cost 9$ Code 4032</p>
            </div>
            <div className="guestPage__services__item__container">
              <h3 className="heading-3 guestPage__services__item__header">
                Ticket for the stay peroid
              </h3>
              <p className="guestPage__services__item__p">Cost 15$ Code 7993</p>
            </div>
            {purchaseOptions.codeInputGym && (
              <input
                name="service"
                value={purchaseOptions.sevice}
                className="guestPage__services__item__input"
                placeholder="code of the service"
                maxLength={4}
                minLength={4}
                onChange={(e) => onInputChange(e)}
              />
            )}
            <button
              onClick={(e) => handleGymButton(e)}
              className="btn guestPage__services__item__btn"
            >
              Purchase online
            </button>
            {purchaseOptions.devInfo && (
              <p className="devinfo guestPage__services__item__p">
                Make sure your code is correct!
              </p>
            )}
          </div>
        </div>
      </div>
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
        <div className="guestPage__info__list guestPage__info__list--expenses">
          <h3 className="heading-4 guestPage__info__heading">Your Expenses</h3>
          <li className="guestPage__info__list">
            {user.expenses.length > 0 &&
              user.expenses.map((exp) => {
                return (
                  <ul key={uuidv4()} className="guestPage__info__list__item">
                    {exp.expense}: {exp.cost}$
                  </ul>
                );
              })}
            {
              <p className="guestPage__info__list__item--bold">
                Total expenses: {user.totalExpenses}$
              </p>
            }
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
          <button onClick={(e) => onSubmit(e)} className="sidenav__book">
            <UsersIcon />
            <label className="sidenav__users__label">Logout</label>
          </button>
        </nav>
      </div>
    </section>
  );
};
GuestLayout.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  updateUserExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout, updateUserExpenses })(
  GuestLayout
);
