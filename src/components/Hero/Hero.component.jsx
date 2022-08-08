import React from 'react'
import { motion } from 'framer-motion'
import './Hero.component.scss'
import Highlight from '../Highlight/Highlight.component'
import { colorBlack, colorBlue, colorWhite, colorYellowDark } from '../Colors'

const Hero = () => {
  return (
    <>
      <div className='anchor' id='home'></div>
      <div className='full-page-container hero-container'>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.75 }}
        >
          <span>Hi, I'm Amos,</span>
          <br />
          <span className='developer'>Web Developer.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1.5 }}
          className='hero-intro'
        >
          <p>
            I'm a 23-year old Computer Science student at the National
            University of Singapore.
          </p>
          <p>
            I used to study{' '}
            <Highlight duration={1.5}>visual arts and design.</Highlight> Now, I
            hope to make beautiful,{' '}
            <Highlight
              backgroundColor={colorYellowDark}
              color={colorBlack}
              waitDuration={1}
            >
              responsive
            </Highlight>{' '}
            websites and applications that are enjoyable to use.
          </p>
          <span className='read-more'>
            <a href='/about-me'>read more about me...</a>
          </span>
          <br />
          <a className='arrow' href='#skills'>
            ↓
          </a>
        </motion.div>
      </div>
    </>
  )
}

export default Hero
