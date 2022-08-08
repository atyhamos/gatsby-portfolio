import React from 'react'
import { motion } from 'framer-motion'
import Highlight from '../Highlight/Highlight.component'
import { colorBlack, colorYellowDark } from '../Colors'
import './Trax.component.scss'
import InfoTable from '../InfoTable/InfoTable.component'

const Trax = () => {
  return (
    <div className='trax-container' id='info'>
      <div className='full-page-container trax-hero'>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.75 }}
          className='header-underline'
        >
          Trax
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1.5 }}
          className='sub-header'
        >
          Student Management System
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.5 }}
        >
          <p className='project-tagline'>
            Trax is a web application built for
            <Highlight>teachers</Highlight>
            to efficiently manage
            <Highlight
              backgroundColor={colorYellowDark}
              color={colorBlack}
              waitDuration={0.5}
            >
              groups
            </Highlight>
            of
            <Highlight waitDuration={0.5}>students.</Highlight>
          </p>
        </motion.div>
        <InfoTable
          stack={['React', 'Sass', 'Firebase', 'Netlify']}
          codeUrl='https://github.com/atyhamos/trax'
          siteUrl='https://tourmaline-granita-38225a.netlify.app/'
        />
      </div>
      <div className='project-details full-page-container'>
        <h2>Purpose and goal</h2>
        <p>
          I built Trax both as an exercise to develop my full-stack
          capabilities, and to solve a real problem that I encountered. I'm a
          regular volunteer at a non-profit organisation, and every week we
          conduct lessons for underprivleged children. However, as volunteers
          often come and go, it's hard for the children to progress academically
          with no fixed record of their performance.
        </p>
        <p>
          Trax's goal is to have a central store of feedback given to children
          (students), to make it easier for volunteers (teachers), to conduct
          effective lessons. Importantly, another goal is to make the
          application responsive and easy-to-use.
        </p>
      </div>
      <div className='tech-stack-details full-page-container'>
        <h2>Stack consideration</h2>
        <p>
          I built Trax both as an exercise to develop my full-stack
          capabilities, and to solve a real problem that I encountered. I'm a
          regular volunteer at a non-profit organisation, and every week we
          conduct lessons for underprivleged children. However, as volunteers
          often come and go, it's hard for the children to progress academically
          with no fixed record of their performance.
        </p>
        <p>
          Trax's goal is to have a central store of feedback given to children
          (students), to make it easier for volunteers (teachers), to conduct
          effective lessons. Importantly, another goal is to make the
          application responsive and easy-to-use.
        </p>
      </div>
      <div className='problem-details full-page-container'>
        <h2>Problems faced</h2>
        <p>
          I built Trax both as an exercise to develop my full-stack
          capabilities, and to solve a real problem that I encountered. I'm a
          regular volunteer at a non-profit organisation, and every week we
          conduct lessons for underprivleged children. However, as volunteers
          often come and go, it's hard for the children to progress academically
          with no fixed record of their performance.
        </p>
        <p>
          Trax's goal is to have a central store of feedback given to children
          (students), to make it easier for volunteers (teachers), to conduct
          effective lessons. Importantly, another goal is to make the
          application responsive and easy-to-use.
        </p>
      </div>
      <div className='lessons-details full-page-container'>
        <h2>Lessons learnt</h2>
        <p>
          I built Trax both as an exercise to develop my full-stack
          capabilities, and to solve a real problem that I encountered. I'm a
          regular volunteer at a non-profit organisation, and every week we
          conduct lessons for underprivleged children. However, as volunteers
          often come and go, it's hard for the children to progress academically
          with no fixed record of their performance.
        </p>
        <p>
          Trax's goal is to have a central store of feedback given to children
          (students), to make it easier for volunteers (teachers), to conduct
          effective lessons. Importantly, another goal is to make the
          application responsive and easy-to-use.
        </p>
      </div>
    </div>
  )
}

export default Trax
