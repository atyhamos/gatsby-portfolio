import React from 'react'
import Navigation from '../components/Navigation/Navigation.component'
import AboutMe from '../components/AboutMe/AboutMe.component'
import Footer from '../components/Footer/Footer.component'
import '@fontsource/playfair-display'
import '@fontsource/raleway'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/700.css'
import '../styles/aboutme.scss'

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <div className='body-container'>
        <AboutMe />
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
