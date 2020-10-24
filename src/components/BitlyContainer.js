import React from 'react'

export default function BitlyContainer(props) {
  return (
    <ul id="bitlyLinks" className="bitlyLinksList">
      { props.state.bitly.map(item => (
        <li className="bitlyLinks" key={item[0]}>
          <p className="linkText linkLong">{item[1]}</p>
          <hr className="linkLine"/>
          <div className="desktopContainer">
            <p className="linkText linkShort">{item[2]}</p>
            <div className="linkButtonContainer">
              <button id={ `copyButton${item[0]}` } onClick={ ()=>{props.copy(item[0], item[2])} } className="copyButton colorDefault">Copy</button>
            </div>
          </div>
        </li>
      )) }
    </ul>
  )
}