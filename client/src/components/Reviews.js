import React from "react";
import Logo from "../img/logo.png";
import user1 from "../img/user-1.jpg";
import user2 from "../img/user-2.jpg";
import user3 from "../img/user-3.jpg";
import user4 from "../img/user-4.jpg";

const Reviews = () => (
  <section className="reviews">
    <h2 className="heading-2" id="reviews">
      Find out what our customers think about us
    </h2>
    <div className="reviews__content">
      <div className="reviews__left">
        <div className="reviews__image reviews__image--1">
          <img src={user1} className="reviews__photo" alt="user1" />
        </div>
        <div className="reviews__text reviews__text--1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio
          ligula, fermentum vel vehicula nec, fermentum sed tortor. Duis ligula
          nibh, consectetur vitae odio eu, maximus porta tortor. Aliquam auctor,
          nisi quis pellentesque vehicula.
        </div>

        <div className="reviews__image reviews__image--2">
          <img src={user2} className="reviews__photo" alt="user2" />
        </div>
        <div className="reviews__text reviews__text--2">
          Cras rutrum molestie ante id tempus. Suspendisse vel dui dapibus,
          facilisis ex vitae, rhoncus dui. Donec vitae arcu non ex fermentum
          tempor, quisque.
        </div>
      </div>
      <div className="reviews__middle">
        <img src={Logo} className="reviews__logo" alt="logo" />
      </div>
      <div className="reviews__right">
        <div className="reviews__image reviews__image--3">
          <img src={user3} className="reviews__photo" alt="user3" />
        </div>
        <div className="reviews__text reviews__text--3">
          In in magna ac diam vehicula sagittis. Etiam varius eget enim a
          tincidunt. In hac habitasse platea dictumst. Phasellus pretium
          bibendum vestibulum. Praesent convallis luctus tempus.
        </div>

        <div className="reviews__image reviews__image--4">
          <img src={user4} className="reviews__photo" alt="user4" />
        </div>
        <div className="reviews__text reviews__text--4">
          Quisque condimentum ante facilisis, pellentesque augue non, egestas
          nunc. Curabitur porta turpis magna, sed tempor justo rhoncus non.
          Aenean lobortis faucibus nunc ut viverra. Vestibulum orci dolor,
          imperdiet in lacinia quis, malesuada rutrum massa. Proin eget orci
          sollicitudin, aliquam turpis sit amet, lobortis felis.
        </div>
      </div>
    </div>
  </section>
);

export default Reviews;
