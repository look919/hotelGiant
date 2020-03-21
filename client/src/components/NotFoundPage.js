import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="notFound">
      <div className="notFound__content">
        <h1 className="heading-2 notFound__heading">404 Page not found</h1>
        <p className="notFound__p">
          It seems that page that you are looking for does not exists or is not
          available right now.
        </p>
        <NavLink to="/" className="notFound__link">
          Go to the main page
        </NavLink>
      </div>
    </section>
  );
};

export default NotFoundPage;
