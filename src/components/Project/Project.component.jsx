import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Project.component.scss'
import Highlight from '../Highlight/Highlight.component'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Project = ({ ...props }) => {
  const [isFocus, setIsFocus] = useState(false)
  const handleFocus = (focus) => {
    if (isFocus !== focus) setIsFocus(focus)
  }
  const { pageLink, imageClass, title, description } = props
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 1.5 }}
      className='project-container'
    >
      <a
        href={pageLink}
        onMouseOver={() => handleFocus(true)}
        onMouseOut={() => handleFocus(false)}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
      >
        <div className={`project-image ${imageClass}`} />
        <h3>{title}</h3>
      </a>
      <p>{description}</p>
      <AnchorLink to={pageLink} className='view-link'>
        {isFocus ? (
          <Highlight duration={0.5}>View project</Highlight>
        ) : (
          'View project'
        )}
      </AnchorLink>
    </motion.div>
  )
}

export default Project
