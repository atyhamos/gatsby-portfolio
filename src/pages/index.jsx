import React from 'react'
import '@fontsource/playfair-display'
import '@fontsource/raleway'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/700.css'
import '../styles/index.scss'
import Hero from '../components/Hero/Hero.component'
import Projects from '../components/Projects/Projects.component'
import Contact from '../components/Contact/Contact.component'

const IndexPage = () => {
  return (
    <div className='body-container'>
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}

export default IndexPage
