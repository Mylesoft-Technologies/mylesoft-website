export const metadata = {
  title: 'MylesCorp Technologies — Company Brochure 2026',
  description: 'MylesCorp Technologies Ltd — East Africa\'s leading AI-powered software company. View our digital brochure covering all products, services, team, and impact.',
  openGraph: {
    title: 'MylesCorp Technologies — Company Brochure 2026',
    description: 'Discover EduMyles, MylesCare, AgriMyles, EduRyde and MylesCRM — AI-powered solutions transforming East Africa.',
    url: 'https://www.mylescorp.co.ke/brochure',
    siteName: 'MylesCorp Technologies Ltd',
    type: 'website',
  },
}

export default function BrochurePage() {
  return (
    <iframe
      src="/brochure/MylesCorp_Digital_Brochure.html"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
        zIndex: 9999,
      }}
      title="MylesCorp Technologies — Digital Brochure 2026"
      allowFullScreen
    />
  )
}
