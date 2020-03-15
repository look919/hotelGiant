import React from 'react';

import hotelOne from '../img/hotel-1.jpg';
import hotelTwo from '../img/hotel-2.jpg';
import hotelThree from '../img/hotel-3.jpg';

const Description = () => (
  <section className="description">
    <h2 className="heading-2 description__header" id="description">
      About us
    </h2>
    <div className="description__photosAndInfo">
      <img
        src={hotelOne}
        className="description__photo description__photo--1"
        alt="hotel-1"
      />
      <img
        src={hotelTwo}
        className="description__photo description__photo--2"
        alt="hotel-2"
      />
      <img
        src={hotelThree}
        className="description__photo description__photo--3"
        alt="hotel-3"
      />
      <div className="description__info">
        <p className="description__info__paragraph">
          Hotel Giant is number one rated Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Quisque convallis tellus at turpis
          consectetur finibus. Curabitur sed eleifend ipsum. Phasellus ornare
          justo nec odio dapibus convallis. Maecenas vel sodales risus, pulvinar
          consectetur augue. Aenean hendrerit tincidunt nunc sed condimentum.
          Suspendisse feugiat tempor neque, sit amet accumsan metus maximus
          vitae. Nulla turpis ligula, ultrices nec leo at, posuere viverra diam.
          Fusce consectetur, massa ac dictum ultrices, nibh libero pellentesque
          dui, nec aliquet metus dui id eros. Nam tincidunt iaculis finibus.
          Vestibulum eu vulputate sapien. Praesent bibendum ligula libero,
          mattis bibendum magna feugiat sit amet. Praesent eu feugiat nisl. In
          purus ipsum, lacinia ac nibh vel, rhoncus finibus enim.
        </p>
      </div>
    </div>
  </section>
);

export default Description;
