
import "./Footer.css";
import { FaInstagram, FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <img
          src="/src/assets/footer-logo.png"
          alt="NITS Hacks 8.0 Logo"
          className="footer-logo"
        />

        <div className="bottom-section">
          <div className="left-column">
            <button className="visit-btn">VISIT TECHNOESIS</button>

            <h2 className="contact-title">CONTACT US</h2>
            <div className="social-icons">
              <FaInstagram className="social-icon" />
              <FaLinkedin className="social-icon" />
              <FaFacebook className="social-icon" />
              <FaXTwitter className="social-icon" />
            </div>
            <p className="contact-email">nitshacks.nits@gmail.com</p>
          </div>

          <div className="right-column">
            <p className="map-title">How to reach ? </p>
            <iframe
              title="NIT Silchar Map"
              className="map-embed"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.7686074224844!2d92.79366297544475!3d24.75713707801488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374ef42d0e9c3d45%3A0x7c4f9c0f2bb1d8b3!2sNational%20Institute%20of%20Technology%2C%20Silchar!5e0!3m2!1sen!2sin!4v1699105200000!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="made-by">Made By GDG On Campus NIT SILCHAR</p>
          <hr className="footer-divider" />
          <p className="copyright">
            © 2025, NITS Hacks 8.0, National Institute of Technology, Silchar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
