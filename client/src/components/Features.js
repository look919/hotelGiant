import React from "react";
import Locations from "./Locations";

import {
  HomeIcon,
  StaffIcon,
  MapIcon,
  DisabledIcon,
  StatsIcon,
  FoodIcon
} from "../img/Icons";

const Features = () => (
  <section className="features">
    <Locations />
    <div className="features__container">
      <h4 className="heading-4 features__heading">Features:</h4>
      <div className="features__content">
        <div className="features__content__item">
          <HomeIcon />
          <h5 className="features__content__item__heading">Feel at home</h5>
          <p className="features__content__item__paragraph">
            Our people will do their best to make u feel like in your own home
          </p>
        </div>
        <div className="features__content__item">
          <StaffIcon />
          <h5 className="features__content__item__heading">Qualified Staff</h5>
          <p className="features__content__item__paragraph">
            Our people will do their best to make u feel like in your own home
          </p>
        </div>
        <div className="features__content__item">
          <MapIcon />
          <h5 className="features__content__item__heading">
            All over the Europe
          </h5>
          <p className="features__content__item__paragraph">
            Our people will do their best to make u feel like in your own home
          </p>
        </div>
        <div className="features__content__item">
          <DisabledIcon />
          <h5 className="features__content__item__heading">
            Support for the disabled people
          </h5>
          <p className="features__content__item__paragraph">
            Our people will do their best to make u feel like in your own home
          </p>
        </div>
        <div className="features__content__item">
          <StatsIcon />
          <h5 className="features__content__item__heading">Great statistics</h5>
          <p className="features__content__item__paragraph">
            Our people will do their best to make u feel like in your own home
          </p>
        </div>
        <div className="features__content__item">
          <FoodIcon />
          <h5 className="features__content__item__heading">
            Plenty of activity
          </h5>
          <p className="features__content__item__paragraph">
            Our people will do their best to make u feel like in your own home
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
