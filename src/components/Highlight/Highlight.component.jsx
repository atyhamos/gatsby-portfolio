import React, { useEffect, useState } from 'react'
import './Highlight.component.scss'
import { colorBlue, colorWhite } from '../Colors'

const Highlight = ({
  backgroundColor = colorBlue,
  color = colorWhite,
  duration = 1,
  children,
  waitDuration = 0,
}) => {
  const styles = {
    animation: `highlight ${duration}s cubic-bezier(0.9, 0.02, 0.89, 0.66)`,
    color,
    backgroundColor,
    content: children,
  }

  const [isWaiting, setIsWaiting] = useState(waitDuration > 0)

  useEffect(() => {
    setTimeout(() => {
      setIsWaiting(false)
    }, waitDuration * 1000)
  }, [waitDuration])

  return isWaiting ? (
    <>
      {' '}
      <span>{children}</span>{' '}
    </>
  ) : (
    <>
      {' '}
      <span className='highlight'>
        <span className='highlight-before' style={styles}>
          {children}
        </span>
        {children}
      </span>{' '}
    </>
  )
}

export default Highlight
