import React from 'react'
import './Footer.component.scss'

const Footer = () => {
  return (
    <footer>
      <span>© 2022 | Designed and built by Amos Tan</span>
      <br />
      <span>
        Powered by GatsbyJS <i class='devicon-gatsby-plain' />
      </span>
      <ul className='social-links'>
        <li>
          <a href='https://www.linkedin.com/in/amos-tan-yh/' target='_blank'>
            <i class='devicon-linkedin-plain' />
          </a>
        </li>
        <li>
          <a href='https://github.com/atyhamos' target='_blank'>
            <i class='devicon-github-original colored' />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
