import { useState } from 'react'
import Reveal from '../components/Reveal'
import SocialIcons from '../components/SocialIcons'
import './Contact.css'

const SHEET_ENDPOINT = import.meta.env.VITE_SHEET_ENDPOINT

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!SHEET_ENDPOINT) {
      console.error(
        'VITE_SHEET_ENDPOINT is not set — see README for setup instructions.',
      )
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      const body = new FormData()
      body.append('name', form.name)
      body.append('email', form.email)
      body.append('message', form.message)

      // Apps Script web apps don't return CORS headers for cross-origin
      // fetches, so the response is opaque — no-cors just fires the request.
      await fetch(SHEET_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body,
      })

      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const buttonLabel = {
    idle: 'Send message',
    sending: 'Sending…',
    sent: 'Message sent ✓',
    error: 'Failed — try again',
  }[status]

  return (
    <section id="contact" className="section contact-section">
      <Reveal className="container contact-grid">
        <div className="contact-intro">
          <h1>
            Let's <em>Talk</em>
          </h1>
          <p>
            Have a project in mind or just want to say hi? Fill out the form
            and I'll get back to you.
          </p>
          <SocialIcons />
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="btn" disabled={status === 'sending'}>
            {buttonLabel}
          </button>
        </form>
      </Reveal>
    </section>
  )
}

export default Contact
