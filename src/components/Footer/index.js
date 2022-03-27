import './styles.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <ul className="footer-item">
        <h1 className="footer-text">Contact me at</h1>
        <br />
        <a
          className="icon"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/karinaosuka/"
        >
          <BsLinkedin />
        </a>
        <a
          className="icon"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/kari-osk"
        >
          <BsGithub />
        </a>
      </ul>
      <p> © 2022 Karina Osuka</p>
    </footer>
  )
}
