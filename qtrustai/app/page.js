import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { FloatingPaper } from "@/components/floating-paper"
import ChatComponent from "@/components/ui/chat"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, Target } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"
import Head from "next/head"

export const metadata = {
  metadataBase: new URL('https://hookia.com'),
  title: "Hookia | Automatización Inteligente con IA para Negocios",
  description: "Impulsa tu empresa con soluciones de IA avanzada. Automatización de procesos, análisis predictivo y toma de decisiones inteligentes para transformar tu negocio.",
  keywords: ["automatización inteligente", "IA para negocios", "soluciones de IA", "transformación digital"],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['es_CR'],
    url: 'https://hookia.com',
    siteName: 'Hookia',
    images: [{ 
      url: "/og-image.jpg", 
      width: 1200, 
      height: 630,
      alt: 'Hookia - Automatización Inteligente con IA'
    }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  alternates: {
    canonical: 'https://hookia.com',
    languages: {
      'es-ES': 'https://hookia.com',
      'es-CR': 'https://cr.hookia.com'
    }
  }
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hookia",
    "url": "https://hookia.com",
    "logo": "https://hookia.com/logo.png",
    "description": "Empresa líder en soluciones de IA y automatización inteligente para negocios",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES"
    },
    "sameAs": [
      "https://linkedin.com/company/hookia",
      "https://twitter.com/hookia"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://hookia.com/buscar?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "es-ES"
  }

  return (
    <>
     <Head>
        <html lang="es" />
        <meta httpEquiv="content-language" content="es-ES" />
        <link rel="canonical" href="https://hookia.com" hrefLang="es-ES" />
        <link rel="alternate" href="https://hookia.com" hrefLang="es-ES" />
        <link rel="alternate" href="https://cr.hookia.com" hrefLang="es-CR" />
        <link rel="alternate" href="https://hookia.com" hrefLang="x-default" />
      </Head>
    
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden text-white">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          loading="lazy"
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />

        {/* About Section con Schema Markup */}
        <section 
          className="w-full py-12 md:py-24 lg:py-32"
          itemScope 
          itemType="https://schema.org/Organization"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
                itemProp="name"
              >
                Sobre Hookia
              </h2>
              <p 
                className="mx-auto max-w-[700px] text-gray-400 md:text-xl"
                itemProp="description"
              >
                Somos pioneros en la automatización inteligente, impulsando el futuro de los negocios con IA avanzada.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section con Microdatos */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <FloatingPaper count={6} />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Users className="h-12 w-12 mb-4 text-purple-500 mt-5" />}
                title="Automatización Avanzada"
                description="Tecnología de vanguardia que impulsa eficiencia operativa y reduce costos hasta en un 60%."
              />
              <FeatureCard
                icon={<Lightbulb className="h-12 w-12 mb-4 text-purple-500 mt-5" />}
                title="Crecimiento Inteligente"
                description="Estrategias basadas en IA para escalar negocios con innovación sostenible."
              />
              <FeatureCard
                icon={<Target className="h-12 w-12 mb-4 text-purple-500 mt-5" />}
                title="Nuestros Valores"
                description="Innovación, integridad y compromiso con el éxito de nuestros clientes guían cada decisión que tomamos."
              />
            </div>
          </div>
        </section>

        {/* Chat Section con Accesibilidad */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <FloatingPaper count={4} />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Chatea con Nosotros</h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                Estamos aquí para ayudarte con cualquier pregunta que tengas.
              </p>
            </div>
            <ChatComponent 
              aria-label="Chat de soporte en tiempo real"
              role="dialog"
            />
          </div>
        </section>

        {/* Footer con Enlaces Mejorados */}
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
          <p className="text-xs text-gray-400">© 2024 Hookia. Todos los derechos reservados.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="/blog">
              Blog de Automatización
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="/casos-de-exito">
              Casos de Éxito
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="/preguntas-frecuentes">
              FAQs
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="/terminos">
              Términos
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="/privacidad">
              Privacidad
            </Link>
          </nav>
        </footer>

        {/* Structured Data Script */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </div>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    </main>
    </>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card 
      className="bg-white/5 backdrop-blur-sm border-white/10"
      itemScope
      itemProp="makesOffer"
      itemType="https://schema.org/Service"
    >
      <CardContent className="flex flex-col items-center p-6">
        <div itemProp="image">{icon}</div>
        <h3 
          className="text-lg font-bold mb-2 text-white"
          itemProp="name"
        >
          {title}
        </h3>
        <p 
          className="text-center text-gray-400"
          itemProp="description"
        >
          {description}
        </p>
      </CardContent>
    </Card>
  )
}