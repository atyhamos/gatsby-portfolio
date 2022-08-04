import React from 'react'
import './Contact.component.scss'
import { useForm, ValidationError } from '@formspree/react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [state, handleSubmit] = useForm('xnqweeeb')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.75 }}
      className='contact-section-container'
    >
      <div className='anchor' id='contact'></div>
      <h2 className='header-underline'>Keep In Touch</h2>
      <p>
        Feel free to drop me an email if you have a question, or just want to
        connect.
      </p>
      <a className='email-address' href='mailto:amostan.dev@gmail.com'>
        amostan.dev@gmail.com
      </a>

      <>
        <p>or... fill out this form and I'll get back to you.</p>
        <div className='form-card'>
          <h3>Form Submission</h3>
          {state.succeeded ? (
            <p>Thanks for your message! I'll be sure to reply soon.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor='name'>Name</label>
              <input
                id='name'
                type='text'
                name='name'
                placeholder='Enter your name'
              />
              <ValidationError
                prefix='name'
                field='name'
                errors={state.errors}
              />
              <label htmlFor='email'>Email Address</label>
              <input
                id='email'
                type='email'
                name='email'
                placeholder='Enter your email'
              />
              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
              />
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                placeholder='Enter your message'
              />
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />

              <button type='submit' disabled={state.submitting}>
                Submit
              </button>
              <ValidationError errors={state.errors} />
            </form>
          )}
        </div>
      </>
    </motion.div>
  )
}

export default Contact
