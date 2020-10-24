import React from 'react'

export default function MobileMenu() {
  return (
    <div id="mobileMenu" className="mobile-menu">
      <ul>
        <li><a href="/">Features</a></li>
        <li><a href="/">Pricing</a></li>
        <li><a href="/">Resources</a></li>
        <li><hr className="menu-line"/></li>
        <li><a href="/">Login</a></li>
        <li><a href="/">Sign Up</a></li>
      </ul>
    </div>
  )
}
