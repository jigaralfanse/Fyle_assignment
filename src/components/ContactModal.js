import React from 'react';
import './Hero.css';

const ContactModal = ({ closeModal }) => {
  
  return (
    <>
      <div className="modal active " id="modal" >
        <div className="modal-header">
          <h4>Talk to us</h4>
          <button className="close-button" onClick={closeModal}>&times;</button>
        </div>
        <div className="modal-body">
          <form action="https://getform.io/f/apjmnkya" method="POST">
            <div className="form-floating mb-3">
              <input
                name="email"
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="name-fields">
              <div className="form-floating">
                <input
                  name="first"
                  type="text"
                  className="form-control"
                  id="floatingFirstName"
                  placeholder="First Name"
                  required
                />
                <label htmlFor="floatingFirstName">First Name</label>
              </div>
              <div className="form-floating">
                <input
                  name="last"
                  type="text"
                  className="form-control"
                  id="floatingLastName"
                  placeholder="Last Name"
                  required
                />
                <label htmlFor="floatingLastName">Last Name</label>
              </div>
            </div>
            <div className="terms-and-conditions">
              <input
                type="checkbox"
                className="form-check-input margin"
                id="check1"
                required
              />
              <label htmlFor="check1">
                I agree to Fyle's terms and conditions, and provide
                consent to send me communication.
              </label>
            </div>
            <button className="btn" type="submit">Contact Us</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactModal;
