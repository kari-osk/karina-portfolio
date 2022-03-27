import React from 'react'
import './styles.css'
import photo from '../../assets/perfil.svg'

export default function Hero() {
  function scrollToComponent(id) {
    document.getElementById(id).scrollIntoView()
  }
  return (
    <main className="hero" id="hero">
      <section className="hero-container">
        <div className="hero-text">
          <p>Hello, my name is</p>
          <br />
          <h1>Karina Osuka</h1>
          <h2>I'm a Front-end developer</h2>
          <button
            className="button"
            onClick={() => scrollToComponent('projects')}
          >
            <span>Check my recent projects</span>
          </button>
        </div>
        <div>
          <img className="hero-image" src={photo} alt="Karina Osuka" />
        </div>
      </section>
    </main>
  )
}
