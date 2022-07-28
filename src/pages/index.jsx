import React from 'react'
import '@fontsource/playfair-display'
import '../styles/index.scss'
import Hero from '../components/Hero/Hero.component'
import Projects from '../components/Projects/Projects.component'
import Contact from '../components/Contact/Contact.component'

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}

export default IndexPage
