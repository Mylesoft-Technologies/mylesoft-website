import React from 'react'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  title: string
  organization: string
  quote: string
  rating: number
  avatar?: string
}

export function TestimonialCard({ name, title, organization, quote, rating, avatar }: TestimonialCardProps) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={index < rating ? 'text-gold-400 fill-current' : 'text-light-grey'}
          />
        ))}
      </div>
      
      <blockquote className="testimonial-quote">
        "{quote}"
      </blockquote>
      
      <div className="testimonial-author">
        <div className="flex-shrink-0">
          {avatar ? (
            <img 
              src={avatar} 
              alt={name}
              className="testimonial-avatar"
            />
          ) : (
            <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
              <span className="text-gold-600 font-semibold text-lg">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div>
          <div className="testimonial-name">{name}</div>
          <div className="testimonial-title">
            {title}, {organization}
          </div>
        </div>
      </div>
    </div>
  )
}
