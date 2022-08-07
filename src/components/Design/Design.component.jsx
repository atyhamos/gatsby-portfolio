import React from 'react'
import { motion } from 'framer-motion'
import './Design.component.scss'

const Design = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.75 }}
      className='full-page-container intro-container-art'
    >
      <div className='anchor' id='design'></div>
      <h2 className='header-underline'>Design</h2>
      <div className='photo old-portrait' />
      <span className='caption'>Me, circa 2009</span>
      <p>
        Like most kids growing up, I was obsessed with TV shows and playing
        videogames. I often tried to emulate the designs that I saw on the big
        screen, defacing my school notebook with doodles of some of my favourite
        Pokémon. While they weren't great, I knew I wanted to create art, or at
        least something that makes someone say 'Wow, that looks so cool!'.
      </p>
      <a className='arrow' href='#intro'>
        ↑
      </a>
      <br />
      <a className='arrow' href='#cs'>
        ↓
      </a>
    </motion.div>
  )
}

export default Design
