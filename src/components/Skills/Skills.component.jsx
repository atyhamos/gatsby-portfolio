import React from 'react'
import { motion } from 'framer-motion'
import './Skills.component.scss'
import Highlight from '../Highlight/Highlight.component'

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75 }}
      className='page-container'
    >
      <div className='anchor' id='skills'></div>
      <h2 className='header-underline'>My Skills</h2>
      <div className='skills-container'>
        <span>
          <i className='devicon-javascript-plain colored' />
          JavaScript ES6
        </span>
        <span>
          <i className='devicon-sass-original colored' />
          Sass
        </span>
        <span>
          <i className='devicon-react-original colored' />
          React
        </span>
        <span>
          <i className='devicon-nodejs-plain colored' />
          Node.js
        </span>
        <span>
          <i className='devicon-html5-plain colored' />
          HTML
        </span>
        <span>
          <i className='devicon-css3-plain colored' />
          CSS
        </span>
        <span>
          <i className='devicon-git-plain colored' />
          Git
        </span>
        <span>
          <i className='devicon-firebase-plain colored' /> Firebase
        </span>
      </div>
      <p>
        I picked up these skills through self-learning out of interest and my
        school studies. I have also used these to build applications that solve
        real-world problems, and I'm eager to learn more as I grow as a
        developer.
      </p>
      <p>
        I wanted to spend more time building a{' '}
        <Highlight>strong foundation</Highlight> in web development before
        delving into frameworks like Bootstrap and other skills that may be more
        advanced.
      </p>
      <p>Currently, these are the skills I am picking up:</p>
      <div className='skills-container'>
        <span>
          <i className='devicon-bootstrap-plain colored' />
          Bootstrap
        </span>
        <span>
          <i className='devicon-jquery-plain colored' />
          jQuery
        </span>
        <span>
          <i className='devicon-redux-plain colored' />
          Redux
        </span>
        <span>
          <i className='devicon-postgresql-plain colored' />
          PostgreSQL
        </span>
      </div>
      <a className='arrow' href='#home'>
        ↑
      </a>
      <br />
      <a className='arrow' href='#projects'>
        ↓
      </a>
    </motion.div>
  )
}

export default Skills
