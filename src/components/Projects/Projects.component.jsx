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
      className='full-page-container'
    >
      <div className='anchor' id='projects'></div>
      <h2 className='header-underline'>Recent Projects</h2>
      <p>
        When I'm not busy watching Netflix, I enjoy working on projects to
        solidify my understanding of the skills I've learnt and create something
        either useful or fun.
      </p>
      <div className='projects-container'>List projects here</div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5 }}
        className='project-container'
      >
        <h3>Trax</h3>
        <span>React, Sass, Firebase</span>
        <p>
          A full-stack web application built for teachers to track their
          students' learning progress.
        </p>
        <a href='/trax' className='view-link'>
          View project
        </a>
      </motion.div>
      <a className='arrow' href='#skills'>
        ↑
      </a>
      <br />
      <a className='arrow' href='#contact'>
        ↓
      </a>
    </motion.div>
  )
}

export default Projects
