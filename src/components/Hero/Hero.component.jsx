import React from 'react'
import { motion } from 'framer-motion'
import './Hero.component.scss'

const Hero = () => {
  return (
    <>
      <a className='anchor' id='home'></a>
      <div className='hero-container'>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.75 }}
        >
          <span>Hi, I'm Amos.</span>
          <br />
          <span className='developer'>Front End Developer.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1.5 }}
        >
          <p>
            I'm a 23-year old Computer Science student at the National
            University of Singapore.
          </p>
          <p>
            I used to study{' '}
            <span className='highlight-arts'>visual arts and design.</span> Now,
            I hope to make beautiful,{' '}
            <span className='highlight-responsive'>responsive</span> websites
            and applications that are enjoyable to use.
          </p>
          <div className='read-more'>
            <a href='/about-me'>read more about me...</a>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Hero
