import type React from "react"
import type { Metadata } from "next"
import { Poppins, Roboto } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "TONTON Shipyard - Excelência em Serviços Navais",
  description:
    "Sociedade Anônima especializada em manutenção, atracação e construção metálica naval. 370 m² à beira-mar em Vila Velha/ES.",
  keywords: "estaleiro, naval, rebocadores, atracação, manutenção naval, Vila Velha, Espírito Santo",
  openGraph: {
    title: "TONTON Shipyard - Excelência em Serviços Navais",
    description: "Sociedade Anônima especializada em manutenção, atracação e construção metálica naval.",
    type: "website",
    locale: "pt_BR",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${roboto.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TONTON Shipyard",
              description: "Sociedade Anônima especializada em serviços navais",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Beira Mar, 71",
                addressLocality: "Vila Velha",
                addressRegion: "ES",
                addressCountry: "BR",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-27-9999-9999",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body className="font-roboto">{children}</body>
    </html>
  )
}
