import React from 'react'
import logo from '../img/logo.svg'
import fb from '../img/icon-facebook.svg'
import twitter from '../img/icon-twitter.svg'
import pinterest from '../img/icon-pinterest.svg'
import instagram from '../img/icon-instagram.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <img className="footer-logo" src={logo} alt="shortly logo" />
      </div>

      <div className="footer-link-container footer-features-container">
        <h6 className="footer-title footer-feature-title">Features</h6>
        <ul>
          <li className="footer-link footer-feature-link1"><a href="/">Link Shortening</a></li>
          <li className="footer-link footer-feature-link2"><a href="/">Branded Links</a></li>
          <li className="footer-link footer-feature-link3"><a href="/">Analytics</a></li>
        </ul>
      </div>

      <div className="footer-link-container footer-resources-container">
        <h6 className="footer-title footer-resources-title">Resources</h6>
        <ul>
          <li className="footer-link footer-resources-link1"><a href="/">Blog</a></li>
          <li className="footer-link footer-resources-link2"><a href="/">Developers</a></li>
          <li className="footer-link footer-resources-link3"><a href="/">Support</a></li>
        </ul>
      </div>

      <div className="footer-link-container footer-company-container">
        <h6 className="footer-title footer-company-title">Company</h6>
        <ul>
          <li className="footer-link footer-company-link1"><a href="/">About</a></li>
          <li className="footer-link footer-company-link2"><a href="/">Our Team</a></li>
          <li className="footer-link footer-company-link3"><a href="/">Careers</a></li>
          <li className="footer-link footer-company-link3"><a href="/">Contact</a></li>
        </ul>
      </div>

      <div className="footer-social-container">
        <ul className="footer-social-list">
          <li className="footer-social footer-facebook"><a href="/"><img  className="social facebook" src={fb} alt="facebook icon" /></a></li>
          <li className="footer-social footer-twitter"><a href="/"><img   className="social twitter" src={twitter} alt="twitter icon" /></a></li>
          <li className="footer-social footer-pinterest"><a href="/"><img className="social pinterest"  src={pinterest} alt="pinterest icon" /></a></li>
          <li className="footer-social footer-instagram"><a href="/"><img className="social instagram"  src={instagram} alt="instagram icon" /></a></li>
        </ul>
      </div>

      {/* Matrix used to create filter to change hover color of social icons to Cyan */}
      <svg className="svgFilter" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="colorFilter">
            <feColorMatrix
                      colorInterpolationFilters="sRGB"
                      type="matrix"
                      values="  0.16 0 0 0 0
                                0 0.81 0 0 0
                                0 0 0.81 0 0
                                0 0 0 1 0 "/>
          </filter>
          ...
        </defs>
      </svg>

    </footer>
  )
}
