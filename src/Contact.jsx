import PropTypes from "prop-types";
import { useState } from "react";
import "./normalize.css";
import "./style.css";
import Email from "./assets/icons/email.svg";
import Phone from "./assets/icons/phone.svg";
import LiveImg1024 from "./assets/images/live-img_1024.jpg";
import LiveImg768 from "./assets/images/live-img_768.jpg";
import LiveImg512 from "./assets/images/live-img_512.jpg";

function Contact() {
  return (
    <>
      <div>
        <div className="info-section">
          <h2 className="span">Contact Us</h2>
          <p className="span">
            Für Booking- und Autogrammanfragen oder einfach nur Komplimente.
          </p>
          <p className="span">
            cBernardy Werbung für Commander Nilpfred
            <br />
            Am Brennermoor 39
            <br />
            23843 Bad Oldesloe
          </p>
          <img src={Phone} alt="Phone icon" width="32px" className="phone" />
          <p>+49 (0) 4531 679446</p>
          <a href="mailto:commander@nilpfred.de">
            <img src={Email} alt="Email icon" width="32px" className="email" />
          </a>
          <p>commander@nilpfred.de</p>
        </div>
        <div className="live-img-container">
          <img
            srcSet={`${LiveImg1024} 1024w, ${LiveImg768} 768w, ${LiveImg512} 512w`}
            alt="Live picture"
            className="live-img"
          />
        </div>
      </div>
    </>
  );
}

export default Contact;
