import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import Rooms from './Rooms';
import Logo from '../img/logo2.png';
import { UsersIcon, ArrowLeft } from '../img/Icons';

const BookPage = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    country: '',
    town: '',
    zip: '',
    adress: '',
    info: '',
    devInfo: false
  });
  const [date, setDate] = useState({
    startDate: moment().add('1', 'day'),
    endDate: moment().add('8', 'days')
  });
  const [focus, setFocus] = useState(null);

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onDateChange = (startDate, endDate) => {
    setDate(startDate, endDate);
  };
  const onSubmit = async e => {
    e.preventDefault();
    setFormData({
      ...formData,
      devInfo: true
    });
  };
  const hash = window.location.hash.substr(1);

  return (
    <div className="container--bookPage">
      <nav className="bookpage__nav">
        <NavLink to="/" className="sidenav__users">
          <ArrowLeft />
          <label className="sidenav__users__label">Main page</label>
        </NavLink>
        <NavLink to="/loginpage" className="sidenav__book">
          <UsersIcon />
          <label className="sidenav__users__label">Guest panel</label>
        </NavLink>
      </nav>
      <Rooms booking={true} />

      <div className="bookpage">
        <img src={Logo} className="bookpage__logo" alt="logo" />
        <div className="bookpage__headings">
          <h1 className="heading-1 bookpage__heading">Book a room</h1>
          <h3 className="heading-3 bookpage__subheading">
            Make your dreams come true...
          </h3>
        </div>

        <form className="bookpage__form" onSubmit={e => onSubmit(e)}>
          <div className="bookpage__form__left">
            <input
              className="bookpage__form__input bookpage__form__input--name"
              placeholder="Name"
              name="fname"
              value={formData.name}
              onChange={e => onChange(e)}
            />
            <input
              type="text"
              className="bookpage__form__input bookpage__form__input--vorname"
              placeholder="Vorname"
              name="lname"
              value={formData.vorname}
              onChange={e => onChange(e)}
            />
            <input
              type="tel"
              placeholder="Phone"
              className="bookpage__form__input bookpage__form__input--phone"
              name="phone"
              value={formData.phone}
              onChange={e => onChange(e)}
            />
            <input
              type="email"
              placeholder="Email"
              className="bookpage__form__input bookpage__form__input--email"
              name="email"
              value={formData.email}
              onChange={e => onChange(e)}
            />
            <input
              type="text"
              placeholder="Country"
              className="bookpage__form__input bookpage__form__input--country"
              name="country"
              value={formData.country}
              onChange={e => onChange(e)}
            />
            <input
              type="text"
              placeholder="Town"
              className="bookpage__form__input bookpage__form__input--town"
              onChange={e => onChange(e)}
              name="town"
              value={formData.town}
            />
            <input
              type="text"
              placeholder="Zip Code"
              className="bookpage__form__input bookpage__form__input--zip"
              onChange={e => onChange(e)}
              name="zip"
              value={formData.zip}
            />
            <input
              type="text"
              placeholder="Address"
              className="bookpage__form__input bookpage__form__input--address"
              onChange={e => onChange(e)}
              name="adress"
              value={formData.adress}
            />
          </div>
          <div className="bookpage__form__right">
            <select className="bookpage__form__select" defaultValue={hash}>
              <option className="bookpage__form__select__item" value="Roomnr1">
                Room nr 1
              </option>
              <option className="bookpage__form__select__item" value="Roomnr2">
                Room nr 2
              </option>
              <option className="bookpage__form__select__item" value="Roomnr3">
                Room nr 3
              </option>
              <option
                className="bookpage__form__select__item"
                value="Doublebedroom"
              >
                Double bed room
              </option>
              <option
                className="bookpage__form__select__item"
                value="Familyroom(max4people)"
              >
                Family room (max 4 people)
              </option>
              <option
                className="bookpage__form__select__item"
                value="Apartament"
              >
                Apartament
              </option>
            </select>
            <DateRangePicker
              startDatePlaceholderText="Start"
              startDate={date.startDate}
              endDate={date.endDate}
              onDatesChange={onDateChange}
              focusedInput={focus}
              onFocusChange={focus => setFocus(focus)}
              showClearDates={true}
              displayFormat="MMM D"
              numberOfMonths={1}
              isOutsideRange={day =>
                day.isAfter(moment().add('30', 'days')) ||
                day.isBefore(moment().add(1, 'day'))
              }
              startDateId="startDateId"
              endDateId="endDateId"
              required
            />
            <textarea
              className="bookpage__form__textarea"
              placeholder="Any "
              name="info"
              value={formData.info}
              onChange={e => onChange(e)}
            ></textarea>
            <button className="btn bookpage__form__button">Submit</button>
            {formData.devInfo && <p>Didnt create this funcionality just yet</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookPage;
// !isInclusivelyAfterDay(day, moment().add('1', 'day'))
