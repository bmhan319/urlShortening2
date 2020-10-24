import React from 'react'

export default function Form(props) {
  return (
    <form className="shorten-container shorten-container-top" onSubmit={props.submitLink}>
      <div id="inputTextContainer" className="inputTextContainer"> {/* added this div for ::after in css */}
      <input id="inputText" className="input input-text" name="long_url" type="text" placeholder="Shorten a link here..." />
      </div>
      <input className="input input-submit" type="submit" value="Shorten It!" />
    </form>
  )
}