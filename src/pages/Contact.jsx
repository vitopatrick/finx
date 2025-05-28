/*eslint-disable */
import React, { useRef } from "react";
import { toast } from "react-toastify";
import contactImage from "../img/contact.png";
import { FaEnvelope, FaUser, FaComments, FaPen } from "react-icons/fa";
import "../styles/pages.css";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const toastConfig = {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (
      !emailRef.current.value ||
      !nameRef.current.value ||
      !subjectRef.current.value ||
      !messageRef.current.value
    ) {
      toast.error("Please fill all fields", toastConfig);
      return;
    }

    // Here you would typically send the message to your backend
    toast.success("Message sent successfully!", {
      ...toastConfig,
      position: "top-center",
    });

    // Clear form
    e.target.reset();
  };

  return (
    <div className="page-container">
      <div className="page-content fade-in">
        <div className="page-header">
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-subtitle">
            Have questions about our platform? We're here to help. Send us a
            message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-image-container">
            <img
              src={contactImage}
              alt="Contact us"
              className="contact-image"
            />
          </div>

          <form className="contact-form" onSubmit={sendMessage}>
            <div className="form-group">
              <label className="form-label">
                <FaUser className="input-icon" /> Name
              </label>
              <input
                type="text"
                ref={nameRef}
                className="form-input"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <FaEnvelope className="input-icon" /> Email
              </label>
              <input
                type="email"
                ref={emailRef}
                className="form-input"
                placeholder="Your email address"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <FaPen className="input-icon" /> Subject
              </label>
              <input
                type="text"
                ref={subjectRef}
                className="form-input"
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <FaComments className="input-icon" /> Message
              </label>
              <textarea
                ref={messageRef}
                className="form-textarea"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="form-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
