import React, { useState } from 'react';
import LocationItem from './LocationItem';
import ReactMapGL, { Marker } from 'react-map-gl';

export const Locations = () => {
  const hotels = [
    {
      name: 'Warsaw Zwyciestwa 32',
      latitude: 52.2334856,
      longitude: 21.0661903
    },
    {
      name: 'Bilbao Barrencalle 23',
      latitude: 43.2630051,
      longitude: -2.9349915
    },
    {
      name: 'Naples Spaccanapoli 8',
      latitude: 40.8359336,
      longitude: 14.2487826
    },
    {
      name: 'Brussels Bonheur 11',
      latitude: 50.8436709,
      longitude: 4.3674367
    },
    {
      name: 'Prague Pařížská Street 3',
      latitude: 50.0874654,
      longitude: 14.4212535
    }
  ];

  const [viewport] = useState({
    latitude: 47.2000338,
    longitude: 13.199959,
    width: '1000px',
    height: '700px',
    zoom: 4
  });
  return (
    <section className="locations">
      <h2 className="heading-2">You can find us all over the Europe</h2>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle={'mapbox://styles/wirkus919/ck6rtz1ff4syj1ioftcz8tu7j'}
        className="locations__map"
      >
        {hotels.map(hotel => (
          <Marker
            key={hotel.name}
            latitude={hotel.latitude}
            longitude={hotel.longitude}
          >
            <LocationItem town={hotel.name} />
          </Marker>
        ))}
      </ReactMapGL>
    </section>
  );
};

export default Locations;
