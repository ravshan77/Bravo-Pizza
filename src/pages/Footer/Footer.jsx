import React from "react";
import "./Footer.css";
import instagram from "./Footer-images/instagram.png";
import facebook from "./Footer-images/facebook.png";
import twitter from "./Footer-images/twitter.png";
import youTube from "./Footer-images/utube.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="inner-txt">
        <div className="div-one">
          <h4>LOCATION</h4>
          <p>8721 M Central Avenue,</p>
          <p>Los Angeles, CA 90036,</p>
          <p>United States</p>
        </div>

        <div className="div-one">
          <h4>WORKING HOURS</h4>
          <p>Mon-Fri: 9:00AM - 10:00PM</p>
          <p>Saturday: 10:00AM - 8:30PM</p>
          <p>Sunday: 12:00PM - 5:00PM</p>
        </div>

        <div className="div-one">
          <h4>ORDER NOW</h4>
          <p>Quaerat neque purus ipsum at neque dolor primis tempus</p>
          <p>789-654-3210</p>
        </div>

        <div className="div-one">
          <h4>FOLLOW US</h4>
          <p>Quaerat neque purus ipsum at neque dolor primis tempus</p>
          <p>Quaerat neque purus ipsum at  </p>
        </div>
      </div>
        <div className="icon-links">
            {/* <div> */}

            {/* </div> */}
          <div className="icons">
            <p>© Copyright 2021.All Rights Reserved</p>
            <a><img src={facebook} /></a>
             <a><img src={instagram} /></a>
             <a><img src={youTube} /></a>
            <a><img src={twitter} /></a>
          </div>
        </div>
    </div>
  );
};

export default Footer;
