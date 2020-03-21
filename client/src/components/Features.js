import React from 'react';

import {
  HomeIcon,
  StaffIcon,
  MapIcon,
  DisabledIcon,
  StatsIcon,
  FoodIcon
} from '../img/Icons';

const Features = () => (
  <section className="features">
    <h2 className="heading-2">Features</h2>

    <div className="features__container">
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
            Sed ut mauris sit amet mi auctor convallis. Integer placerat
            consectetur nibh
          </p>
        </div>
        <div className="features__content__item">
          <MapIcon />
          <h5 className="features__content__item__heading">
            All over the Europe
          </h5>
          <p className="features__content__item__paragraph">
            Pellentesque nulla elit, commodo imperdiet sem ullamcorper
          </p>
        </div>
        <div className="features__content__item">
          <DisabledIcon />
          <h5 className="features__content__item__heading">
            Support for the disabled people
          </h5>
          <p className="features__content__item__paragraph">
            Nam mollis sapien in velit volutpat, quis vehicula mi vehicula
          </p>
        </div>
        <div className="features__content__item">
          <StatsIcon />
          <h5 className="features__content__item__heading">Great statistics</h5>
          <p className="features__content__item__paragraph">
            Aliquam ut dui eget tortor vestibulum finibus faucibus sit amet nisi
          </p>
        </div>
        <div className="features__content__item">
          <FoodIcon />
          <h5 className="features__content__item__heading">
            Plenty of activity
          </h5>
          <p className="features__content__item__paragraph">
            Etiam quis nisi eu orci fermentum dapibus
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
