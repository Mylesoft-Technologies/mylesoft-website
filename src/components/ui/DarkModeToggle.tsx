'use client'

import React, { useState, useEffect } from 'react'
import { Moon, Sun, Monitor } from 'lucide-react'
import { Button } from '@/components/ui/Button'

type Theme = 'light' | 'dark' | 'system'

export function DarkModeToggle() {
  const [theme, setTheme] = useState<Theme>('system')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as Theme || 'system'
    setTheme(savedTheme)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme)
  }

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-light-grey bg-white animate-pulse" />
    )
  }

  return (
    <div className="flex items-center space-x-1 p-1 bg-off-white rounded-lg border border-light-grey">
      <Button
        variant={theme === 'light' ? 'primary' : 'outline'}
        size="sm"
        onClick={() => handleThemeChange('light')}
        className="w-7 h-7 p-0"
        aria-label="Switch to light mode"
      >
        <Sun size={16} />
      </Button>
      
      <Button
        variant={theme === 'system' ? 'primary' : 'outline'}
        size="sm"
        onClick={() => handleThemeChange('system')}
        className="w-7 h-7 p-0"
        aria-label="Use system theme"
      >
        <Monitor size={16} />
      </Button>
      
      <Button
        variant={theme === 'dark' ? 'primary' : 'outline'}
        size="sm"
        onClick={() => handleThemeChange('dark')}
        className="w-7 h-7 p-0"
        aria-label="Switch to dark mode"
      >
        <Moon size={16} />
      </Button>
    </div>
  )
}

// Hook for using theme in components
export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      setTheme(systemTheme)
    } else if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme)
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme === 'system') {
        setTheme(mediaQuery.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [mounted])

  return { theme, mounted }
}
