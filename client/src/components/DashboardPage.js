import React from 'react';

import Header from './Header';
import SideNav from './SideNav';
import Description from './Description';
import Features from './Features';
import Rooms from './Rooms';
import Reviews from './Reviews';
import Contact from './Contact';
import Gallery from './Gallery';
import Footer from './Footer';

const DashboardPage = () => {
  return (
    <main className="container">
      <Header />
      <SideNav />
      <Description />
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
