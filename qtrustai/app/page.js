"use client";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { SparklesCore } from "@/components/sparkles";
import { FloatingPaper } from "@/components/floating-paper";
import ChatComponent from "@/components/ui/chat";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, BarChart, Package, GraduationCap } from "lucide-react";
import { useState } from 'react';
import Head from "next/head";



<Head>
  <meta name="google-site-verification" content="tu-código-de-verificación" />
  <meta name="facebook-domain-verification" content="bjp8wxkw78csq7cg8wyvyxomvog97k" />
</Head>



export default function Home() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      icon: <Users className="h-12 w-12 mb-4 text-blue-400 mt-5" />,
      title: "Asistentes Virtuales de IA",
      shortDescription: "Automatización de procesos administrativos y toma de decisiones",
      fullDescription: `Algoritmos avanzados de IA (Toma de decisiones basada en árboles de decisión y machine learning).

Secretaría Autónoma 24/7:
- Automatización de agendas (agendar, reprogramar o cancelar citas en segundos)
- Envío inteligente de recordatorios multicanales (email, SMS, WhatsApp)
- Alertas proactivas para evitar conflictos o sobrecupos

Beneficio clave: Libera hasta 15 horas semanales en gestión operativa.`
    },
    {
      icon: <Lightbulb className="h-12 w-12 mb-4 text-blue-400 mt-5" />,
      title: "Atención al Cliente Automatizada",
      shortDescription: "Experiencia del cliente premium y ventas sin fricciones",
      fullDescription: `Gestión de Clientes en Tiempo Real:
- Reservas autogestionables por el cliente (web, app, redes sociales)
- Confirmaciones automáticas con recordatorios escalonados (24h y 1h antes)
- Integración con calendarios digitales (Google Calendar, Outlook)

Ventas y Facturación Inteligente:
- Chatbots conversacionales para resolver dudas y recomendar productos
- Procesamiento de pedidos con notificación instantánea al equipo


Beneficio clave: Aumenta las ventas recurrentes un 30% con seguimiento automatizado.`
    },
    {
      icon: <Package className="h-12 w-12 mb-4 text-blue-400 mt-5" />,
      title: "Gestión de Inventario",
      shortDescription: "Optimización de stock y reducción de pérdidas",
      fullDescription: `Control Inteligente de Stock:
- Actualización automática de inventario (suma/resta con cada venta o compra)
- Alertas predictivas para reposición y prevención de sobrestock


Beneficio clave: Minimiza un 90% los errores de inventario y evita ventas perdidas.`
    },
    {
      icon: <GraduationCap className="h-12 w-12 mb-4 text-blue-400 mt-5" />,
      title: "Consultoría Estratégica",
      shortDescription: "Transformación digital integral",
      fullDescription: `Auditoría de Eficiencia Operativa:
- Diagnóstico de cuellos de botella y pérdidas financieras ocultas
- Plan personalizado para automatizar el 70% de tareas repetitivas

Capacitación Especializada:
- Entrenamiento en herramientas de IA para equipos comerciales y administrativos

Beneficio clave: Mejora hasta un 50% la productividad en 3 meses.`
    }
  ];

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

          <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden flex flex-col items-center">
            <FloatingPaper count={6} />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-20">
              Servicios de Automatización Inteligente
            </h2>
          
            <div className="container mx-auto px-4 md:px-6 relative z-10 mt-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.shortDescription}
                    onClick={() => {
                      setSelectedFeature(feature);
                      setIsModalOpen(true);
                    }}
                  />
                ))}
              </div>
            </div>
          </section>

          {isModalOpen && (
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setIsModalOpen(false)}
            >
              <div 
                className="bg-white/5 rounded-lg p-6 max-w-2xl w-full border border-white/10 backdrop-blur-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end mb-4">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Cerrar modal"
                  >
                    ✕
                  </button>
                </div>
                <div className="flex flex-col items-center text-left">
                  <div className="mb-4">{selectedFeature?.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{selectedFeature?.title}</h3>
                  <div className="text-gray-300 whitespace-pre-line space-y-4">
                    {selectedFeature?.fullDescription.split('\n\n').map((section, index) => (
                      <div key={index} className="mb-4">
                        {section.split('\n').map((line, lineIndex) => (
                          <p 
                            key={lineIndex} 
                            className={
                              line.startsWith('-') ? 'ml-4' : 
                              line.includes('Beneficio clave') ? 'mt-4 text-purple-300 font-semibold' : 
                              'mb-2'
                            }
                          >
                            {line.replace('- ', '• ')}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

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

          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
            <p className="text-xs text-gray-400">© 2024 Hookia. Todos los derechos reservados.</p>
          </footer>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </div>
      </main>
    </>
  )
}

function FeatureCard({ icon, title, description, onClick }) {
  return (
    <Card 
      className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors cursor-pointer h-full"
      onClick={onClick}
    >
      <CardContent className="flex flex-col items-center p-6 h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg font-bold mb-2 text-white text-center">{title}</h3>
        <p className="text-center text-gray-400 flex-grow">{description}</p>
        <button className="text-blue-400 hover:text-blue-300 mt-4">
          Ver detalles →
        </button>
      </CardContent>
    </Card>
  )
}