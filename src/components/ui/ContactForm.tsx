'use client'

import { useState } from 'react'
import { sendContactEmail } from '@/app/actions/sendEmail'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value,
      organisation: (form.elements.namedItem('organisation') as HTMLInputElement)?.value,
      subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    const result = await sendContactEmail(data)

    if (result.success) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
      setErrorMsg(result.error || 'Something went wrong.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-navy mb-2 font-body">
            Full Name *
          </label>
          <input
            name="name" type="text" required
            placeholder="John Mwangi"
            className="w-full px-4 py-3 rounded-lg border border-navy/20 font-body text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-navy mb-2 font-body">
            Email Address *
          </label>
          <input
            name="email" type="email" required
            placeholder="john@company.co.ke"
            className="w-full px-4 py-3 rounded-lg border border-navy/20 font-body text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-navy mb-2 font-body">
            Phone Number
          </label>
          <input
            name="phone" type="tel"
            placeholder="+254 7XX XXX XXX"
            className="w-full px-4 py-3 rounded-lg border border-navy/20 font-body text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-navy mb-2 font-body">
            Organisation
          </label>
          <input
            name="organisation" type="text"
            placeholder="Your school, company, or clinic"
            className="w-full px-4 py-3 rounded-lg border border-navy/20 font-body text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-navy mb-2 font-body">
          Subject *
        </label>
        <select
          name="subject" required
          className="w-full px-4 py-3 rounded-lg border border-navy/20 font-body text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
        >
          <option value="">Select a subject</option>
          <option value="Product Demo Request">
            Product Demo Request
          </option>
          <option value="Website Development Enquiry">
            Website Development Enquiry
          </option>
          <option value="Pricing Information">
            Pricing Information
          </option>
          <option value="Technical Support">
            Technical Support
          </option>
          <option value="Partnership Enquiry">
            Partnership Enquiry
          </option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-navy mb-2 font-body">
          Message *
        </label>
        <textarea
          name="message" required rows={5}
          placeholder="Tell us how we can help you..."
          className="w-full px-4 py-3 rounded-lg border border-navy/20 font-body text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 resize-none"
        />
      </div>

      {status === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-700 text-sm font-body">
            Message sent successfully! We will get back to you within 2 business hours. Check your email for a confirmation.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm font-body">
            {errorMsg}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 bg-gold text-navy font-body font-bold text-[15px] rounded-lg tracking-[0.4px] hover:bg-gold-light hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
      >
        {status === 'loading'
          ? 'Sending...'
          : 'Send Message →'}
      </button>
    </form>
  )
}
