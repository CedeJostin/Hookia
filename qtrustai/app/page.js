import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { FloatingPaper } from "@/components/floating-paper"
import ChatComponent from "@/components/ui/chat"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, Target } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
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
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />

        {/* About Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Sobre Hookia
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Somos pioneros en la automatización inteligente, impulsando el futuro de los negocios con IA avanzada.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <FloatingPaper count={6} />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Users className="h-12 w-12 mb-4 text-purple-500" />}
                title="Nuestro Equipo"
                description="Un grupo diverso de expertos en IA, ingeniería y negocios, unidos por la pasión por la innovación."
              />
              <FeatureCard
                icon={<Lightbulb className="h-12 w-12 mb-4 text-purple-500" />}
                title="Nuestra Misión"
                description="Democratizar la IA y la automatización para empresas de todos los tamaños, impulsando la eficiencia y el crecimiento."
              />
              <FeatureCard
                icon={<Target className="h-12 w-12 mb-4 text-purple-500" />}
                title="Nuestros Valores"
                description="Innovación, integridad y compromiso con el éxito de nuestros clientes guían cada decisión que tomamos."
              />
            </div>
          </div>
        </section>

       

        {/* Chat Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <FloatingPaper count={4} />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Chatea con Nosotros</h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                Estamos aquí para ayudarte con cualquier pregunta que tengas.
              </p>
            </div>
            <ChatComponent />
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
          <p className="text-xs text-gray-400">© 2024 Hookia. Todos los derechos reservados.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
              Términos de Servicio
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
              Privacidad
            </Link>
          </nav>
        </footer>
      </div>
    </main>
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

