import React from 'react'
import { motion } from 'framer-motion'
import Highlight from '../Highlight/Highlight.component'
import { colorBlack, colorYellowDark } from '../Colors'
import './Trax.component.scss'

const Trax = () => {
  return (
    <div className='trax-container'>
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
        >
          Efficient student management system
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.5 }}
        >
          <p>
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
      </div>
    </div>
  )
}

export default Trax
