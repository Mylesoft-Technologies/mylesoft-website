'use client'

import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import posthog from 'posthog-js'
import ReactGA from 'react-ga4'

export function AnalyticsProvider() {
  useEffect(() => {
    // Initialize Google Analytics 4
    if (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID)
    }

    // Initialize Posthog
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY && process.env.NEXT_PUBLIC_POSTHOG_HOST) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        // Disable in development
        loaded: (posthog) => {
          if (process.env.NODE_ENV === 'development') posthog.opt_out_capturing()
        }
      })
    }
  }, [])

  // Track page views
  useEffect(() => {
    const handleRouteChange = () => {
      // Google Analytics page view
      if (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
        ReactGA.send('pageview')
      }

      // Posthog page view
      if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
        posthog.capture('$pageview')
      }
    }

    // Initial page view
    handleRouteChange()

    // Listen for route changes
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', handleRouteChange)
      return () => {
        window.removeEventListener('popstate', handleRouteChange)
      }
    }
  }, [])

  return <Analytics />
}

// Custom hooks for analytics tracking
export function useAnalytics() {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Google Analytics event
    if (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
      ReactGA.event({
        category: properties?.category || 'User Interaction',
        action: eventName,
        label: properties?.label,
        value: properties?.value
      })
    }

    // Posthog event
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.capture(eventName, properties)
    }
  }

  const trackPageView = (page: string) => {
    // Google Analytics page view
    if (process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID) {
      ReactGA.send({ hitType: 'pageview', page })
    }

    // Posthog page view
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.capture('$pageview', { page })
    }
  }

  const trackUserProperties = (properties: Record<string, any>) => {
    // Posthog user properties
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.people.set(properties)
    }
  }

  const identifyUser = (userId: string, properties?: Record<string, any>) => {
    // Posthog identify
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.identify(userId, properties)
    }
  }

  return {
    trackEvent,
    trackPageView,
    trackUserProperties,
    identifyUser
  }
}

// Specific tracking functions for common events
export function trackNewsletterSignup(email: string) {
  const { trackEvent } = useAnalytics()
  trackEvent('newsletter_signup', {
    category: 'Lead Generation',
    label: 'Newsletter',
    value: 1
  })
}

export function trackDemoRequest(product: string, email: string) {
  const { trackEvent } = useAnalytics()
  trackEvent('demo_request', {
    category: 'Lead Generation',
    label: product,
    value: 1
  })
}

export function trackJobApplication(jobTitle: string, department: string) {
  const { trackEvent } = useAnalytics()
  trackEvent('job_application', {
    category: 'Careers',
    label: `${department} - ${jobTitle}`,
    value: 1
  })
}

export function trackContactFormSubmission(subject: string) {
  const { trackEvent } = useAnalytics()
  trackEvent('contact_form_submission', {
    category: 'Contact',
    label: subject,
    value: 1
  })
}

export function trackProductView(productName: string, category: string) {
  const { trackEvent } = useAnalytics()
  trackEvent('product_view', {
    category: 'Products',
    label: productName,
    value: 1
  })
}

export function trackBlogPostView(postTitle: string, category: string) {
  const { trackEvent } = useAnalytics()
  trackEvent('blog_post_view', {
    category: 'Content',
    label: postTitle,
    value: 1
  })
}

export function trackSearchQuery(query: string, resultsCount: number) {
  const { trackEvent } = useAnalytics()
  trackEvent('search_query', {
    category: 'Search',
    label: query,
    value: resultsCount
  })
}

export function trackWhatsAppClick() {
  const { trackEvent } = useAnalytics()
  trackEvent('whatsapp_click', {
    category: 'Social',
    label: 'WhatsApp',
    value: 1
  })
}

export function trackSocialShare(platform: string, content: string) {
  const { trackEvent } = useAnalytics()
  trackEvent('social_share', {
    category: 'Social',
    label: platform,
    value: 1
  })
}
