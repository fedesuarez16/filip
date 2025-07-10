import './globals.css'

export const metadata = {
  title: 'Página en Construcción',
  description: 'Sitio web en construcción',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
} 