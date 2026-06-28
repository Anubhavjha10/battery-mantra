import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAssetUrl, brandText } from '../utils/helpers';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatusMsg('Please fill in required fields.');
      return;
    }
    setStatusMsg('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="main-content">
      {/* Breadcrumb Area */}
      <div
        className="breadcrumb-area breadcrumb-height"
        style={{ backgroundImage: `url(${getAssetUrl('assets/images/breadcrumb/bg/1-1-1920x400.jpg')})` }}
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12">
              <div className="breadcrumb-item text-night-rider">
                <h2 className="breadcrumb-heading">Contact Us</h2>
                <ul>
                  <li>
                    <Link to="/">Home /</Link>
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Begin Shipping Area */}
      <div className="shipping-area shipping-style-2 section-space-y-axis-100">
        <div className="container">
          <div className="row shipping-wrap py-5 py-xl-0">
            <div className="col-lg-4 col-sm-6">
              <div className="shipping-item">
                <div className="shipping-img">
                  <img src={getAssetUrl('assets/images/shipping/icon/phone.png')} alt="Phone Icon" />
                </div>
                <div className="shipping-content">
                  <h2 className="title">Phone/Fax</h2>
                  <p className="short-desc mb-0">
                    <a href="tel:09200920051" className="text-dark">09200920051</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 pt-4 pt-xl-0">
              <div className="shipping-item">
                <div className="shipping-img">
                  <img src={getAssetUrl('assets/images/shipping/icon/message.png')} alt="Email Icon" />
                </div>
                <div className="shipping-content">
                  <h2 className="title">Email/Web</h2>
                  <p className="short-desc mb-0">
                    <a href="mailto:info@batterymantra.com" className="text-dark">info@batterymantra.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 pt-4 pt-xl-0">
              <div className="shipping-item">
                <div className="shipping-img">
                  <img src={getAssetUrl('assets/images/shipping/icon/home.png')} alt="Address Icon" />
                </div>
                <div className="shipping-content">
                  <h2 className="title">Address:</h2>
                  <p className="short-desc mb-0">Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shipping Area End Here */}

      {/* Contact Form Area */}
      <div className="contact-form-area section-space-bottom-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-form-wrap">
                <div className="contact-img">
                  <img src={getAssetUrl('assets/images/contact/1-1-520x278.png')} alt="Contact Banner" />
                </div>
                <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
                  <h4 className="contact-form-title mb-7">Send Us a Message</h4>
                  <div className="group-input">
                    <div className="form-field me-xl-6">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name*"
                        className="input-field"
                        required
                      />
                    </div>
                    <div className="form-field mt-6 mt-xl-0">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email*"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-field mt-6">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="textarea-field"
                    ></textarea>
                  </div>
                  <div className="button-wrap mt-8">
                    <button
                      type="submit"
                      className="btn btn-custom-size lg-size btn-primary btn-secondary-hover rounded-0"
                    >
                      Post Comment
                    </button>
                    {statusMsg && (
                      <p className="form-message mt-3 mb-0" style={{ color: statusMsg.includes('Please') ? 'red' : 'green' }}>
                        {statusMsg}
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embed Map */}
      <div className="contact-with-map">
        <div className="contact-map">
          <iframe
            className="contact-map-size"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1613802584124!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Contact;
