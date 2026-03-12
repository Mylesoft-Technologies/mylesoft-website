// Mylesoft Technologies Design System v3
// Design tokens for consistent branding and UI components

export const colors = {
  // Brand Colors - Exact hex values from specification
  navy: {
    primary: '#1A395B',  // Navy Blue (Primary)
  },
  gold: {
    primary: '#C79639',  // Gold (Accent)
    hover: '#A67C2A',    // Darkened gold for hover states
  },
  
  // Exact color palette from specification
  white: '#FFFFFF',           // White - Page backgrounds, cards, text on dark
  'light-blue': '#C7D7EF',   // Light Blue - Secondary highlights, badges, tags
  'off-white': '#F8FAFC',    // Off White - Alternating section backgrounds
  'dark-grey': '#212121',    // Dark Grey - Primary body text
  'medium-grey': '#545454',  // Medium Grey - Secondary text, captions, metadata
  'light-grey': '#E8EDF4',    // Light Grey - Card borders, dividers, input borders
  'success-green': '#2EA44F', // Success Green - Live status badges, success states
  'warning-amber': '#F59E0B',  // Warning Amber - In Development badges, warnings
  
  // Semantic color tokens for components
  'navy-500': '#1A395B',
  'navy-100': '#C7D7EF',
  'gold-400': '#C79639',
  'gold-500': '#A67C2A',
  'gold-100': '#FEF3C7',
} as const

export const typography = {
  fonts: {
    'plus-jakarta': '"Plus Jakarta Sans", system-ui, sans-serif',
    'inter': '"Inter", system-ui, sans-serif',
    'jetbrains-mono': '"JetBrains Mono", monospace',
  },
  
  // Exact typography specifications from design system
  sizes: {
    h1: '48px',        // H1 Page Title - 48–64px
    h1Large: '64px',   // H1 Page Title - Large variant
    h2: '32px',        // H2 Section Title - 32–40px
    h2Large: '40px',   // H2 Section Title - Large variant
    h3: '20px',        // H3 Card Title - 20–24px
    h3Large: '24px',   // H3 Card Title - Large variant
    body: '16px',      // Body Text - 16px
    small: '14px',     // Small / Caption - 14px
    button: '16px',    // Button Text - 16px
    nav: '15px',       // Navigation - 15px
    code: '14px',      // Code - 14px
  },
  
  weights: {
    h1: '800',         // H1 Page Title - 800 ExtraBold
    h2: '700',         // H2 Section Title - 700 Bold
    h3: '600',         // H3 Card Title - 600 SemiBold
    body: '400',       // Body Text - 400 Regular
    small: '400',      // Small / Caption - 400 Regular
    button: '600',     // Button Text - 600 SemiBold
    nav: '500',        // Navigation - 500 Medium
    code: '400',       // Code - 400 Regular
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
  xl: '0 20px 25px 0 rgba(0, 0, 0, 0.15)',
} as const

export const borderRadius = {
  none: '0',
  sm: '0.125rem',    // 2px
  base: '0.25rem',    // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px (for rounded-xl)
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

// Component-specific tokens matching exact specifications
export const components = {
  button: {
    primary: {
      background: colors.gold.primary,
      text: colors.white,
      hover: colors.gold.hover,
      padding: '0.75rem 2rem', // px-8 py-3 = 12px 32px
      borderRadius: borderRadius.full,
      shadow: '0 4px 6px 0 rgba(0, 0, 0, 0.1)',
      transition: 'all 150ms ease',
    },
    secondary: {
      background: 'transparent',
      text: colors.navy.primary,
      border: `2px solid ${colors.navy.primary}`,
      hover: {
        background: colors.navy.primary,
        text: colors.white,
      },
      padding: '0.75rem 2rem',
      borderRadius: borderRadius.full,
      transition: 'all 150ms ease',
    },
  },
  
  card: {
    product: {
      background: colors.white,
      border: `1px solid ${colors['light-grey']}`,
      borderRadius: borderRadius['2xl'], // rounded-2xl
      shadow: shadows.small, // shadow-sm
      hover: {
        shadow: shadows.large, // shadow-lg
        transform: 'translateY(-4px)',
        borderTop: `4px solid ${colors.gold.primary}`, // gold top accent
      },
      transition: 'all 300ms ease',
    },
    blog: {
      borderRadius: borderRadius['2xl'], // rounded-2xl
      image: 'aspect-video', // 16:9 image
      category: {
        background: colors.gold.primary, // gold category pill
        color: colors.white,
      },
      title: colors.navy.primary, // navy title
      excerpt: colors['medium-grey'], // grey excerpt
    },
    testimonial: {
      background: colors.white,
      stars: colors.gold.primary, // gold stars
      quote: 'italic',
      avatar: 'circular',
      name: colors.navy.primary, // navy name
    },
  },
  
  navigation: {
    sticky: 'sticky top-0',
    background: colors.white,
    text: colors.navy.primary,
    active: {
      underline: `2px solid ${colors.gold.primary}`, // gold underline on active
    },
    hero: {
      background: 'transparent', // transparent on hero
    },
    transition: 'all 150ms ease',
  },
  
  form: {
    input: {
      borderRadius: borderRadius['2xl'], // rounded-xl
      focus: {
        ring: `2px solid ${colors.navy.primary}`, // navy focus ring
      },
      border: `1px solid ${colors['light-grey']}`,
      padding: '0.75rem 1rem',
    },
    submit: {
      background: colors.gold.primary, // gold submit
      color: colors.white,
    },
  },
  
  stats: {
    counter: {
      number: {
        color: colors.gold.primary, // Large bold gold number
        weight: typography.weights.h2,
        size: typography.sizes.h2Large,
      },
      label: colors.navy.primary, // navy label
    },
  },
} as const
