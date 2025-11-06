import { useState } from "react";
import "./Navbar.css";
// import nitsHacksLogo from "../../../images/nits-hacks-logo.png";

const MobileNavLink = ({ href, children, onClick }) => {
  return (
    <a href={href} className="mobile-nav-link-button" onClick={onClick}>
      <span className="mobile-nav-link-text">{children}</span>
    </a>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <nav className="navbar-container max-w-screen">
      <div className="navbar-logo-container">
        <img
          src="/images/nits-hacks-logo.png"
          alt="NITS HACKS Logo"
          className="w-16 h-16 md:w-20 md:h-20"
        />
      </div>

      <div className="navbar-links-container-desktop">
        <a href="/#home" className="navbar-link">
          Home
        </a>
        <a href="/tracks" className="navbar-link">
          Tracks
        </a>
        <a href="/timeline" className="navbar-link">
          Timeline
        </a>
        <a href="/#sponsors" className="navbar-link">
          Sponsors
        </a>
        <a href="/faq" className="navbar-link">
          FAQ
        </a>
        <a href="/team" className="navbar-link">
          Teams
        </a>
      </div>

      <button
        className={isMenuOpen ? "navbar-toggle open" : "navbar-toggle"}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      <div
        className={isMenuOpen ? "mobile-menu-container show" : "mobile-menu-container"}
      >
        <div className="mobile-menu-logo-container">
          <img
            src="/images/nits-hacks-logo.png"
            alt="NITS HACKS Logo"
            className="navbar-logo"
          />
        </div>

        <MobileNavLink ink href="/#home" onClick={handleLinkClick}>
          Home
        </MobileNavLink>
        <MobileNavLink href="/tracks" onClick={handleLinkClick}>
          Tracks
        </MobileNavLink>
        <MobileNavLink href="/timeline" onClick={handleLinkClick}>
          Timeline
        </MobileNavLink>
        <MobileNavLink href="/#sponsors" onClick={handleLinkClick}>
          Sponsors
        </MobileNavLink>
        <MobileNavLink href="/faq" onClick={handleLinkClick}>
          FAQ
        </MobileNavLink>
        <MobileNavLink href="/team" onClick={handleLinkClick}>
          Teams
        </MobileNavLink>
      </div>
    </nav>
  );
};

export default Navbar;
