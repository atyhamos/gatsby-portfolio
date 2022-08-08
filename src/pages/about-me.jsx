import React from 'react'
import Navigation from '../components/Navigation/Navigation.component'
import AboutMe from '../components/AboutMe/AboutMe.component'
import Footer from '../components/Footer/Footer.component'
import '@fontsource/playfair-display'
import '@fontsource/raleway'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/700.css'
import '../styles/aboutme.scss'
import { Helmet } from 'react-helmet'

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'
        />
        <title>Amos - About Me</title>
      </Helmet>
      <Navigation />
      <div className='body-container'>
        <AboutMe />
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
