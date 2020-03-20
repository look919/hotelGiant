import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { confirmOrder } from './../actions/orders';
import PropTypes from 'prop-types';

import { PurchaseIcon, ArrowLeft } from '../img/Icons';

const OrderConf = ({ confirmOrder, ...props }) => {
  useEffect(() => {
    confirmOrder(props.match.params.id);
  }, []);

  return (
    <section className="orderConf">
      <nav className="bookpage__nav">
        <NavLink to="/" className="sidenav__users">
          <ArrowLeft />
          <label className="sidenav__users__label">Main page</label>
        </NavLink>
        <NavLink to="/bookpage" className="sidenav__book">
          <PurchaseIcon />
          <label className="sidenav__users__label">Book now!</label>
        </NavLink>
      </nav>
      <div className="orderConf__headings">
        <h1 className="heading-4 orderConf__heading">
          Your order has been successfully confirmed!
        </h1>
        <h3 className="heading-4 orderConf__subheading">
          You can close this page now.
        </h3>
      </div>
    </section>
  );
};
OrderConf.propTypes = {
  confirmOrder: PropTypes.func.isRequired
};

export default connect(null, { confirmOrder })(OrderConf);
