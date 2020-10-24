import React from 'react'
import logo from '../img/logo.svg'

export default function Header(props) {
  return (
    <header className="header">
     <div className="logo-container">
       <img className="logo" src={logo} alt="shortly logo" />
     </div>

     <div className="menu">
       <div className="full-menu">
          <ul className="left">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <ul className="right">
            <li>Login</li>
            <li className="header-button">Sign Up</li>
          </ul>
       </div>

       <div onClick={props.menu} className="hamburger">
         <span className="hamburger-lines menu-top"></span>
         <span className="hamburger-lines menu-mid"></span>
         <span className="hamburger-lines menu-bottom"></span>
       </div>
     </div>
    </header>
  )
}
