import './styles.css'
import React from 'react'

// import github from '../../assets/github.png'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'
import project5 from '../../assets/project5.png'
import project6 from '../../assets/project6.png'

const data = [
  {
    id: '1',
    title: 'Social proof',
    link: 'https://github.com/kari-osk/social-proof-section',
    image: project1
  },
  {
    id: '2',
    title: 'Accordion card',
    link: 'https://github.com/kari-osk/faq-accordion-card',
    image: project2
  },
  {
    id: '3',
    title: 'Article',
    link: 'https://github.com/kari-osk/article-preview',
    image: project3
  },
  {
    id: '4',
    title: 'NFT card',
    link: 'https://github.com/kari-osk/nft-preview-card',
    image: project4
  },
  {
    id: '5',
    title: 'Four card feature',
    link: 'https://github.com/kari-osk/four-card-feature',
    image: project5
  },

  {
    id: '6',
    title: 'Preview card',
    link: 'https://github.com/kari-osk/stats-preview-card',
    image: project6
  }
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h1 className="projects-h1">Projects</h1>
        <ul className="projects-list">
          {data.map(({ title, link, image }) => (
            <a href={link} target="_blank" rel="noreferrer">
              <li className="projects-item-list">
                <img src={image} alt="Projects" />
                {/* <img src={github} alt="github icon" /> */}
                <h3 className="projects-title">{title}</h3>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </section>
  )
}
