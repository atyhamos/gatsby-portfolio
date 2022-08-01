import React from 'react'
import '@fontsource/playfair-display'
import '@fontsource/raleway'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/700.css'
import '../styles/index.scss'
import Hero from '../components/Hero/Hero.component'
import Projects from '../components/Projects/Projects.component'
import Contact from '../components/Contact/Contact.component'
import Navigation from '../components/Navigation/Navigation.component'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer/Footer.component'
import Skills from '../components/Skills/Skills.component'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'
        />
      </Helmet>
      <Navigation />
      <div className='body-container'>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default IndexPage
