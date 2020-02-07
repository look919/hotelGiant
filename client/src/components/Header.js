import React from "react";
import { Link } from "react-router-dom";

import Logo from "../img/logo2.png";
import { StarIcon } from "../img/Icons";

const Header = () => (
  <header className="header" id="header">
    <img src={Logo} className="header__logo" alt="logo" />
    <div className="header__headings">
      <h1 className="heading-1 header__mainheading">Hotel Giant</h1>
      <h2 className="heading-3 header__subheading">
        A place where miracles can happen...
      </h2>
    </div>
    <div className="header__info">
      <p className="header__info__text header__info__text--1">
        7th place in the ranking of the best hotels organized by TripAdvisor!
      </p>
      <p className="header__info__text header__info__text--2">
        Recommended by 95% of our guests
      </p>
    </div>
    <div className="header__purchase">
      <div className="header__purchase__icons">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>
      <Link to="/bookpage" className="btn header__purchase__btn">
        Book now
      </Link>
    </div>
  </header>
);

export default Header;
