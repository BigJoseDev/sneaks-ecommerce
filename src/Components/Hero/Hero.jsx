import "../Hero/Hero.css";
import React from "react";
import HomeSneaker from "../../assets/images/HomeSneaker.png";
import { Link } from "react-router-dom";

const Hero = () => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    }

  return (
    <div className="hero">
      <div className="left-hero">
        <h1>Elevate your Style, Lace Up and Level Up.</h1>
        <p>
          Step into style and comfort with our collection of shoes curated for
          you. we've got your feet covered with our diverse selection of
          footwear, designed to keep you looking great all day long.
        </p>
        <Link to = '/products' style={linkStyle}> <button>SHOP NOW</button></Link>
      </div>
      <div className="right-hero">
        <img src={HomeSneaker} alt="" />
      </div>
    </div>
  );
};

export default Hero;
