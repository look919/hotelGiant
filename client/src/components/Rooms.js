import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllRooms } from './../actions/rooms';

import SingleRoom from './SingleRoom';

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
              img={room.photo}
              name={room.name}
              price={room.price}
              size={room.size}
              features={room.features}
              booking={booking}
            />
          ))}
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
