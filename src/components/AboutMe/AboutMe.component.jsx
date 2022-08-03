import React from 'react'
import './AboutMe.component.scss'

const AboutMe = () => {
  return (
    <div className='about-me-container'>
      <a className='anchor' id='intro'></a>
      <h2 className='header-underline'>How I got here</h2>
      <div className='intro-container-art'>
        <h3>My love for Design</h3>
        <p>
          From a young age, I was obsessed with characters from TV shows and
          videogames. Seeing their colours and designs was like pure dopamine
          for my 10 year-old brain.
        </p>
        <p>
          I remember always doodling on my notebook, trying to draw a dragon or
          dino or a poor attempt at a Pokemon. I wanted to create art.
        </p>
        <p>
          In high school, I studied visual arts for 4 years and strengthened my
          design competencies. I also returned to school as an assistant teacher
          after graduating, helping others fall in love with art and design.
        </p>
        <p>Insert design ideas</p>
      </div>
      <div className='intro-container-cs'>
        <h3>My love for Computer Science</h3>
        <p>
          In 2018, I bought a new smartphone: an LG G6, which replaced my old
          OnePlus 3, but not for long. Back then, I thought, 'Newer phones
          should be faster and better, right?'
        </p>
        <p>
          Despite the newer processor, the LG had more stutters and performance
          issues, and after searching forums, I realised I was not alone in this
          issue. Eventually, I found a fix which led me down the rabbit hole
          known as rooting and custom roms.
        </p>
        <p>
          Operating systems, RAM, cache, overclocking, all the words that I
          never fully understood were slowly introduced into my vocabulary. I
          fell in love with the intricacies of tech as a whole, and sparked my
          interest in studying Computer Science.
        </p>
      </div>
      <div className='intro-container-end'>
        <h3>My love for Web Development</h3>
        <div className='portrait' />
        <span className='caption'>
          Probably the most formal photo of myself that I own
        </span>
      </div>
    </div>
  )
}

export default AboutMe
