import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from '../components/Navigation/Navigation.component'
import Trax from '../components/Trax/Trax.component'
import Footer from '../components/Footer/Footer.component'
import '@fontsource/playfair-display'
import '@fontsource/raleway'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/700.css'
import '../styles/aboutme.scss'

const TraxPage = () => {
  return (
    <>
      <Helmet>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'
        />
        <title>Amos - Trax Project</title>
      </Helmet>
      <Navigation />
      <div className='body-container'>
        <Trax />
      </div>
      <Footer />
    </>
  )
}

export default TraxPage
