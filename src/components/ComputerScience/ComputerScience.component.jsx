import React from 'react'
import { motion } from 'framer-motion'
import './ComputerScience.component.scss'

const ComputerScience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75 }}
      className='page-container intro-container-cs'
    >
      <div className='anchor' id='cs'></div>
      <h2 className='header-underline'>Computer Science</h2>
      <p>
        In 2018, I bought a new smartphone to replace my old one, but despite
        its newer processor, it didn't feel as smooth. Eventually, I found a fix
        which led me down the rabbit hole of "rooting" and custom roms.
      </p>
      <p>
        Terms like operating systems, RAM, cache, overclocking and more were
        slowly introduced into my vocabulary. I fell in love with the
        intricacies of tech that we use daily, which sparked my interest in
        studying Computer Science.
      </p>
      <a className='arrow' href='#design'>
        ↑
      </a>
      <br />
      <a className='arrow' href='#webdev'>
        ↓
      </a>
    </motion.div>
  )
}

export default ComputerScience
