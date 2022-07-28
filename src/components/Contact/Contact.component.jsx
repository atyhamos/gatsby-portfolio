import React from 'react'
import './Contact.component.scss'
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
  const [state, handleSubmit] = useForm('xnqweeeb')

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>
  }

  return (
    <div>
      <h2>Keep in touch</h2>
      <p>
        Feel free to drop me an email if you're looking for a developer, have a
        question, or just want to connect.
      </p>
      <a className='email-address' href='mailto:amostan.dev@gmail.com'>
        amostan.dev@gmail.com
      </a>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          name='name'
          placeholder='Enter your name'
        />
        <ValidationError prefix='name' field='name' errors={state.errors} />
        <label htmlFor='email'>Email Address</label>
        <input
          id='email'
          type='email'
          name='email'
          placeholder='Enter your email'
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
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
    </div>
  )
}

export default Contact
