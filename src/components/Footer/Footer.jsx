import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-socials">
          <Link className="footer-link" to="/">
            <img src={''} alt="github" className="footer-logo-img" />
          </Link>
          <Link className="footer-link" to="/">
            <img src={''} alt="linkedin" className="footer-logo-img" />
          </Link>
        </div>
        <div className="form-copy">
          <span className="footer-copy">
            Desarrollado por Francisco Vasquez
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
