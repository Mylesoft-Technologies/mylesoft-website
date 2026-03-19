// Schema.org structured data for MylesCorp Technologies

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MylesCorp Technologies',
  alternateName: 'MylesCorp',
  url: 'https://mylescorp.co.ke',
  logo: 'https://mylescorp.co.ke/icon.png',
  description: 'East Africa\'s leading AI-powered software company transforming Education, Healthcare, Agriculture, and Business with innovative solutions.',
  email: 'info@mylescorp.co.ke',
  telephone: '+254 700 000000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nairobi',
    addressLocality: 'Nairobi',
    addressRegion: 'Nairobi County',
    addressCountry: 'KE',
  },
  sameAs: [
    'https://www.linkedin.com/company/mylescorp-technologies',
    'https://twitter.com/MylesCorpTech',
    'https://www.facebook.com/MylesCorpTechnologies',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+254 700 000000',
    contactType: 'customer service',
    availableLanguage: ['English', 'Swahili'],
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MylesCorp Technologies',
  url: 'https://mylescorp.co.ke',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://mylescorp.co.ke/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'MylesCorp Technologies',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KES',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '127',
  },
}
