import React from 'react'
import { motion } from 'framer-motion'
import './Projects.component.scss'
import Project from '../Project/Project.component'

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
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
      <div className='projects-container'>
        <Project
          pageLink='/trax/#info'
          imageClass='trax-image'
          title='Trax'
          description="A full-stack web application built for teachers to track their students' learning progress."
        />
      </div>
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
