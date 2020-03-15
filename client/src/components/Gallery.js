import React from 'react';

import GalleryHotel1 from '../img/hotel-1.jpg';
import GalleryHotel2 from '../img/hotel-3.jpg';
import GalleryHotel3 from '../img/hotel-2.jpg';
import GalleryReception from '../img/gallery-reception.jpg';
import GalleryRoom1 from '../img/room-double.jpg';
import GalleryRoom2 from '../img/room1.jpg';
import GalleryRoom3 from '../img/family-room.jpg';
import GalleryGym from '../img/gallery-gym.jpg';
import GalleryHall from '../img/gallery-hall.jpg';
import GalleryRestaurant from '../img/gallery-restaurant.jpg';
import GalleryView from '../img/gallery-view.jpg';
import GalleryGameRoom from '../img/gallery-gameroom.jpg';

const Gallery = () => (
  <section className="gallery">
    <h2 className="heading-2" id="gallery">
      Gallery
    </h2>
    <div className="gallery__content">
      <img
        src={GalleryHotel1}
        className="gallery__photo gallery__photo--1 gallery__photo--low-scale"
        alt="gallery 1"
      />
      <img
        src={GalleryReception}
        className="gallery__photo gallery__photo--10"
        alt="gallery 2"
      />
      <img
        src={GalleryRoom1}
        className="gallery__photo gallery__photo--3"
        alt="gallery 3"
      />
      <img
        src={GalleryRoom2}
        className="gallery__photo gallery__photo--4 gallery__photo--low-scale"
        alt="gallery 4"
      />
      <img
        src={GalleryHall}
        className="gallery__photo gallery__photo--5 gallery__photo--low-scale"
        alt="gallery 5"
      />
      <img
        src={GalleryRestaurant}
        className="gallery__photo gallery__photo--6 gallery__photo--medium-scale"
        alt="gallery 6"
      />
      <img
        src={GalleryHotel2}
        className="gallery__photo gallery__photo--7"
        alt="gallery 7"
      />
      <img
        src={GalleryView}
        className="gallery__photo gallery__photo--8 gallery__photo--medium-scale"
        alt="gallery 8"
      />
      <img
        src={GalleryGym}
        className="gallery__photo gallery__photo--9"
        alt="gallery 9"
      />
      <img
        src={GalleryGameRoom}
        className="gallery__photo gallery__photo--2 gallery__photo--low-scale"
        alt="gallery 10"
      />
      <img
        src={GalleryHotel3}
        className="gallery__photo gallery__photo--11"
        alt="gallery 11"
      />
      <img
        src={GalleryRoom3}
        className="gallery__photo gallery__photo--12"
        alt="gallery 12"
      />
    </div>
  </section>
);

export default Gallery;
