import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllRooms } from './../actions/rooms';

import SingleRoom from './SingleRoom';
import RoomOne from '../img/room1.jpg';
import RoomTwo from '../img/room2.jpg';
import RoomThree from '../img/room3.jpg';
import DoubleRoom from '../img/room-double.jpg';
import FamilyRoom from '../img/family-room.jpg';
import Apartament from '../img/apartament.jpg';

const Rooms = ({ rooms, getAllRooms, booking }) => {
  useEffect(() => {
    getAllRooms();
  }, [getAllRooms]);

  return (
    <section className="rooms">
      <h2 className="heading-2" id="rooms">
        Check our rooms!
      </h2>
      <div className="rooms__content">
        {rooms.results &&
          rooms.data.data.map(room => (
            <SingleRoom
              key={room.name}
              //img={RoomOne}
              name={room.name}
              price={room.price}
              size={room.size}
              features={room.features}
              booking={booking}
            />
          ))}
        <SingleRoom
          img={RoomOne}
          name={'Room nr 1'}
          price={'33'}
          size={'8'}
          features={['none', 'none']}
          //booking={props.booking}
        />
        <SingleRoom
          img={RoomTwo}
          name="Room nr 2"
          price={'50'}
          size={'11'}
          features={['breakfast', 'none']}
          //booking={props.booking}
        />
        <SingleRoom
          img={RoomThree}
          name="Room nr 3"
          price={'84'}
          size={'15'}
          features={['breakfast', 'All Inclusive']}
          //booking={props.booking}
        />
        <SingleRoom
          img={DoubleRoom}
          name="Double bed room"
          price={'59'}
          size={'14'}
          features={['none', 'none']}
          //booking={props.booking}
        />
        <SingleRoom
          img={FamilyRoom}
          name="Family room (max 4 people)"
          price={'92'}
          size={'18'}
          features={['breakfast', 'none']}
          //booking={props.booking}
        />
        <SingleRoom
          img={Apartament}
          name="Apartament"
          price={'123'}
          size={'22'}
          features={['breakfast', 'All Inclusive']}
          //booking={props.booking}
        />
      </div>
    </section>
  );
};
Rooms.propTypes = {
  rooms: PropTypes.object.isRequired,
  getAllRooms: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  rooms: state.rooms
});
export default connect(mapStateToProps, { getAllRooms })(Rooms);
