import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Länkar */}
        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li><Link to={'/about'}>Om oss</Link></li>
            <li><Link to={'/careers'}>Jobba hos oss</Link></li>
            <li><Link to={'/contact'}>Kontakt</Link></li>
            <li><Link to={'/policy'}>Integritetspolicy</Link></li>
          </ul>
        </div>

        {/* Kontakt */}
        <div className="footer-section">
          <h4>Kontakt</h4>
          <p>📍 Karlstad, Sverige</p>
          <p>📞 +46 123 456 789</p>
          <p>✉ info@citycomfort.se</p>
        </div>

        {/* Sociala medier */}
        <div className="footer-section">
          <h4>Följ oss</h4>

          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} City Comfort Hotel. Alla rättigheter reserverade.
      </div>

    </footer>
  );
}

export default Footer;