import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleCancel = () => {
    setName('');
    setEmail('');
    setMessage('');
  };



  const handleJoin = (e) => {
    e.preventDefault();
    alert('Email sent successfully!');
    emailjs
      .sendForm(
        "service_6nmfqeo",
        'template_3h6p845',
        form.current,
        'ID_DezrEgFPPN3IYo'
      )
      .then(
        (result) => {
          console.log("done");
        },
        (error) => {
          console.log(error);
        }
      );

      setName('');
      setEmail('');
      setMessage('');
  };

  return (
    <div className="contact-container">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>ME</span>
              </div>
            </div>
            <div className="screen-body-item">
              <form
                className="contact-form"
                netlify
                ref={form}
                onSubmit={handleJoin}
              >
                <div className="input-container">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    name="uname"
                    onChange={handleNameChange}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="input-container">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    name="email"
                    onChange={handleEmailChange}
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="input-container">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    value={message}
                    name="msg"
                    onChange={handleMessageChange}
                    placeholder="Your Message"
                    className="msg"
                    required
                  ></textarea>
                </div>
                <button type='button' className="btn cancel-button"  onClick={handleCancel}>
                  CANCEL
                </button>
                <button type="submit" className="btn submit-button">SEND</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
