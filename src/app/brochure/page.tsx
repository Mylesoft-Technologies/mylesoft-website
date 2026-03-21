import fs from 'fs'
import path from 'path'

export const metadata = {
  title: 'MylesCorp Technologies — Company Brochure 2026',
  description: 'East Africa\'s leading AI-powered software company. View our digital brochure covering all products, services, team, and impact.',
}

export default function BrochurePage() {
  const filePath = path.join(process.cwd(), 'public', 'brochure', 'MylesCorp_Digital_Brochure.html')
  const html = fs.readFileSync(filePath, 'utf-8')

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ all: 'unset' }}
    />
  )
}
