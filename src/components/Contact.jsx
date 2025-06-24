import React from 'react'

export default function Contact() {
  return (
    <section className="py-12 bg-white text-center" id="contact">
    <h2 className="text-3xl font-bold text-blue-800 mb-6">Contact Me</h2>
    <p className="mb-4">Want to work together or have a project in mind?</p>
    <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer"
       className="inline-block bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all">
      Message on WhatsApp
    </a>
  </section>
  )
}
