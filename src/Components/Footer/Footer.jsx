import React from "react";
import "./Footer.css";

const backgroundPattern = "/images/footerbg.png";
const contactUsText = "/images/Contact Us.png";
const instagramIcon = "/images/insta.png";
const linkedinIcon = "/images/linkedin.png";
const facebookIcon = "/images/facebook.png";
const xIcon = "/images/X.png";
const nitsHacksLogo = "/images/Nitshackslogo.png";

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${backgroundPattern})` }}>
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-left">
            <div className="contact-section">
              <img src={contactUsText} alt="Contact Us" className="contact-us-img" />

              <div className="social-icons">
                <a
                  href="https://www.instagram.com/nitshacks?igsh=MXFlbXY5azd6YTJi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagramIcon} alt="Instagram" className="icon" />
                </a>
                <a
                  href="https://in.linkedin.com/in/nitshacks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedinIcon} alt="LinkedIn" className="icon" />
                </a>
                <a
                  href="https://www.facebook.com/NITSHacks/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebookIcon} alt="Facebook" className="icon" />
                </a>
                <a
                  href="https://x.com/nitshacks?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={xIcon} alt="X (Twitter)" className="icon" />
                </a>
              </div>

              <p className="footer-email">nitshacks.nits@gmail.com</p>
            </div>
          </div>

          <div className="footer-center">
            <img src={nitsHacksLogo} alt="Nits Hacks Logo" className="nits-logo" />
          </div>

          <div className="footer-right">
            <h3 className="reach-title">How to Reach?</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.080553857051!2d92.79180337473419!3d24.758427077996007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49dcb63bae9b%3A0x81efa836714a289b!2sNational%20Institute%20of%20Technology%2C%20Silchar!5e0!3m2!1sen!2sin!4v1761330758712!5m2!1sen!2sin"
                className="map-frame"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NIT Silchar Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Made By GDG On Campus NIT SILCHAR</p>
          <p>Copyright 2025, Nits Hacks 8.0, National Institute of Technology, Silchar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
