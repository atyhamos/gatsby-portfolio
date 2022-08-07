import React from 'react'
import '@fontsource/playfair-display'
import '@fontsource/raleway'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/700.css'
import '../styles/aboutme.scss'
import Navigation from '../components/Navigation/Navigation.component'
import Footer from '../components/Footer/Footer.component'
import Trax from '../components/Trax/Trax.component'

const TraxPage = () => {
  return (
    <>
      <Navigation />
      <div className='body-container'>
        <Trax />
      </div>
      <Footer />
    </>
  )
}

export default TraxPage
