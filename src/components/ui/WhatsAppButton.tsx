'use client'

import React, { useState } from 'react'
import { MessageCircle, X, Phone, Clock } from 'lucide-react'

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const WHATSAPP_LINK =
  'https://wa.me/254743993715?' +
  'text=Hi%20MylesCorp!%20I%20found%20you%20on%20' +
  'your%20website%20and%20would%20like%20to%20' +
  'learn%20more%20about%20your%20products.'
  
  const handleClick = () => {
    window.open(WHATSAPP_LINK, '_blank')
  }

  const handleQuickMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/254743993715?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Quick Message Options */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 space-y-2 fade-in">
          <div className="bg-white rounded-lg shadow-gold p-4 mb-2">
            <div className="flex items-center space-x-2 mb-3">
              <MessageCircle className="text-green-500" size={20} />
              <span className="font-semibold text-navy-500">Quick Questions</span>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => handleQuickMessage('Hi! I\'d like to book a demo.')}
                className="w-full text-left px-4 py-3 font-body font-semibold text-white bg-gold hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep transition-all duration-200 cursor-pointer rounded-md"
              >
                📅 Book a Demo
              </button>
              <button
                onClick={() => handleQuickMessage('Hi! I need pricing information.')}
                className="w-full text-left px-4 py-3 font-body font-semibold text-white bg-gold hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep transition-all duration-200 cursor-pointer rounded-md"
              >
                💰 Pricing Info
              </button>
              <button
                onClick={() => handleQuickMessage('Hi! I have a technical question.')}
                className="w-full text-left px-4 py-3 font-body font-semibold text-white bg-gold hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep transition-all duration-200 cursor-pointer rounded-md"
              >
                🔧 Technical Support
              </button>
              <button
                onClick={() => handleQuickMessage('Hi! I\'m interested in partnership opportunities.')}
                className="w-full text-left px-4 py-3 font-body font-semibold text-white bg-gold hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep transition-all duration-200 cursor-pointer rounded-md"
              >
                🤝 Partnership
              </button>
            </div>
          </div>
          
          {/* Business Hours Info */}
          <div className="bg-white rounded-lg shadow-gold p-3">
            <div className="flex items-center space-x-2 text-sm text-medium-grey">
              <Clock size={16} />
              <span>Mon-Fri: 9AM-6PM EAT</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-medium-grey">
              <Phone size={16} />
              <span>+254 743 993 715</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-medium-grey">
              <a href="mailto:info@mylescorp.co.ke" className="text-gold-500 hover:text-gold-600">
                <MessageCircle size={16} />
              </a>
              <span>info@mylescorp.co.ke</span>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        
        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-gold text-white rounded-full p-4 shadow-gold hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep transition-all duration-300 cursor-pointer font-body font-bold tracking-[0.4px]"
          aria-label="Chat on WhatsApp"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <MessageCircle size={24} />
          )}
        </button>
        
        {/* Notification Badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 bg-gold-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
            1
          </div>
        )}
      </div>

      {/* Tooltip */}
      {!isOpen && (
        <div className="absolute bottom-full right-0 mb-2 bg-navy-500 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap fade-in">
          Chat with us on WhatsApp
          <div className="absolute bottom-0 right-4 w-2 h-2 bg-navy-500 transform rotate-45 translate-y-1" />
        </div>
      )}
    </div>
  )
}
