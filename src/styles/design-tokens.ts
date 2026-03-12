// Mylesoft Technologies Design System v3
// Design tokens for consistent branding and UI components

export const colors = {
  // Brand Colors
  navy: {
    50: '#1A395B',  // Primary brand color
    100: '#2C5282',  // Light variant
    900: '#0F172A',  // Dark variant
  },
  gold: {
    50: '#C79639',  // Primary accent
    100: '#D4A574',  // Light variant
    900: '#B8860B',  // Dark variant
  },
  
  // Semantic Colors
  white: '#FFFFFF',
  'off-white': '#FAFBFC',
  'light-grey': '#E8EDF4',
  'medium-grey': '#545454',
  'dark-grey': '#212121',
  'navy-100': '#E8EDF4',
  'navy-500': '#1A395B',
  'navy-900': '#0F172A',
  'gold-100': '#FEF3C7',
  'gold-400': '#C79639',
  'gold-600': '#D4A574',
  'gold-900': '#B8860B',
  'success-green': '#2EA44F',
  'warning-amber': '#F59E0B',
  'error-red': '#DC2626',
  'info-blue': '#3B82F6',
} as const

export const typography = {
  fonts: {
    'plus-jakarta': '"Plus Jakarta Sans", system-ui, sans-serif"',
    'inter': '"Inter", system-ui, sans-serif"',
    'jetbrains-mono': '"JetBrains Mono", monospace',
  },
  
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
  },
  
  weights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  
  lineHeights: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  },
} as const

export const spacing = {
  xs: '0.5rem',      // 8px
  sm: '1rem',         // 16px
  md: '1.5rem',        // 24px
  lg: '2rem',         // 32px
  xl: '3rem',         // 48px
  '2xl': '4rem',        // 64px
  '3xl': '6rem',        // 96px
  '4xl': '8rem',        // 128px
} as const

export const shadows = {
  small: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  medium: '0 4px 6px 0 rgba(0, 0, 0, 0.1)',
  large: '0 10px 15px 0 rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px 0 rgba(0, 0, 0, 15)',
} as const

export const borderRadius = {
  none: '0',
  sm: '0.125rem',    // 2px
  base: '0.25rem',    // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  full: '9999px',
} as const

export const animations = {
  durations: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  
  easings: {
    ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.4, 0, 1, 0.2)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// Component-specific tokens
export const components = {
  button: {
    padding: {
      sm: '0.5rem 1rem',    // 8px 16px
      md: '0.75rem 1.5rem',   // 12px 24px
      lg: '1rem 2rem',       // 16px 32px
    },
    borderRadius: borderRadius.full,
    transition: 'all 150ms ease',
  },
  
  card: {
    padding: '1.5rem',
    borderRadius: borderRadius.xl,
    shadow: shadows.medium,
    transition: 'all 300ms ease',
  },
  
  input: {
    padding: '0.75rem 1rem',
    borderRadius: borderRadius.lg,
    borderWidth: '1px',
    transition: 'all 150ms ease',
  },
  
  navigation: {
    height: '4rem',
    transition: 'all 150ms ease',
  },
} as const
