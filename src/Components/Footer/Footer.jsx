import "../Footer/Footer.css";
import Facebook from "../../assets/images/Facebook.png";
import Twitter from "../../assets/images/Twitter.png";
import instagram from "../../assets/images/instagram.png";
import { Link } from "react-router-dom";

const Footer = () => {

    
        const linkStyle = {
            textDecoration: 'none',
            color: 'inherit'
        }
  return (
    <div className="footer">
      <div className="footer-logo">
        <h1>SNEAKS</h1>
      </div>
      <div className="footer-links">


        <div className="quick-links">
          <h2 className="quick-links-title">Quick Links</h2>
          <ul className="quick-links-items">
           <Link to ='/' style={linkStyle}> <li>  Home</li> </Link>
           <Link to ='/' style={linkStyle}> <li>Products</li> </Link>
           <Link to ='/' style={linkStyle}> <li>About</li> </Link>
           <Link to ='/' style={linkStyle}> <li>Contact Us</li> </Link>
          </ul>
        </div>

        <div className="footer-about">
            <h2 className="links-title">About</h2>
            <ul className="about-links-items">
              <li>FAQS</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Terms of Service</li>
            </ul>
        </div>
        <div className="socials">
          <h2>Social Media</h2>
          <p>
            Follow us on social media to find out the latest updates on our
            progress
          </p>
          <div className="social-icons">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
        <div className="news-letter">
          <h2>Newsletter</h2>
          <p>Subscribe for latest updates</p>
          <input type="text" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
