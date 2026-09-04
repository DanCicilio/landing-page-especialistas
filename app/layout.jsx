import './globals.css'

export const metadata = {
  title: 'Dan Cicilio, Pri Martins & Pietro Cicilio - Especialistas em Design Web',
  description: 'Websites modernos e estratégicos para pequenas e médias empresas. Design, Performance e Google Meus Negócios.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-dark">{children}</body>
    </html>
  )
}
