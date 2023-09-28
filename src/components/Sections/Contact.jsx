import React from "react";
import "../../styles/Sections/Contact.css";
import "../../styles/Buttons.css";
const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-wrapper">
        <h1 className="">Contact</h1>
        <div className="contact-desc">
          Feel free to reach out to me for any questions or opportunities!
        </div>
        <form className="contact-form">
          <input
            className="contact-input"
            placeholder="Your Email"
            name="from_email"
          />
          <input
            className="contact-input"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            className="contact-input"
            placeholder="Subject"
            name="subject"
          />
          <textarea
            className="contact-textarea"
            placeholder="Message"
            rows="4"
            name="message"
          />
          <button
            className="contact-btn btn btn-color-1"
            type="submit"
            value="Send"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
