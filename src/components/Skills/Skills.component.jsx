import React from 'react'
import { motion } from 'framer-motion'
import './Skills.component.scss'

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.75 }}
      className='full-page-container'
    >
      <div className='anchor' id='skills'></div>
      <h2 className='header-underline'>My Skills</h2>
      <div className='skills-container'>
        <span>
          <i class='devicon-javascript-plain colored' />
          JavaScript ES6
        </span>
        <span>
          <i class='devicon-sass-original colored' />
          Sass
        </span>
        <span>
          <i class='devicon-react-original colored' />
          React
        </span>
        <span>
          <i class='devicon-nodejs-plain colored' />
          Node.js
        </span>
        <span>
          <i class='devicon-html5-plain colored' />
          HTML
        </span>
        <span>
          <i class='devicon-css3-plain colored' />
          CSS
        </span>
        <span>
          <i class='devicon-git-plain colored' />
          Git
        </span>
        <span>
          <i class='devicon-firebase-plain colored' /> Firebase
        </span>
      </div>
      <p>
        I picked up these skills through self-learning out of interest and my
        school studies. I have also used these to build applications that solve
        real-world problems, and I'm eager to learn more as I grow as a
        developer.
      </p>
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
