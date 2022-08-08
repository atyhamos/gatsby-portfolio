import React from 'react'
import { motion } from 'framer-motion'
import Highlight from '../Highlight/Highlight.component'
import {
  colorBlack,
  colorYellowDark,
  colorRedOrange,
  colorBlueLight,
} from '../Colors'
import './Trax.component.scss'
import InfoTable from '../InfoTable/InfoTable.component'
import StudentList from '../../images/trax-1.png'
import StudentFeedback from '../../images/trax-2.png'
import SiteMap from '../../images/trax-sitemap-planning.svg'
import ImageCaption from '../ImageCaption/ImageCaption.component'

const Trax = () => {
  return (
    <div className='trax-container' id='info'>
      <div className='full-page-container trax-hero'>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.75 }}
          className='header-underline'
        >
          Trax
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.5 }}
          className='sub-header'
        >
          Student Management System
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5 }}
        >
          <p className='project-tagline'>
            Trax is a web application built for
            <Highlight>teachers</Highlight>
            to efficiently manage
            <Highlight
              backgroundColor={colorYellowDark}
              color={colorBlack}
              waitDuration={0.5}
            >
              groups
            </Highlight>
            of
            <Highlight waitDuration={0.5}>students.</Highlight>
          </p>
        </motion.div>
        <InfoTable
          stack={['React', 'Sass', 'Firebase', 'Netlify']}
          codeUrl='https://github.com/atyhamos/trax'
          siteUrl='https://tourmaline-granita-38225a.netlify.app/'
        />
      </div>
      <div className='project-details'>
        <div className='project-purpose'>
          <h2>Purpose and goal</h2>
          <img
            src={StudentList}
            alt='trax student list'
            className='trax-page-image'
          />
          <ImageCaption>Student list page</ImageCaption>
          <p>
            I built Trax both as an exercise to develop my full-stack
            capabilities, and to solve a real-world problem that I encountered.
          </p>
          <p>
            I'm a regular volunteer at a non-profit organisation, and every week
            we conduct lessons for underprivleged children. However, as
            volunteers often come and go, it's hard for the children to progress
            academically with no fixed record of their performance over time.
          </p>
          <img
            src={StudentFeedback}
            alt='trax student feedback'
            className='trax-page-image'
          />
          <ImageCaption>Student's page</ImageCaption>
          <p>
            Trax's goal is to have a central store of children (students) and
            their feedback, to make it easier for volunteers (teachers), to
            <Highlight>conduct effective lessons.</Highlight> Importantly,
            another goal is to make the application responsive and easy-to-use.
          </p>
        </div>
        <div className='tech-stack-details'>
          <h2>Stack consideration</h2>
          <p>
            I chose to use React for the frontend as its native useState and
            useContext hook APIs provided{' '}
            <Highlight>robust state management</Highlight> out of the box. I
            initially opted against using Redux for state management as I
            thought it would be overkill, but as the application grew larger, I
            had second thoughts, but ultimately decided against it anyway.
          </p>
          <p>
            I chose Firebase for the backend authentication and database as the
            Firebase API is extremely{' '}
            <Highlight backgroundColor={colorYellowDark} color={colorBlack}>
              simple yet powerful
            </Highlight>
            , serving my needs well with fewer lines of code. Other
            considerations were to use ExpressJS with MongoDB to serve data at
            endpoints, but I wanted to focus more on the frontend aspects of
            this project.
          </p>
          <p>
            Lastly, I chose Netlify to host the application for its ease of use
            and{' '}
            <Highlight backgroundColor={colorBlueLight} color={colorBlack}>
              continuous integration
            </Highlight>{' '}
            capabilities.
          </p>
        </div>
        <div className='problem-details '>
          <h2>Problems faced</h2>
          <p>
            I encountered difficulties with the state management of the project
            due to the number of contexts to keep track of, properly updating
            each one whenever an event is triggered and{' '}
            <Highlight>using the correct hooks.</Highlight>
          </p>
          <p>
            I also faced many situations where I had to{' '}
            <Highlight backgroundColor={colorYellowDark}>refactor</Highlight> my
            code completely to better suit my project, creating generic
            components and passing them props instead of creating a 100 unique
            components with slight variations.
          </p>
          <p>
            Additionally, with dozens of components in the codebase, each with
            their own styling,{' '}
            <Highlight>stylesheets became cluttered</Highlight> and confused.
          </p>
        </div>
        <div className='lessons-details '>
          <h2>Lessons learnt</h2>
          <img src={SiteMap} alt='Trax Site Map' className='trax-page-image' />
          <ImageCaption>My initial sitemap plan</ImageCaption>
          <p>
            Personally, my biggest takeaway from this project is to{' '}
            <Highlight>plan properly</Highlight>- the architecture, the project
            requirements, and to work in iterations. While diving head first
            into a project is a lot quicker in the short-run, it will ultimately
            lead to unforeseen issues that drags out the development process.
          </p>
          <p>
            Additionally, in the future, I would opt for:
            <ul>
              <li>
                Using{' '}
                <Highlight backgroundColor={colorYellowDark}>Redux</Highlight>{' '}
                for state management.
              </li>
              <li>
                Using <Highlight>styled-components</Highlight> for less styling
                conflicts
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Trax
