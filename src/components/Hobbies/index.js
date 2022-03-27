import React from 'react'
import './styles.css'

import hobbie1 from '../../assets/hobbie1.png'
import hobbie2 from '../../assets/hobbie2.png'
import hobbie3 from '../../assets/hobbie3.png'
import hobbie4 from '../../assets/hobbie4.png'
import hobbie5 from '../../assets/hobbie5.png'
import hobbie6 from '../../assets/hobbie6.png'

const data = [
  {
    id: '1',
    image: hobbie1
  },

  {
    id: '2',
    image: hobbie2
  },
  {
    id: '3',
    image: hobbie3
  },
  {
    id: '4',
    image: hobbie4
  },
  {
    id: '5',
    image: hobbie5
  },
  {
    id: '6',
    image: hobbie6
  }
]
export default function Hobbies() {
  return (
    <div className="about-hobbies">
      <section className="hobbies" id="hobbies">
        <h1 className="hobbies-h1">Hobbies</h1>
        <p className="hobbies-p">
          In my free time I used to enjoey travel and photography, but since
          covid hit I started to create some art in linocut printing, an old
          technique of print.
        </p>
        <ul className="hobbies-list">
          {data.map(({ image }) => (
            <li className="hobbies-item-list">
              <img src={image} alt="hobbies" />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
