import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { isInclusivelyAfterDay, SingleDatePicker } from 'react-dates';
import Rooms from './Rooms';
import Logo from '../img/logo2.png';
import { UsersIcon, ArrowLeft } from '../img/Icons';

class BookPage extends React.Component {
  constructor(props) {
    super(props);
    //this.submitForm = this.submitForm.bind(this);

    this.state = {
      date: moment(),
      time: '15:00',
      calendarFocused: false,
      numOfPeople: 1,
      phone: '',
      email: '',
      name: '',
      description: '',
      info: ''
    };
  }
  render() {
    console.log(window.location.hash);
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
          <h1 className="heading-1 bookpage__heading">Book a room</h1>

          <form className="bookpage__form">
            <h3 className="heading-3 bookpage__form__subheading">
              Make your dreams come true...
            </h3>
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
            <input
              className="bookpage__form__input bookpage__form__input--name"
              placeholder="Name"
              name="fname"
            />
            <input
              type="text"
              className="bookpage__form__input bookpage__form__input--vorname"
              placeholder="Vorname"
              name="lname"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="bookpage__form__input bookpage__form__input--phone"
            />
            <input
              type="email"
              placeholder="Email"
              className="bookpage__form__input bookpage__form__input--email"
            />
            <input
              type="text"
              placeholder="Country"
              className="bookpage__form__input bookpage__form__input--country"
            />
            <input
              type="text"
              placeholder="Town"
              className="bookpage__form__input bookpage__form__input--town"
            />
            <input
              type="text"
              placeholder="Zip Code"
              className="bookpage__form__input bookpage__form__input--zip"
            />
            <input
              type="text"
              placeholder="Address"
              className="bookpage__form__input bookpage__form__input--address"
            />
            <textarea
              className="bookpage__form__textarea"
              placeholder="Any "
            ></textarea>

            <button className="bookpage__form__button">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default BookPage;
