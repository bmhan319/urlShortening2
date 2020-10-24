import React from 'react'
import MobileMenu from './MobileMenu'

export default function IntroSection() {
  return (
    <section className="sec1">
      <div className="intro-text-container">
        <h1 className="intro-title">More than just shorter links</h1>
        <p className="intro-text">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
        <button className="start-button intro-start-button">Get Started</button>
      </div>
      <div className="intro-image-container">
        <MobileMenu />
      </div>
    </section>
  )
}
