'use client'

import React, { useEffect, useState } from 'react'
import { MessageCircle, X, Minimize2, Maximize2, Send, User, Bot } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Welcome to MylesCorp Technologies. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    // Initialize Crisp or Intercom based on environment variables
    if (process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID) {
      initializeCrisp()
    } else if (process.env.NEXT_PUBLIC_INTERCOM_APP_ID) {
      initializeIntercom()
    }
  }, [])

  const initializeCrisp = () => {
    // Crisp initialization would go here
    // For now, we'll use our custom chat interface
    console.log('Crisp would be initialized here')
  }

  const initializeIntercom = () => {
    // Intercom initialization would go here
    // For now, we'll use our custom chat interface
    console.log('Intercom would be initialized here')
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes('product') || input.includes('solution')) {
      return 'I can help you learn about our AI-powered solutions! We offer EduMyles for education, MylesCare for healthcare, AgriMyles for agriculture, and MylesCRM for business. Which product interests you most?'
    } else if (input.includes('pricing') || input.includes('cost') || input.includes('price')) {
      return 'Our pricing varies by product and organization size. I\'d recommend booking a demo with our team to get a customized quote. Would you like me to arrange that for you?'
    } else if (input.includes('demo') || input.includes('trial')) {
      return 'Great! I can help you book a demo. Our team will walk you through our solutions and answer all your questions. Click the "Book a Demo" button or I can connect you with our sales team.'
    } else if (input.includes('support') || input.includes('help')) {
      return 'I\'m here to help! For technical support, you can reach our team at support@mylescorp.co.ke or call +254 743 993 715. What specific issue are you experiencing?'
    } else if (input.includes('contact') || input.includes('phone') || input.includes('email')) {
      return 'You can reach us at:\n📧 Email: info@mylescorp.co.ke\n📞 Phone: +254 743 993 715\n📍 Location: Wester Heights, Westlands, Nairobi\nWould you like me to connect you with a specific team member?'
    } else if (input.includes('career') || input.includes('job') || input.includes('work')) {
      return 'We\'re always looking for talented individuals! Check our careers page at /careers for current openings. What type of role are you interested in?'
    } else {
      return 'Thank you for your message! Our team typically responds within a few hours during business hours (9 AM - 6 PM EAT). For urgent matters, please call us at +254 743 993 715. Is there anything specific I can help you with?'
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-gold hover:bg-gold-light text-white rounded-full p-4 shadow-lg hover:shadow-xl"
          aria-label="Open live chat"
        >
          <MessageCircle size={24} />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 w-96 max-w-[calc(100vw-3rem)]">
      {!isMinimized && (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gold/20">
          {/* Header */}
          <div className="bg-navy text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                <Bot size={20} className="text-gold" />
              </div>
              <div>
                <h3 className="font-semibold">Live Chat</h3>
                <p className="text-sm text-light-blue">We typically reply in minutes</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1 hover:bg-navy-dark rounded transition-colors"
                aria-label="Minimize chat"
              >
                <Minimize2 size={18} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-navy-dark rounded transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot size={16} className="text-gold" />
                  </div>
                )}
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-navy text-white'
                      : 'bg-white text-gray-800 border border-gold/20'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                {message.sender === 'user' && (
                  <div className="w-8 h-8 bg-navy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={16} className="text-navy" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start space-x-2 justify-start">
                <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot size={16} className="text-gold" />
                </div>
                <div className="bg-white text-gray-800 border border-gold/20 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gold/20 bg-white">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="sm"
                className="p-2"
              >
                <Send size={18} />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by MylesCorp Technologies • Available 9 AM - 6 PM EAT
            </p>
          </div>
        </div>
      )}

      {/* Minimized Chat */}
      {isMinimized && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gold/20 p-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center">
              <Bot size={16} className="text-gold" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Live Chat</h3>
              <p className="text-xs text-gray-500">Click to expand</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(false)}
              className="p-1 hover:bg-gray-50 rounded transition-colors"
              aria-label="Expand chat"
            >
              <Maximize2 size={16} />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-50 rounded transition-colors"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// Hook for live chat integration
export function useLiveChat() {
  const [isAvailable, setIsAvailable] = useState(true)
  const [businessHours, setBusinessHours] = useState({
    start: '09:00',
    end: '18:00',
    timezone: 'EAT'
  })

  const isBusinessHours = () => {
    const now = new Date()
    const currentTime = now.toLocaleTimeString('en-US', {
      timeZone: 'Africa/Nairobi',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    
    return currentTime >= businessHours.start && currentTime <= businessHours.end
  }

  const initiateChat = (topic?: string) => {
    // Logic to initiate chat with specific topic
    console.log('Initiating chat with topic:', topic)
  }

  return {
    isAvailable,
    isBusinessHours,
    businessHours,
    initiateChat
  }
}
