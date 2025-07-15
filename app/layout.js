import './globals.css'

export const metadata = {
  title: 'FILIP 2:10 - Tienda en Línea',
  description: 'Descubre nuestra colección exclusiva de productos premium que transformarán tu experiencia diaria.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen">{children}</body>
    </html>
  )
} 