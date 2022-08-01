import React from 'react'
import '@fontsource/playfair-display'
import '@fontsource/raleway'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/700.css'
import '../styles/aboutme.scss'
import AboutMe from '../components/AboutMe/AboutMe.component'
import Navigation from '../components/Navigation/Navigation.component'

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <div className='body-container'>
        <AboutMe />
      </div>
    </>
  )
}

export default AboutPage
