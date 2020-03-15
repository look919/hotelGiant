import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

import {
  KeyIcon,
  MoneyIcon,
  BedIcon,
  BathIcon,
  WifiIcon,
  FoodIcon2,
  AllInclusiveIcon
} from '../img/Icons';

const SingleRoom = props => {
  const breakfast =
    props.features[3] === 'Breakfast' ? props.features[3] : null;

  const allInclusive =
    props.features[4] === 'All Inclusive' ? props.features[4] : null;

  return (
    <Slide bottom>
      <div className="single-room">
        <h5 className="single-room__name">{props.name}</h5>
        <img
          src={require(`../img/${props.img}`)}
          className="single-room__photo"
          alt="room-img"
        />
        {!props.booking ? (
          <Link
            to={`/bookPage#${props.name.replace(/ /g, '')}`}
            className="btn single-room__btn"
          >
            Book Now
          </Link>
        ) : (
          <div></div>
        )}
        <div className="single-room__info">
          <div className="single-room__info__item">
            <KeyIcon />
            <p>
              {props.size}m<sup>2</sup>
            </p>
          </div>
          <div className="single-room__info__item">
            <MoneyIcon />
            <p>{props.price}$ per day</p>
          </div>
        </div>
        <div className="single-room__features">
          <div className="single-room__feature">
            <BedIcon />
            <p className="single-room__info__p">Bedroom</p>
          </div>
          <div className="single-room__feature">
            <BathIcon />
            <p className="single-room__info__p">Bathroom</p>
          </div>
          <div className="single-room__feature">
            <WifiIcon />
            <p className="single-room__info__p">Free Wifi</p>
          </div>
          {breakfast ? (
            <div className="single-room__feature">
              <FoodIcon2 />
              <p className="single-room__info__p">{breakfast}</p>
            </div>
          ) : (
            <div></div>
          )}
          {allInclusive ? (
            <div className="single-room__feature">
              <AllInclusiveIcon />
              <p className="single-room__info__p">{allInclusive}</p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </Slide>
  );
};

export default SingleRoom;
