import React from 'react'
import './Navigation.component.scss'

const Navigation = () => {
  const handleClick = (event) => {
    event.target.classList.toggle('navigation-open')
  }

  return (
    <nav className='navigation-container'>
      <span className='navigation-name'>
        amos
        <br />
        tan
      </span>
      <button className='button-container' onClick={handleClick}>
        <div className='bar-top'></div>
        <div className='bar-middle'></div>
        <div className='bar-bottom'></div>
      </button>
      <ul className='overlay-container'>
        <li>
          <a href='/'>home</a>
        </li>
        <li>
          <a href='#'>skills</a>
        </li>
        <li>
          <a href='#'>projects</a>
        </li>
        <li>
          <a href='#'>contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
