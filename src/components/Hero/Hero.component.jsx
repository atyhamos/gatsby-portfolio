import React from 'react'
import './Hero.component.scss'

const Hero = () => {
  return (
    <div>
      <h1>
        <span>Hi, I'm Amos.</span>
        <br />
        <span>Front End Developer.</span>
      </h1>
      <div>
        <p>
          I'm a 23-year old Computer Science undergraduate at the National
          University of Singapore.
        </p>
        <p>
          Before university, I studied visual arts and design. Now, I hope to
          make beautiful, responsive websites and applications that are
          enjoyable to use.
          <br />
        </p>
        <h2>My Skills</h2>
        <div className='skills-container'>
          <span>JavaScript ES6</span>
          <span>Sass</span>
          <span>React</span>
          <span>Node.js</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Git</span>
          <span>Firebase</span>
        </div>
        <p>
          These are the skills that I have picked up so far in my time of
          self-learning. I have used these to build real-world applications that
          solve problems, and I'm eager to learn more as I grow as a developer.
        </p>
      </div>
    </div>
  )
}

export default Hero
