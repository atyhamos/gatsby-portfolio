import React from 'react'
import { motion } from 'framer-motion'
import './WebDev.component.scss'

const WebDev = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.75 }}
      className='full-page-container intro-container-end'
    >
      <div className='anchor' id='webdev'></div>
      <h2 className='header-underline'>Web Development</h2>
      <p>
        With a passion for creating beautiful designs and a desire to understand
        the technology that powers so many modern applications, web development
        felt like a no-brainer.
      </p>
      <p>
        But, I'm no purist. As the tech indusry evolves and new technologies
        emerge, I'll be ready to pick up new skills and new passions.
      </p>
      <div className='photo portrait' />
      <span className='caption'>
        Probably the most formal photo of myself that I own
      </span>
      <a className='arrow' href='#cs'>
        ↑
      </a>
    </motion.div>
  )
}

export default WebDev
