import './styles.css'
import React from 'react'

import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import css from '../../assets/css-3.png'
import html from '../../assets/html-5.png'
import java from '../../assets/java.png'
import spring from '../../assets/spring.png'
import mysql from '../../assets/mysql.png'
import docker from '../../assets/docker.png'
import postman from '../../assets/postman.png'
import figma from '../../assets/figma.png'
import illustrator from '../../assets/illustrator.png'
import photoshop from '../../assets/photoshop.png'

const skills = [
  {
    id: '1',
    title: 'Javascript',
    image: javascript
  },

  {
    id: '2',
    title: 'React',
    image: react
  },
  {
    id: '3',
    title: 'CSS 3',
    image: css
  },

  {
    id: '4',
    title: 'HTML 5',
    image: html
  },
  {
    id: '5',
    title: 'Java',
    image: java
  },

  {
    id: '6',
    title: 'Spring',
    image: spring
  },
  {
    id: '7',
    title: 'Mysql',
    image: mysql
  },

  {
    id: '8',
    title: 'Docker',
    image: docker
  },
  {
    id: '9',
    title: 'Postman',
    image: postman
  },

  {
    id: '10',
    title: 'Figma',
    image: figma
  },
  {
    id: '11',
    title: 'Illustrator',
    image: illustrator
  },

  {
    id: '12',
    title: 'Photoshop',
    image: photoshop
  }
]

export default function About() {
  return (
    <main className="about" id="about">
      <h1>About me</h1>
      <section className="about-container">
        <div className="about-text">
          <h2>brief history</h2>
          <p className="about-text-p">
            Acima de tudo, é fundamental ressaltar que o desenvolvimento
            contínuo de distintas formas de atuação estende o alcance e a
            importância das direções preferenciais no sentido do progresso.
          </p>
        </div>
        <div className="technology">
          <h3>Technology</h3>
          <ul className="technology-item">
            {skills.map(({ image }) => (
              <li className="technology-item-list">
                <img src={image} alt="technology icons" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
