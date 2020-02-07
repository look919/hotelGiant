import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

import { UsersIcon, PurchaseIcon } from "../img/Icons";

const SideNav = () => (
  <section className="sidenav">
    <input type="checkbox" className="sidenav__checkbox" id="nav-toggle" />

    <div className="sidenav__background">
      <label htmlFor="nav-toggle" className="sidenav__button">
        <span className="sidenav__icon">&nbsp;</span>
      </label>
    </div>
    <div className="sidenav__blanc">&nbsp;</div>
    <nav className="sidenav__nav">
      <ul className="sidenav__nav__list">
        <li className="sidenav__nav__list__item">
          <Link
            to="header"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2500}
          >
            Hotel Giant
          </Link>
        </li>
        <li className="sidenav__nav__list__item">
          <Link
            to="description"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2500}
          >
            About us
          </Link>
        </li>
        <li className="sidenav__nav__list__item">
          <Link
            to="rooms"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2500}
          >
            Rooms
          </Link>
        </li>
        <li className="sidenav__nav__list__item">
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2500}
          >
            Reviews
          </Link>
        </li>
        <li className="sidenav__nav__list__item">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2500}
          >
            Contact
          </Link>
        </li>
        <li className="sidenav__nav__list__item">
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2500}
          >
            Gallery
          </Link>
        </li>
      </ul>
    </nav>
    <div className="sidenav__links">
      <NavLink to="/bookpage" className="sidenav__book">
        <PurchaseIcon />
        <label className="sidenav__users__label">Book Now!</label>
      </NavLink>
      <NavLink to="/bookpage" className="sidenav__users">
        <UsersIcon />
        <label className="sidenav__users__label">Guest panel</label>
      </NavLink>
    </div>
  </section>
);

export default SideNav;
