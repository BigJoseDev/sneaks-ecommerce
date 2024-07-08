import "../Footer/Footer.css";
import Facebook from "../../assets/images/Facebook.png";
import Twitter from "../../assets/images/Twitter.png";
import instagram from "../../assets/images/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <h1>SNEAKS</h1>
      </div>
      <div className="footer-links">
        <div>
          <h3 className="links-title">Quick Links</h3>
          <ul className="links-items">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-about">
            <h3 className="links-title">About</h3>
            <ul className="links-items">
              <li>FAQS</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Terms of Service</li>
            </ul>
        </div>
        <div className="socials">
          <h3>Social Media</h3>
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
          <h3>Newsletter</h3>
          <p>Subscribe for latest updates</p>
          <input type="text" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
