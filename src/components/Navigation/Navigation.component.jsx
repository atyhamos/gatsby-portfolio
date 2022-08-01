import React, { useState } from 'react'
import './Navigation.component.scss'
import '@fontsource/playfair-display'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [button, setButton] = useState(null)

  const handleClick = (event) => {
    if (!button) {
      setButton(event.target)
    }
    event.target.classList.toggle('navigation-open')
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    if (button) {
      button.classList.toggle('navigation-open')
      setIsOpen(!isOpen)
    }
  }

  return (
    <nav className='navigation-container'>
      <span className='navigation-name'>
        <a href='/'>amos tan</a>
      </span>
      <button className='button-container' onClick={handleClick}>
        <div className='bar-top'></div>
        <div className='bar-middle'></div>
        <div className='bar-bottom'></div>
      </button>
      <ul className='overlay-container'>
        <li onClick={closeMenu}>
          <a href='/#home'>home</a>
        </li>
        <li onClick={closeMenu}>
          <a href='/about-me'>about me</a>
        </li>
        <li onClick={closeMenu}>
          <a href='/#skills'>skills</a>
        </li>
        <li onClick={closeMenu}>
          <a href='/#projects'>projects</a>
        </li>
        <li onClick={closeMenu}>
          <a href='/#contact'>contact</a>
        </li>
        <br />
        <li>
          <a href='https://www.linkedin.com/in/amos-tan-yh/' target='_blank'>
            linkedin
          </a>
        </li>
        <li>
          <a href='https://github.com/atyhamos' target='_blank'>
            github
          </a>
        </li>
      </ul>
      {isOpen && <div className='modal' onClick={closeMenu} />}
    </nav>
  )
}

export default Navigation
