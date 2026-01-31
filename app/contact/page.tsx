'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-widest uppercase text-primary-600 dark:text-primary-400 mb-3">
            Reach Out
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            Let&apos;s Talk
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or an opportunity to discuss? I&apos;d welcome the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-slate-700/50">
              <h2 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white tracking-tight">
                Direct Channels
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: FaEnvelope,
                    label: 'Email',
                    value: 'built.to.cell@gmail.com',
                    href: 'mailto:built.to.cell@gmail.com',
                  },
                  {
                    icon: FaPhone,
                    label: 'Phone',
                    value: '+1 (317) 643-1578',
                    href: 'tel:+13176431578',
                  },
                  {
                    icon: FaMapMarkerAlt,
                    label: 'Location',
                    value: 'Indianapolis, Indiana',
                    href: null,
                  },
                ].map((channel) => (
                  <div key={channel.label} className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex-shrink-0">
                      <channel.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-wider uppercase text-gray-400 dark:text-gray-500 mb-0.5">
                        {channel.label}
                      </p>
                      {channel.href ? (
                        <a
                          href={channel.href}
                          className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          {channel.value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {channel.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-slate-700/50">
                <p className="text-xs font-medium tracking-wider uppercase text-gray-400 dark:text-gray-500 mb-2">
                  Availability
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  I typically respond within 24 hours on business days. For urgent inquiries, reach out by phone.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-sm p-8 border border-gray-100 dark:border-slate-700/50">
              <h2 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white tracking-tight">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 dark:border-slate-600/50 rounded-xl focus:ring-2 focus:ring-primary-600/20 focus:border-primary-500 bg-gray-50 dark:bg-slate-700/50 text-gray-900 dark:text-white text-sm transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 dark:border-slate-600/50 rounded-xl focus:ring-2 focus:ring-primary-600/20 focus:border-primary-500 bg-gray-50 dark:bg-slate-700/50 text-gray-900 dark:text-white text-sm transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 dark:border-slate-600/50 rounded-xl focus:ring-2 focus:ring-primary-600/20 focus:border-primary-500 bg-gray-50 dark:bg-slate-700/50 text-gray-900 dark:text-white text-sm transition-colors"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2.5 border border-gray-200 dark:border-slate-600/50 rounded-xl focus:ring-2 focus:ring-primary-600/20 focus:border-primary-500 bg-gray-50 dark:bg-slate-700/50 text-gray-900 dark:text-white text-sm resize-none transition-colors"
                    placeholder="Tell me about your project, timeline, and goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 dark:disabled:bg-slate-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30 disabled:shadow-none"
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      <FaPaperPlane size={14} />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div
                    role="alert"
                    className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 text-green-700 dark:text-green-300 rounded-xl text-sm"
                  >
                    Message received. I&apos;ll be in touch shortly.
                  </div>
                )}

                {status === 'error' && (
                  <div
                    role="alert"
                    className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 text-red-700 dark:text-red-300 rounded-xl text-sm"
                  >
                    Something went wrong. Please try again or reach out directly at built.to.cell@gmail.com.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
