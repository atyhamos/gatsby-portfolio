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
          I'm a 23-year old Computer Science student at the National University
          of Singapore.
        </p>
        <p>
          I used to study visual arts and design. Now, I hope to make beautiful,
          responsive websites and applications that are enjoyable to use.
        </p>
        <div className='read-more'>
          <a href='/about-me'>read more about me...</a>
        </div>
        <h2 className='my-skills'>My Skills</h2>
        <div className='skills-container'>
          <span>
            <i class='devicon-javascript-plain colored' />
            JavaScript ES6
          </span>
          <span>
            <i class='devicon-sass-original colored' />
            Sass
          </span>
          <span>
            <i class='devicon-react-original colored' />
            React
          </span>
          <span>
            <i class='devicon-nodejs-plain colored' />
            Node.js
          </span>
          <span>
            <i class='devicon-html5-plain colored' />
            HTML
          </span>
          <span>
            <i class='devicon-css3-plain colored' />
            CSS
          </span>
          <span>
            <i class='devicon-git-plain colored' />
            Git
          </span>
          <span>
            <i class='devicon-firebase-plain colored' /> Firebase
          </span>
        </div>
        <p>
          I have picked up these skills through self-learning and my studies. I
          have used these to build applications that solve real-world problems,
          and I'm eager to learn more as I grow as a developer.
        </p>
      </div>
    </div>
  )
}

export default Hero
