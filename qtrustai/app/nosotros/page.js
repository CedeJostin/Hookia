import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Lightbulb, Target } from "lucide-react"

export default function NosotrosPage() {
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

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Sobre Hookia
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Descubre quiénes somos y nuestra misión de transformar el mundo empresarial con IA avanzada.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
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

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestra Historia</h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Fundada en 2023, HookIA nació de la visión de un grupo de emprendedores apasionados por la IA y su
                potencial para transformar las empresas. Desde entonces, hemos estado a la vanguardia de la innovación
                en IA, desarrollando soluciones que permiten a las empresas de todos los tamaños aprovechar el poder de
                la inteligencia artificial para impulsar su crecimiento y eficiencia.
              </p>
            </div>
          </div>
        </section>
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

