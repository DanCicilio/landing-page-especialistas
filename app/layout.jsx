import './globals.css'

export const metadata = {
  title: 'Dan Cicilio — Presença Digital Real para Empresas Locais',
  description: 'Domínio próprio, site com SEO de verdade e Google Meus Negócios bem posicionado. Presença digital que traz o cliente que já decidiu comprar, não só curiosidade.',
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
