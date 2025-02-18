import Head from "next/head"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, Target } from "lucide-react"

export default function NosotrosPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HookIA",
    "description": "Empresa especializada en soluciones de IA para negocios",
    "foundingDate": "2023",
    "url": "https://hookia.com/nosotros",
    "inLanguage": "es-ES",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES"
    }
  }

  return (
    <>
     <Head>
        <html lang="es" /> {/* Declaración explícita del idioma español */}
        <title>Sobre HookIA | Transformando Empresas con IA Avanzada</title>
        <meta name="description" content="Descubre HookIA, líder en soluciones de IA empresarial. Conoce nuestro equipo, misión y valores que impulsan la innovación tecnológica desde 2023." />
        <meta name="keywords" content="HookIA, inteligencia artificial, IA empresarial, automatización, innovación tecnológica" />
        
        {/* Configuración regional e idioma */}
        <meta httpEquiv="content-language" content="es-ES" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:locale:alternate" content="es_CR" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Sobre HookIA | Transformando Empresas con IA Avanzada" />
        <meta property="og:description" content="Descubre HookIA, líder en soluciones de IA empresarial. Conoce nuestro equipo, misión y valores que impulsan la innovación tecnológica." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hookia.es/nosotros" />
        
        {/* Canonical y alternativas de idioma */}
        <link rel="canonical" href="https://hookia.es/nosotros" hrefLang="es-ES" />
        <link rel="alternate" href="https://hookia.es/nosotros" hrefLang="es-ES" />
        <link rel="alternate" href="https://cr.hookia.es/nosotros" hrefLang="es-CR" />
        <link rel="alternate" href="https://hookia.es/nosotros" hrefLang="x-default" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
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
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Hookia: Innovación en Automatización Empresarial
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Especialistas en soluciones avanzadas de IA para negocios. Transformamos procesos complejos en 
                  <span className="text-blue-400 font-semibold"> flujos de trabajo eficientes</span>, impulsando 
                  <span className="text-blue-400 font-semibold"> crecimiento medible</span> y escalabilidad sostenible.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="w-full py-12 md:py-24 lg:py-32" aria-label="Características principales">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<Users className="h-12 w-12 mb-4 text-blue-500" aria-hidden="true" />}
                  title="Nuestro Equipo"
                  description="Un grupo diverso de expertos en IA, ingeniería y negocios, unidos por la pasión por la innovación."
                />
                <FeatureCard
                  icon={<Lightbulb className="h-12 w-12 mb-4 text-blue-500" aria-hidden="true" />}
                  title="Nuestra Misión"
                  description="Ayudar a empresas pequeñas y grandes a automatizar su tiempo y recursos con soluciones de IA avanzada."
                />
                <FeatureCard
                  icon={<Target className="h-12 w-12 mb-4 text-blue-500" aria-hidden="true" />}
                  title="Nuestros Valores"
                  description="Innovación, integridad y compromiso con el éxito de nuestros clientes guían cada decisión que tomamos."
                />
              </div>
            </div>
          </section>

          {/* History Section */}
          <section className="w-full py-12 md:py-24 lg:py-32" aria-label="Historia de la empresa">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestra Historia</h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Fundada en 2024, HookIA nació de la visión de un grupo de emprendedores apasionados por la IA y su
                  potencial para transformar las empresas. Desde entonces, hemos estado a la pendientes de la innovación
                  en IA, desarrollando soluciones que permiten a las empresas de todos los tamaños aprovechar el poder de
                  la inteligencia artificial para impulsar su crecimiento y eficiencia.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10">
      <CardContent className="flex flex-col items-center p-6">
        {icon}
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-center text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}