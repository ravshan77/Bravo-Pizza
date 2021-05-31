import React from "react";
import "./About.css";
import check from "./About-images/check.png";
import group from "./About-images/group-img.png";
import team1 from "./About-images/team-1.jpg";
import team2 from "./About-images/team-2.jpg";
import team3 from "./About-images/team-3.jpg";
import team4 from "./About-images/team-4.jpg";
import team5 from "./About-images/team-5.jpg";
import team6 from "./About-images/team-6.jpg";
import team7 from "./About-images/team-7.jpg";
import team8 from "./About-images/team-8.jpg";
import instagram from "../Footer/Footer-images/instagram.png";
import facebook from "../Footer/Footer-images/facebook.png";
import twitter from "../Footer/Footer-images/twitter.png";
import youTube from "../Footer/Footer-images/utube.png";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="img-txt-top">
        <div className="right-img">
          <img src={group} className="image1" />
        </div>

        <div className="lefted-txt">
          <h3 className="left-heading">OUR PROMISE</h3>
          <p className="para-one">
            Consistent. Convenient. Cost-effective. You never have to wonder
            what to expect from Piizalian products because we work hard to make
            sure they perform to very high standards
          </p>
          <p className="para-two">
            We manufacture with precisionweight and performance every time We
            operate in accordance with strict food safety guidelines to ensure a
            quality product.
          </p>
          <ul>
            <li>
              <img src={check} className="checkImg" />
              Our facilities are regularly audited against the Global Food
              Safety Initiative Standard SQF (Safe Quality Food)
            </li>
            <li>
              <img src={check} className="checkImg" />
              We employ the HACCP (Hazard Analysis and Critical Control Points)
              system to ensure the integrity of our
            </li>
            <li>
              <img src={check} className="checkImg" />
              We employ the HACCP (Hazard Analysis and Critical Control Points)
            </li>
            <li>
              <img src={check} className="checkImg" />
              We audit and test each shift on a daily basis
            </li>
          </ul>
        </div>
      </div>

<div className="title-of-team">
    <p className="title-heading">
        MEET OUR TEAM
    </p>
</div>
      {/* here below four grid images start */}
      <div className="grid-image-wrapper">
        <div className="grid-image">
          <img src={team1} className="image-team" />
          <p className="z-index">Head chef</p>
          <p className="bold-txt">SAM RICHARDSON</p>
          <p className="grid-txt">Everything We Pizza, We Pizza With Love. Designer Fastfood.</p>
          <div className="grid-icons">
            <a>
              <img src={instagram} />
            </a>
            <a>
              <img src={facebook} />
            </a>
            <a>
              <img src={twitter} />
            </a>
            <a>
              <img src={youTube} />
            </a>
          </div>
        </div>

        <div className="grid-image">
          <img src={team2} className="image-team" />
          <p className="z-index">Sous Chef</p>
          <p className="bold-txt">JENNIFER HARPER</p>
          <p className="grid-txt">Everything We Pizza, We Pizza With Love. Designer Fastfood.</p>
          <div className="grid-icons">
            <a>
              <img src={instagram} />
            </a>
            <a>
              <img src={facebook} />
            </a>
            <a>
              <img src={twitter} />
            </a>
            <a>
              <img src={youTube} />
            </a>
          </div>
        </div>

        <div className="grid-image">
          <img src={team3} className="image-team" />
          <p className="z-index">Burger - Сhef</p>
          <p className="bold-txt">JONATHAN CORONADO</p>
          <p className="grid-txt">Everything We Pizza, We Pizza With Love. Designer Fastfood.</p>
          <div className="grid-icons">
            <a>
              <img src={instagram} />
            </a>
            <a>
              <img src={facebook} />
            </a>
            <a>
              <img src={twitter} />
            </a>
            <a>
              <img src={youTube} />
            </a>
          </div>
        </div>

        <div className="grid-image">
          <img src={team4} className="image-team" />
          <p className="z-index">Grill Chef</p>
          <p className="bold-txt">JORGE STUCKY</p>
          <p className="grid-txt">Everything We Pizza, We Pizza With Love. Designer Fastfood.</p>
          <div className="grid-icons">
            <a>
              <img src={instagram} />
            </a>
            <a>
              <img src={facebook} />
            </a>
            <a>
              <img src={twitter} />
            </a>
            <a>
              <img src={youTube} />
            </a>
          </div>
        </div>

        <div className="grid-image">
          <img src={team5} className="image-team" />
          <p className="z-index">Fry Chef</p>
          <p className="bold-txt">ANTHONY BACKER</p>
          <p className="grid-txt">Everything We Pizza, We Pizza With Love. Designer Fastfood.</p>
          <div className="grid-icons">
            <a>
              <img src={instagram} />
            </a>
            <a>
              <img src={facebook} />
            </a>
            <a>
              <img src={twitter} />
            </a>
            <a>
              <img src={youTube} />
            </a>
          </div>
        </div>

        <div className="grid-image">
          <img src={team6} className="image-team" />
          <p className="z-index">Roast Chef</p>
          <p className="bold-txt">LEA VICTORIA</p>
          <p className="grid-txt">Everything We Pizza, We Pizza With Love. Designer Fastfood.</p>
          <div className="grid-icons">
            <a>
              <img src={instagram} />
            </a>
            <a>
              <img src={facebook} />
            </a>
            <a>
              <img src={twitter} />
            </a>
            <a>
              <img src={youTube} />
            </a>
          </div>
        </div>

        <div className="grid-image">
          <img src={team7} className="image-team" />
          <p className="z-index">Pizza Chef</p>
          <p className="bold-txt">JUSTIN ROBERTO</p>
          <p className="grid-txt">Everything We Pizza, We Pizza With Love. Designer Fastfood.</p>
          <div className="grid-icons">
            <a>
              <img src={instagram} />
            </a>
            <a>
              <img src={facebook} />
            </a>
            <a>
              <img src={twitter} />
            </a>
            <a>
              <img src={youTube} />
            </a>
          </div>
        </div>

        <div className="grid-image">
          <img src={team8} className="image-team" />
          <p className="z-index ">Executive Chefv</p>
          <p>STEPHANIE REED</p>
          <p className="grid-txt">Everything We Pizza, We Pizza With Love. Designer Fastfood.</p>
          <div className="grid-icons">
            <a href="instagram.com">
              <img src={instagram} />
            </a>
            <a href="facebook.com">
              <img src={facebook} />
            </a>
            <a href="twitter.com">
              <img src={twitter} />
            </a>
            <a href="youtube.com">
              <img src={youTube} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
