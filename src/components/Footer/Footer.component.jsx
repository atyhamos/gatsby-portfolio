import React from 'react'
import './Footer.component.scss'

const Footer = () => {
  return (
    <footer>
      <span>© 2022 | Designed and built by Amos Tan</span>
      <br />
      <span>
        Powered by GatsbyJS <i className='devicon-gatsby-plain' />
      </span>
      <ul className='social-links'>
        <li>
          <a
            href='https://www.linkedin.com/in/amos-tan-yh/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='devicon-linkedin-plain' />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/atyhamos'
            target='_blank'
            rel='noreferrer'
          >
            <i className='devicon-github-original colored' />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
