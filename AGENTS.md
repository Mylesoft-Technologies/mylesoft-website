# AI Agent Development Guide

This file provides version-matched documentation for AI agents (Claude Code, Cursor, etc.) working with this Next.js 16.2 project.

## Project Overview

**Mylesoft Technologies** - AI-Powered Solutions for East African Businesses

- **Framework**: Next.js 16.2.0 with App Router
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full TypeScript support
- **Deployment**: Vercel optimized
- **Runtime**: Edge Runtime where applicable

## Key Technologies

### Core Stack
- **Next.js 16.2** - Latest features including:
  - `transitionTypes` on `<Link>` for CSS View Transitions
  - `unstable_catchError()` for granular error boundaries
  - `unstable_retry()` for enhanced error recovery
  - Enhanced `ImageResponse` with 2x performance improvements
  - `experimental.prefetchInlining` for optimized prefetching
  - `next start --inspect` for production debugging

### UI Components
- **Tailwind CSS** with custom Mylesoft design tokens
- **Lucide React** for icons
- **Framer Motion** for animations
- **Custom Components**: Badge, Button, ProductDemo, CustomErrorBoundary

### Data & APIs
- **Algolia** for search functionality
- **Resend** for email services
- **PostHog** for analytics
- **Vercel Analytics** for performance monitoring

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── (pages)/           # Route groups
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── interactive/       # Interactive components
│   ├── layout/            # Layout components
│   └── ui/                # UI components
├── lib/                   # Utility functions
└── styles/                # Style configurations
```

## Development Guidelines

### Code Style
- Use TypeScript for all new components
- Follow existing component patterns
- Utilize custom design tokens (navy, gold colors)
- Implement proper error handling with `unstable_retry`

### Component Development
```typescript
// Example: Using Next.js 16.2 features
import Link from 'next/link'
import { unstable_catchError } from 'next/error'

// CSS View Transitions
<Link href="/about" transitionTypes={['slide']}>About</Link>

// Custom Error Boundary
const ErrorBoundary = unstable_catchError(Component, { error, unstable_retry })
```

### API Routes
- Use Edge Runtime for optimal performance
- Implement proper error handling
- Follow RESTful conventions

## Next.js 16.2 Features Implemented

### ✅ CSS View Transitions
```jsx
<Link href="/products" transitionTypes={['slide']}>
  Products
</Link>
```

### ✅ Enhanced Error Boundaries
```tsx
// Custom error boundary with retry
export default unstable_catchError(CustomErrorBoundary)
```

### ✅ Optimized ImageResponse
- 2x faster for basic images
- 20x faster for complex images
- Geist Sans font integration
- Enhanced CSS/SVG support

### ✅ Production Debugging
```bash
npm run start:inspect      # Debug production server
npm run start:inspect-brk  # Debug with breakpoint
```

### ✅ Performance Optimizations
- `experimental.prefetchInlining` enabled
- Optimized package imports
- Enhanced caching strategies

## Environment Variables

```bash
# Development
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Production
NEXT_PUBLIC_APP_URL=https://mylesoft.com
NEXT_PUBLIC_ALGOLIA_APP_ID=your_app_id
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=your_search_key
RESEND_API_KEY=your_resend_key
POSTHOG_API_KEY=your_posthog_key
```

## Build & Deployment

```bash
# Development
npm run dev

# Build
npm run build

# Production with debugging
npm run start:inspect
npm run start:inspect-brk

# Type checking
npm run type-check

# Linting
npm run lint
```

## Testing

The project includes comprehensive error handling and type checking:
- TypeScript compilation: `npm run type-check`
- ESLint: `npm run lint`
- Build verification: `npm run build`

## Performance Monitoring

- **Vercel Analytics** - Core web vitals and user metrics
- **PostHog** - User behavior analytics
- **Custom Error Tracking** - Enhanced error reporting with context

## AI Agent Best Practices

1. **Always check Next.js version** before suggesting features
2. **Use version-matched documentation** from this file
3. **Prefer built-in Next.js features** over external libraries
4. **Follow existing patterns** in the codebase
5. **Test with `npm run build`** before finalizing changes
6. **Use TypeScript** for type safety
7. **Implement proper error handling** with new error APIs

## Common Tasks

### Adding a New Page
```typescript
// src/app/new-page/page.tsx
export default function NewPage() {
  return <div>New page content</div>
}
```

### Creating API Routes
```typescript
// src/app/api/endpoint/route.ts
export async function GET(request: Request) {
  return Response.json({ message: 'Hello from API' })
}
```

### Adding Components
```typescript
// src/components/ui/NewComponent.tsx
'use client'

export function NewComponent() {
  return <div>Component content</div>
}
```

## Troubleshooting

### Common Issues
- **Build errors**: Check TypeScript types and imports
- **Style issues**: Verify Tailwind class names
- **Performance**: Enable `experimental.prefetchInlining`
- **Debugging**: Use `npm run start:inspect`

### Error Recovery
- Use `unstable_retry()` instead of `reset()` for error boundaries
- Implement custom error boundaries with `unstable_catchError`
- Monitor error tracking in production

## Version Compatibility

This project uses **Next.js 16.2.0** with all latest features enabled. When working with this codebase:

1. ✅ **Use Next.js 16.2+ features** when appropriate
2. ✅ **Check compatibility** with existing dependencies
3. ✅ **Test thoroughly** with new APIs
4. ❌ **Don't downgrade** from 16.2 features
5. ❌ **Avoid deprecated APIs** from older versions

## Support

For project-specific questions:
- Review existing components for patterns
- Check Next.js 16.2 documentation
- Use the debugging tools provided
- Monitor build output for issues

---

**Last Updated**: Next.js 16.2.0  
**Project Version**: 0.1.0  
**Maintainer**: Mylesoft Technologies
