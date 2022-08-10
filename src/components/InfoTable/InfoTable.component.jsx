import React from 'react'
import './InfoTable.component.scss'

const InfoTable = ({ ...props }) => {
  const { stack, codeUrl, siteUrl, demoUrl } = props
  return (
    <div className='project-info-container'>
      <h3>Project Information</h3>
      <div className='container-row'>
        <div className='container-column-header'>Stack</div>
        <div className='container-column-header'>Code</div>
        <div className='container-column-header'>Live</div>
      </div>
      <div className='container-row'>
        <div className='container-column'>
          {stack.map((tech) => (
            <span style={{ display: 'block' }}>{tech}</span>
          ))}
        </div>
        <div className='container-column'>
          <a href={codeUrl} target='_blank' rel='noreferrer'>
            Repository
          </a>
        </div>
        <div className='container-column'>
          <a href={siteUrl} target='_blank' rel='noreferrer'>
            View Site
          </a>
          <br />
          <a href={demoUrl} target='_blank' rel='noreferrer'>
            Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default InfoTable
