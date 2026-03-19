# AI Agent Development Guide

This file provides version-matched documentation for AI agents (Claude Code, Cursor, etc.) working with this Next.js 16.2 project.

## Project Overview

**MylesCorp Technologies** - AI-Powered Solutions for East African Businesses

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
**Maintainer**: MylesCorp Technologies

<!-- NEXT-AGENTS-MD-START -->[Next.js Docs Index]|root: ./.next-docs|STOP. What you remember about Next.js is WRONG for this project. Always search docs and read before any task.|If docs missing, run this command first: npx @next/codemod agents-md --output AGENTS.md|01-app:{04-glossary.mdx}|01-app/01-getting-started:{01-installation.mdx,02-project-structure.mdx,03-layouts-and-pages.mdx,04-linking-and-navigating.mdx,05-server-and-client-components.mdx,06-fetching-data.mdx,07-mutating-data.mdx,08-caching.mdx,09-revalidating.mdx,10-error-handling.mdx,11-css.mdx,12-images.mdx,13-fonts.mdx,14-metadata-and-og-images.mdx,15-route-handlers.mdx,16-proxy.mdx,17-deploying.mdx,18-upgrading.mdx}|01-app/02-guides:{ai-agents.mdx,analytics.mdx,authentication.mdx,backend-for-frontend.mdx,caching-without-cache-components.mdx,ci-build-caching.mdx,content-security-policy.mdx,css-in-js.mdx,custom-server.mdx,data-security.mdx,debugging.mdx,draft-mode.mdx,environment-variables.mdx,forms.mdx,incremental-static-regeneration.mdx,instant-navigation.mdx,instrumentation.mdx,internationalization.mdx,json-ld.mdx,lazy-loading.mdx,local-development.mdx,mcp.mdx,mdx.mdx,memory-usage.mdx,migrating-to-cache-components.mdx,multi-tenant.mdx,multi-zones.mdx,open-telemetry.mdx,package-bundling.mdx,prefetching.mdx,preserving-ui-state.mdx,production-checklist.mdx,progressive-web-apps.mdx,public-static-pages.mdx,redirecting.mdx,sass.mdx,scripts.mdx,self-hosting.mdx,single-page-applications.mdx,static-exports.mdx,streaming.mdx,tailwind-v3-css.mdx,third-party-libraries.mdx,videos.mdx}|01-app/02-guides/migrating:{app-router-migration.mdx,from-create-react-app.mdx,from-vite.mdx}|01-app/02-guides/testing:{cypress.mdx,jest.mdx,playwright.mdx,vitest.mdx}|01-app/02-guides/upgrading:{codemods.mdx,version-14.mdx,version-15.mdx,version-16.mdx}|01-app/03-api-reference:{07-edge.mdx,08-turbopack.mdx}|01-app/03-api-reference/01-directives:{use-cache-private.mdx,use-cache-remote.mdx,use-cache.mdx,use-client.mdx,use-server.mdx}|01-app/03-api-reference/02-components:{font.mdx,form.mdx,image.mdx,link.mdx,script.mdx}|01-app/03-api-reference/03-file-conventions/01-metadata:{app-icons.mdx,manifest.mdx,opengraph-image.mdx,robots.mdx,sitemap.mdx}|01-app/03-api-reference/03-file-conventions/02-route-segment-config:{dynamicParams.mdx,instant.mdx,maxDuration.mdx,preferredRegion.mdx,runtime.mdx}|01-app/03-api-reference/03-file-conventions:{default.mdx,dynamic-routes.mdx,error.mdx,forbidden.mdx,instrumentation-client.mdx,instrumentation.mdx,intercepting-routes.mdx,layout.mdx,loading.mdx,mdx-components.mdx,not-found.mdx,page.mdx,parallel-routes.mdx,proxy.mdx,public-folder.mdx,route-groups.mdx,route.mdx,src-folder.mdx,template.mdx,unauthorized.mdx}|01-app/03-api-reference/04-functions:{after.mdx,cacheLife.mdx,cacheTag.mdx,catchError.mdx,connection.mdx,cookies.mdx,draft-mode.mdx,fetch.mdx,forbidden.mdx,generate-image-metadata.mdx,generate-metadata.mdx,generate-sitemaps.mdx,generate-static-params.mdx,generate-viewport.mdx,headers.mdx,image-response.mdx,next-request.mdx,next-response.mdx,not-found.mdx,permanentRedirect.mdx,redirect.mdx,refresh.mdx,revalidatePath.mdx,revalidateTag.mdx,unauthorized.mdx,unstable_cache.mdx,unstable_noStore.mdx,unstable_rethrow.mdx,updateTag.mdx,use-link-status.mdx,use-params.mdx,use-pathname.mdx,use-report-web-vitals.mdx,use-router.mdx,use-search-params.mdx,use-selected-layout-segment.mdx,use-selected-layout-segments.mdx,userAgent.mdx}|01-app/03-api-reference/05-config/01-next-config-js:{adapterPath.mdx,allowedDevOrigins.mdx,appDir.mdx,assetPrefix.mdx,authInterrupts.mdx,basePath.mdx,cacheComponents.mdx,cacheHandlers.mdx,cacheLife.mdx,compress.mdx,crossOrigin.mdx,cssChunking.mdx,deploymentId.mdx,devIndicators.mdx,distDir.mdx,env.mdx,expireTime.mdx,exportPathMap.mdx,generateBuildId.mdx,generateEtags.mdx,headers.mdx,htmlLimitedBots.mdx,httpAgentOptions.mdx,images.mdx,incrementalCacheHandlerPath.mdx,inlineCss.mdx,logging.mdx,mdxRs.mdx,onDemandEntries.mdx,optimizePackageImports.mdx,output.mdx,pageExtensions.mdx,poweredByHeader.mdx,productionBrowserSourceMaps.mdx,proxyClientMaxBodySize.mdx,reactCompiler.mdx,reactMaxHeadersLength.mdx,reactStrictMode.mdx,redirects.mdx,rewrites.mdx,sassOptions.mdx,serverActions.mdx,serverComponentsHmrCache.mdx,serverExternalPackages.mdx,staleTimes.mdx,staticGeneration.mdx,taint.mdx,trailingSlash.mdx,transpilePackages.mdx,turbopack.mdx,turbopackFileSystemCache.mdx,turbopackIgnoreIssue.mdx,typedRoutes.mdx,typescript.mdx,urlImports.mdx,useLightningcss.mdx,viewTransition.mdx,webVitalsAttribution.mdx,webpack.mdx}|01-app/03-api-reference/05-config:{02-typescript.mdx,03-eslint.mdx}|01-app/03-api-reference/06-cli:{create-next-app.mdx,next.mdx}|02-pages/01-getting-started:{01-installation.mdx,02-project-structure.mdx,04-images.mdx,05-fonts.mdx,06-css.mdx,11-deploying.mdx}|02-pages/02-guides:{analytics.mdx,authentication.mdx,babel.mdx,ci-build-caching.mdx,content-security-policy.mdx,css-in-js.mdx,custom-server.mdx,debugging.mdx,draft-mode.mdx,environment-variables.mdx,forms.mdx,incremental-static-regeneration.mdx,instrumentation.mdx,internationalization.mdx,lazy-loading.mdx,mdx.mdx,multi-zones.mdx,open-telemetry.mdx,package-bundling.mdx,post-css.mdx,preview-mode.mdx,production-checklist.mdx,redirecting.mdx,sass.mdx,scripts.mdx,self-hosting.mdx,static-exports.mdx,tailwind-v3-css.mdx,third-party-libraries.mdx}|02-pages/02-guides/migrating:{app-router-migration.mdx,from-create-react-app.mdx,from-vite.mdx}|02-pages/02-guides/testing:{cypress.mdx,jest.mdx,playwright.mdx,vitest.mdx}|02-pages/02-guides/upgrading:{codemods.mdx,version-10.mdx,version-11.mdx,version-12.mdx,version-13.mdx,version-14.mdx,version-9.mdx}|02-pages/03-building-your-application/01-routing:{01-pages-and-layouts.mdx,02-dynamic-routes.mdx,03-linking-and-navigating.mdx,05-custom-app.mdx,06-custom-document.mdx,07-api-routes.mdx,08-custom-error.mdx}|02-pages/03-building-your-application/02-rendering:{01-server-side-rendering.mdx,02-static-site-generation.mdx,04-automatic-static-optimization.mdx,05-client-side-rendering.mdx}|02-pages/03-building-your-application/03-data-fetching:{01-get-static-props.mdx,02-get-static-paths.mdx,03-forms-and-mutations.mdx,03-get-server-side-props.mdx,05-client-side.mdx}|02-pages/03-building-your-application/06-configuring:{12-error-handling.mdx}|02-pages/04-api-reference:{06-edge.mdx,08-turbopack.mdx}|02-pages/04-api-reference/01-components:{font.mdx,form.mdx,head.mdx,image-legacy.mdx,image.mdx,link.mdx,script.mdx}|02-pages/04-api-reference/02-file-conventions:{instrumentation.mdx,proxy.mdx,public-folder.mdx,src-folder.mdx}|02-pages/04-api-reference/03-functions:{get-initial-props.mdx,get-server-side-props.mdx,get-static-paths.mdx,get-static-props.mdx,next-request.mdx,next-response.mdx,use-params.mdx,use-report-web-vitals.mdx,use-router.mdx,use-search-params.mdx,userAgent.mdx}|02-pages/04-api-reference/04-config/01-next-config-js:{adapterPath.mdx,allowedDevOrigins.mdx,assetPrefix.mdx,basePath.mdx,bundlePagesRouterDependencies.mdx,compress.mdx,crossOrigin.mdx,deploymentId.mdx,devIndicators.mdx,distDir.mdx,env.mdx,exportPathMap.mdx,generateBuildId.mdx,generateEtags.mdx,headers.mdx,httpAgentOptions.mdx,images.mdx,logging.mdx,onDemandEntries.mdx,optimizePackageImports.mdx,output.mdx,pageExtensions.mdx,poweredByHeader.mdx,productionBrowserSourceMaps.mdx,proxyClientMaxBodySize.mdx,reactStrictMode.mdx,redirects.mdx,rewrites.mdx,serverExternalPackages.mdx,trailingSlash.mdx,transpilePackages.mdx,turbopack.mdx,typescript.mdx,urlImports.mdx,useLightningcss.mdx,webVitalsAttribution.mdx,webpack.mdx}|02-pages/04-api-reference/04-config:{01-typescript.mdx,02-eslint.mdx}|02-pages/04-api-reference/05-cli:{create-next-app.mdx,next.mdx}|03-architecture:{accessibility.mdx,fast-refresh.mdx,nextjs-compiler.mdx,supported-browsers.mdx}|04-community:{01-contribution-guide.mdx,02-rspack.mdx}<!-- NEXT-AGENTS-MD-END -->
