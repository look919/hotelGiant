import React from "react";

const Contact = () => (
  <section className="contact">
    <h2 className="heading-2" id="contact">
      Contact us
    </h2>
    <div className="contact__content">
      <form className="contact__content__form">
        <p className="contact__content__form__paragraph">
          If you have any questions send us a message to contact@hotelgiant.com
          or use the form bellow.
        </p>

        <input
          type="email"
          className="contact__content__form__input"
          placeholder="email@example.com"
        />
        <textarea
          className="contact__content__form__textarea"
          placeholder="your message"
        />
        <button className="btn contact__content__form__btn">Send</button>
      </form>
    </div>
  </section>
);

export default Contact;
