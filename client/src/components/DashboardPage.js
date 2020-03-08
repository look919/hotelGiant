import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Header from './Header';
import SideNav from './SideNav';
import Description from './Description';
import Locations from './Locations';
import Features from './Features';
import Rooms from './Rooms';
import Reviews from './Reviews';
import Contact from './Contact';
import Gallery from './Gallery';
import Footer from './Footer';

const DashboardPage = () => {
  const is600px = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <main className="container">
      <Header />
      <SideNav />
      <Description />
      {is600px || <Locations />}
      <Features />
      <Rooms />
      <Reviews />
      <Contact />
      <Gallery />
      <Footer />
    </main>
  );
};

export default DashboardPage;
