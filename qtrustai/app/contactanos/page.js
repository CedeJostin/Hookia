import Head from "next/head"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Waypoints } from "lucide-react"
import ChatComponent from "@/components/ui/chat"
import Link from "next/link"

export default function ContactoPage() {
  // Schema.org structured data
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto - HookIA",
    "description": "Contacta con HookIA para transformar tu negocio con IA",
    "url": "https://hookia.com/contacto",
    "inLanguage": "es-ES",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86370703",
      "contactType": "customer service",
      "email": "hookia@hookia.com",
      "areaServed": "ES",
      "availableLanguage": ["es", "es-ES"]
    },
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Costa Rica", 
        "addressRegion": "San José Heredia Alajuela Cartago Guanacaste Puntarenas Limón",
        "addressLocality": "Costa Rica",
        "postalCode": "40501",
        "addressCountry": "CR"
      }
    }
  }

  return (
    <>
       <Head>
        <html lang="es" /> {/* Declaración explícita del idioma español */}
        <title>Contacta con HookIA | Soluciones de IA para tu Empresa</title>
        <meta name="description" content="¿Necesitas ayuda con soluciones de IA? Contacta con HookIA. Ofrecemos atención personalizada y respuestas a todas tus preguntas sobre transformación digital." />
        <meta name="keywords" content="contacto HookIA, IA empresarial, atención al cliente, consultoría IA, Madrid" />
        
        {/* Configuración regional e idioma */}
        <meta httpEquiv="content-language" content="es-ES" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:locale:alternate" content="es_CR" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contacta con HookIA | Soluciones de IA para tu Empresa" />
        <meta property="og:description" content="¿Necesitas ayuda con soluciones de IA? Contacta con HookIA para transformar tu negocio." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>

        {/* Canonical URL */}
        <link rel="canonical" href="https://hookia.es/contacto" hrefLang="es-ES" />
        
        {/* Alternate URLs para diferentes regiones */}
        <link rel="alternate" href="https://hookia.es/contacto" hrefLang="es-ES" />
        <link rel="alternate" href="https://cr.hookia.es/contacto" hrefLang="es-CR" />
        <link rel="alternate" href="https://hookia.es/contacto" hrefLang="x-default" />
      </Head>

      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden text-white">
        {/* Ambient background with moving particles */}
        <div className="h-full w-full absolute inset-0 z-0" aria-hidden="true">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="relative z-10">
          <Navbar />

          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32" aria-label="Encabezado de contacto">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Contáctanos
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Estamos aquí para responder tus preguntas y ayudarte a transformar tu negocio con IA.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="w-full py-12 md:py-24 lg:py-32" aria-label="Formulario e información de contacto">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Chat Component Card */}
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4 mt-4">Envíanos un mensaje</h2>
                    <h3 className="mb-3">Intenta con &quot;Quiero Agendar una cita&quot;</h3>
                    <ChatComponent />
                  </CardContent>
                </Card>

                {/* Contact Information Card */}
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4 mt-4">Información de contacto</h2>
                    <div className="space-y-4">
                      <ContactInfo 
                        icon={<Mail className="h-6 w-6 text-blue-500" aria-hidden="true" />} 
                        text="hookia@hookia.com"
                        type="email"
                      />
                      <ContactInfo 
                        icon={<Phone className="h-6 w-6 text-blue-500" aria-hidden="true" />} 
                        text="+506 8637 0703"
                        type="phone"
                      />
                     <ContactInfo 
                        icon={<Waypoints className="h-6 w-6 text-blue-500" aria-hidden="true" />}
                        text={
                          <a 
                            href="https://www.instagram.com/learnusprod/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-purple-400 cursor-pointer"
                          >
                            @hookia
                          </a>
                        }
                        type="instagram"
                      />
                    </div>
                  </CardContent>
                 
                </Card>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
            <p className="text-xs text-gray-400">© 2024 Hookia. Todos los derechos reservados.</p>
            
          </footer>
        </div>
      </main>
    </>
  )
}

function ContactInfo({ icon, text, type }) {
  const getAriaLabel = () => {
    switch(type) {
      case 'email':
        return 'Correo electrónico';
      case 'phone':
        return 'Teléfono';
      case 'address':
        return 'Dirección';
      default:
        return 'Información de contacto';
    }
  }

  return (
    <div className="flex items-center space-x-3" aria-label={getAriaLabel()}>
      {icon}
      <span className="text-gray-300">
        {type === 'email' ? (
          <a href={`mailto:${text}`} className="hover:underline">{text}</a>
        ) : type === 'phone' ? (
          <a href={`tel:${text.replace(/\s/g, '')}`} className="hover:underline">{text}</a>
        ) : (
          text
        )}
      </span>
    </div>
  )
}