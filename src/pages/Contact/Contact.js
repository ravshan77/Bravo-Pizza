import React from "react";
import "./Contact.css";
import orderTop from "./contact-images/order-top.png";
import orderBottom from "./contact-images/order-bottom.png";
import home from "./contact-images/home.png";
import message from "./contact-images/message.png";
import phone from "./contact-images/phone.png";
import time from "./contact-images/time.png";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      {/* BACKGROUND-IMAGE */}
      <div className="contact-order-top-img">
        <img src={orderTop} />
      </div>
      {/* BACKGROUND-IMAGE */}

      <div className="contact-details">
        <div className="left-side-info">
<<<<<<< HEAD
          <h2>Get in touch with us</h2>
=======
          <h2>Contact Details</h2>
>>>>>>> 4d5d62b400acfabb78661d554c0e47557f94a6eb
          <div className="contact-txt">
            <ul className="contact-leftSide-icons">
              <li>
                <img src={home} />
                <a href="	https://goo.gl/maps/CpHRingT7yBRYNAR8">
                  55 Drumburgh Ave, Carlisle CA3 0PD, UK
                </a>
              </li>
              <li>
                <img src={phone} />
                <a href="tel:+998990913021">
                  +91 123 456 7890, +91 123 456 789
                </a>
              </li>
              <li>
                <img src={message} />
                <a href="mailto:feedback@dodopizza.com">
                  feedback@dodopizza.com
                </a>
              </li>
              <li>
                <img src={time} />
                <a>Monday – Friday: 10 am – 10pm Sunday: 11 am – 9pm</a>
              </li>
            </ul>
          </div>
        </div>
        

        {/* RIGHTSIDE INPUTS */}

        <div className="contact-rightSide-inputs">
          {/* <h1>Get in touch</h1> */}
          <div className="fullname">
            <input type="email" placeholder="Fullname *" />
          </div>

          <div className="email">
            <input type="text" placeholder="Email *" />
          </div>

          <div className="phone">
            <input type="text" placeholder="Phone *" />
          </div>

<<<<<<< HEAD
          <div className="adress">
            <input type="text" placeholder="Adress *" />
          </div>

          <div className="textarea">
            <textarea placeholder="Message *" />
          </div>
          <div className="submit-btn">
          <button type="submit">Send</button>
          </div>
=======
          <div className="textarea">
            <textarea placeholder="Message *" />
          </div>

          <button type="submit">Send</button>
>>>>>>> 4d5d62b400acfabb78661d554c0e47557f94a6eb
        </div>
      </div>
      {/* BACKGROUND-IMAGE */}
      <div className="contact-order-bottom-img">
        <img src={orderBottom} />
      </div>
      {/* BACKGROUND-IMAGE */}
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23980.70729894108!2d69.26330633955078!3d41.29606140000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8be3dee89f41%3A0x827cbacf50c0cf1d!2sDodo%20Pitstsa!5e0!3m2!1sen!2s!4v1621607458702!5m2!1sen!2s"
          width="100%"
          height="540"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>

      
    </div>
  );
};

export default Contact;

