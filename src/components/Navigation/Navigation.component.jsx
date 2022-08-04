import React, { useState } from 'react'
import './Navigation.component.scss'
import '@fontsource/playfair-display'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

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
        <li>
          <button className='list-button' onClick={closeMenu}>
            <AnchorLink to='/#home' title='Home'>
              home
            </AnchorLink>
          </button>
        </li>
        <li>
          <button className='list-button' onClick={closeMenu}>
            <AnchorLink to='/about-me/#intro' title='About Me'>
              about me
            </AnchorLink>
          </button>
        </li>
        <li>
          <button className='list-button' onClick={closeMenu}>
            <AnchorLink to='/#skills' title='Skills'>
              skills
            </AnchorLink>
          </button>
        </li>
        <li>
          <button className='list-button' onClick={closeMenu}>
            <AnchorLink to='/#projects' title='Projects'>
              projects
            </AnchorLink>
          </button>
        </li>
        <li>
          <button className='list-button' onClick={closeMenu}>
            <AnchorLink to='/#contact' title='Contact'>
              contact
            </AnchorLink>
          </button>
        </li>
        <br />
        <li>
          <a
            href='https://www.linkedin.com/in/amos-tan-yh/'
            target='_blank'
            rel='noreferrer'
          >
            linkedin
          </a>
        </li>
        <li>
          <a
            href='https://github.com/atyhamos'
            target='_blank'
            rel='noreferrer'
          >
            github
          </a>
        </li>
      </ul>
      {isOpen && (
        <button className='modal' onClick={closeMenu} onKeyDown={closeMenu}>
          {' '}
        </button>
      )}
    </nav>
  )
}

export default Navigation
