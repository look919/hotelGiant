import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    devInfo: false
  });

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = async e => {
    e.preventDefault();

    setFormData({
      ...formData,
      devInfo: true
    });
  };
  return (
    <section className="contact">
      <h2 className="heading-2" id="contact">
        Contact us
      </h2>
      <div className="contact__content">
        <form className="contact__content__form" onSubmit={e => onSubmit(e)}>
          <p className="contact__content__form__paragraph">
            If you have any questions send us a message to
            contact@hotelgiant.com or use the form bellow.
          </p>

          <input
            type="email"
            value={formData.email}
            name="email"
            onChange={e => onChange(e)}
            className="contact__content__form__input"
            placeholder="email@example.com"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={e => onChange(e)}
            className="contact__content__form__textarea"
            placeholder="your message"
          />
          <button className="btn contact__content__form__btn">Send</button>
          {formData.devInfo && <p>Didnt create this funcionality just yet</p>}
        </form>
      </div>
    </section>
  );
};
export default Contact;
