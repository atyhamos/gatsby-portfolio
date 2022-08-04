import React from 'react'
import './AboutMe.component.scss'

const AboutMe = () => {
  return (
    <div className='about-me-container'>
      <div className='anchor' id='intro'></div>
      <h1>How I got here</h1>
      <span>My journey to a front end developer.</span>
      <div className='intro-container-art'>
        <h2 className='header-underline'>Design</h2>
        <p>
          Like most kids growing up, I was obsessed with TV shows and
          videogames. I often tried to emulate the designs that I saw on the big
          screen, defacing my school notebook with characters from Pokemon,
          Dragon Ball, Sonic. While they weren't great, I knew I wanted to
          create art, or at least something that makes someone say 'Wow that
          looks so cool!'.
        </p>
        {/* <p>
          In high school, I studied visual arts for 4 years and strengthened my
          design competencies. I also returned to school as an assistant teacher
          after graduating, helping others fall in love with art and design.
        </p> */}
        {/* <p>Insert design ideas</p> */}
      </div>
      <div className='intro-container-cs'>
        <h2 className='header-underline'>Computer Science</h2>
        <p>
          In 2018, I bought a new smartphone to replace my old one, but despite
          its newer processor, it didn't feel as smooth. Eventually, I found a
          fix which led me down the rabbit hole of "rooting" and custom roms.
        </p>
        <p>
          Terms like operating systems, RAM, cache, overclocking and more were
          slowly introduced into my vocabulary. I fell in love with the
          intricacies of tech that we use daily, which sparked my interest in
          studying Computer Science.
        </p>
      </div>
      <div className='intro-container-end'>
        <h2 className='header-underline'>Front End Development</h2>
        <p>
          With a passion for creating beautiful designs and a desire to
          understand the technology that powers so many modern applications,
          front end development felt like a no-brainer.
        </p>
        <p>
          But, I'm no purist. As the tech indusry evolves and new technologies
          emerge, I'll be ready to pick up new skills and new passions.
        </p>
        <div className='portrait' />
        <span className='caption'>
          Probably the most formal photo of myself that I own
        </span>
      </div>
    </div>
  )
}

export default AboutMe
