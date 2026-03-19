'use client'

import { useEffect } from 'react'
import type { ErrorInfo } from 'next/error'
import { Button } from '@/components/ui/Button'
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react'

export default function Error({ error, unstable_retry }: ErrorInfo) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
    
    // You could also send to a service like Sentry, LogRocket, etc.
    // errorReportingService.captureException(error)
  }, [error])

  const handleRetry = () => {
    unstable_retry()
  }

  const handleGoHome = () => {
    window.location.href = '/'
  }

  const handleReload = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-navy-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-premium-card overflow-hidden">
        {/* Error Header */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-white text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Application Error</h1>
          <p className="text-red-100">Something unexpected happened</p>
        </div>

        {/* Error Content */}
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-navy-500 mb-3">
              We're sorry for the inconvenience
            </h2>
            <p className="text-medium-grey leading-relaxed">
              An unexpected error occurred while loading this page. Our team has been notified 
              and is working to resolve the issue. You can try refreshing the page or go back 
              to the homepage.
            </p>
          </div>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === 'development' && (
            <details className="mb-6">
              <summary className="cursor-pointer text-sm font-medium text-navy-500 mb-2 hover:text-gold-500">
                Error Details (Development Mode)
              </summary>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-2">
                <pre className="text-xs font-mono text-red-700 whitespace-pre-wrap break-all">
                  {error.stack || error.message}
                </pre>
              </div>
            </details>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Button
              onClick={handleRetry}
              className="flex items-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Try Again</span>
            </Button>
            
            <Button
              variant="outline"
              onClick={handleReload}
              className="flex items-center space-x-2"
            >
              <Bug className="w-4 h-4" />
              <span>Reload Page</span>
            </Button>
            
            <Button
              variant="secondary"
              onClick={handleGoHome}
              className="flex items-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>Go Home</span>
            </Button>
          </div>

          {/* Support Information */}
          <div className="bg-off-white rounded-lg p-6 text-center">
            <h3 className="font-semibold text-navy-500 mb-2">Need Help?</h3>
            <p className="text-sm text-medium-grey mb-4">
              If this problem continues, please don't hesitate to reach out to our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
              <a 
                href="mailto:support@mylesoft.com" 
                className="text-gold-500 hover:text-gold-600 font-medium"
              >
                support@mylesoft.com
              </a>
              <span className="text-medium-grey">•</span>
              <a 
                href="tel:+254743993715" 
                className="text-gold-500 hover:text-gold-600 font-medium"
              >
                +254 743 993 715
              </a>
            </div>
          </div>
        </div>

        {/* Error Footer */}
        <div className="bg-light-grey px-8 py-4 text-center">
          <p className="text-xs text-medium-grey">
            Error ID: {Date.now()} | Reference: {error.name || 'Unknown'}
          </p>
        </div>
      </div>
    </div>
  )
}
