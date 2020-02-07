import React from "react";
import { PinIcon } from "../img/Icons";

const LocationItem = props => (
  <li className="locations__item">
    <div className="location__icon">
      <PinIcon />
    </div>
    <div className="locations__item__info">
      <h5 className="locations__item__info--town">{props.town}</h5>
      <p className="locations__item__info--street">{props.street}</p>
    </div>
  </li>
);

export default LocationItem;
