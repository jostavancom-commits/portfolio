import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')
  
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
      <form className="max-w-md">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-4"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  )
}