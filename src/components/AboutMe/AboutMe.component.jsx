import React from 'react'
import { motion } from 'framer-motion'
import Design from '../Design/Design.component'
import ComputerScience from '../ComputerScience/ComputerScience.component'
import WebDev from '../WebDev/WebDev.component'
import './AboutMe.component.scss'

const AboutMe = () => {
  return (
    <div className='about-me-container'>
      <div className='anchor' id='intro'></div>
      <div className='full-page-container about-me-hero'>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.75 }}
        >
          How I got here.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.5 }}
        >
          My journey to a<span>web developer.</span>
          <a className='arrow' href='#design'>
            ↓
          </a>
        </motion.h2>
      </div>
      <Design />
      <ComputerScience />
      <WebDev />
    </div>
  )
}

export default AboutMe
