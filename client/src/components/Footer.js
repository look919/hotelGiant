import React from "react";
import { Link } from "react-scroll";
import Logo from "../img/logo.png";

const Footer = () => (
  <footer className="footer">
    <nav className="footer__nav">
      <ul className="footer__nav__list">
        <li className="footer__nav__list__item">
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
        <li className="footer__nav__list__item">
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
        <li className="footer__nav__list__item">
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
        <li className="footer__nav__List__item">Book</li>
        <li className="footer__nav__List__item">Terms</li>
      </ul>
    </nav>
    <img src={Logo} className="footer__logo" alt="logo" />
    <p className="footer__credits">
      Build by Tomasz Wirkus 2019. All rights reserved &copy;
    </p>
  </footer>
);

export default Footer;
