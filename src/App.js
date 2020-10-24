import React, {Component} from 'react';
import Header from './components/Header'
import IntroSection from './components/IntroSection'
import StatsSection from './components/StatsSection'
import BoostSection from './components/BoostSection'
import Footer from './components/Footer'
import './css/header.css'
import './css/intro-section.css'
import './css/mobile-menu.css'
import './css/stats-section.css'
import './css/form.css'
import './css/bitly.css'
import './css/boost-section.css'
import './css/footer.css'

class App extends Component {
  state = {
    menuOpen: false,
    longLink: "",
    shortLink: "",
    count: 1,
    bitly: []
  }

  //Closes Mobile menu if open when window is resized
  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    let width = window.innerWidth
    if (width > 600) {
      this.setState({menuOpen: false})
      document.getElementById("mobileMenu").style.display = "none"
    } 
  }

  //Open and close hamburger menu within the mobile site
  menu = () => {
    document.getElementById("mobileMenu").style.display = (this.state.menuOpen === false) ? "block" : "none"
    if (this.state.menuOpen === false) {
      this.setState({menuOpen: true})
    } else {
      this.setState({menuOpen: false})
    }
  }

  //Takes user input and error checks and correctly formats text then sends it out for an API call
  submitLink = (e) => {
    e.preventDefault()
    const link = document.getElementById("inputText").value
    const prefix = /http:\/\//gi
    const prefixSecure = /https:\/\//gi
    const formattedLink = ( link.match(prefix) || link.match(prefixSecure) ) ? link : "https://" + link

    if (link.length === 0) {
      document.getElementById('inputTextContainer').classList.add("error")
      document.getElementById('inputText').style.border = "2px solid var(--Red)"
      document.querySelector('.shorten-container').classList.add("shorten-container-top-error")
      document.querySelector('.shorten-container').classList.remove("shorten-container-top")
    } else {
      document.getElementById('inputTextContainer').classList.remove("error")
      document.getElementById('inputText').style.border = "0px"
      document.querySelector('.shorten-container').classList.remove("shorten-container-top-error")
      document.querySelector('.shorten-container').classList.add("shorten-container-top")
      this.callAPI(formattedLink)
    }
  }

  //Makes call to Bitly API
  callAPI = async (formattedLink) => {
    const TOKEN = process.env.REACT_APP_BITLY_TOKEN
    const bitly = "https://api-ssl.bitly.com/v4/shorten"
    const setting = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "long_url": formattedLink })
    }

    //Request data from Bitly
    const call = await fetch(bitly, setting)

    //Receive data and add data to State
    try {
      const data = await call.json()
      this.setState({
        longLink: data.long_url,
        shortLink: data.link,
        count: this.state.count + 1
      })
    } catch(err) {
      console.error(err)
    }

    //Adjusts the bitly array state by adding in newly aquired API data
    this.setState({
      bitly: [ ...this.state.bitly, [this.state.count, this.state.longLink, this.state.shortLink] ]
    })
  }

  //Copies selected shortlink to clipboard
  copy = (num, shortLink) => {
    const button = document.getElementById(`copyButton${num}`)
    const buttons = document.querySelectorAll('.copyButton')
    const dummy = document.createElement("textarea");
    
    //Create temp text input in order to select link and run 'copy' command
    document.body.appendChild(dummy);
    dummy.value = shortLink;
    dummy.select();
    document.execCommand("copy")
    document.body.removeChild(dummy);
    
    //Reset all copy button elements ro default color and text
    buttons.forEach( item => {
      item.innerHTML = "Copy"
      item.classList.remove('colorActive')
      item.classList.add('colorDefault')
    })
    
    //Change color and text of the selected copy button to reflect 'copy' action
    button.innerHTML = "Copied!"
    button.classList.remove('colorDefault')
    button.classList.add('colorActive')
  }

  render() {
    return (
      <div className="App">
        <Header menu={this.menu} />
        <IntroSection />
        <StatsSection  copy={this.copy} state={this.state} submitLink={this.submitLink}/>
        <BoostSection />
        <Footer />
      </div>
    )
  }
}

export default App;

