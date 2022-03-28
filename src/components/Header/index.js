import logo from '../../assets/logo.svg'
import './styles.css'

export default function Header() {
  function scrollToComponent(id) {
    document.getElementById(id).scrollIntoView()
  }

  return (
    <header className="header">
      <nav className="header-navbar">
        <img
          src={logo}
          className="logo-header"
          alt="orange logo"
          onClick={() => scrollToComponent('hero')}
        />

        <ul className="menu">
          <li
            className="item-menu"
            onClick={() => scrollToComponent('projects')}
          >
            Projects
          </li>
          <li className="item-menu" onClick={() => scrollToComponent('about')}>
            About
          </li>

          <li
            className="item-menu"
            onClick={() => scrollToComponent('contact')}
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  )
}
