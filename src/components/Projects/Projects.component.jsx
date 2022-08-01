import React from 'react'
import './Projects.component.scss'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.75 }}
      className='projects-section-container'
    >
      <a className='anchor' id='projects'></a>
      <h2 className='header-underline'>Recent Projects</h2>
      <p>
        When I'm not busy watching Netflix, I enjoy working on projects to
        solidify my understanding of the skills I've learnt and create something
        either useful or fun.
      </p>
      <div className='projects-container'>List projects here</div>
    </motion.div>
  )
}

export default Projects
