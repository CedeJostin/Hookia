import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BotIcon as Robot, Users, Lightbulb, Target } from 'lucide-react'
import "./globals.css"

export default function Page() {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="/">
            <Robot className="h-6 w-6 mr-2" />
            <span className="font-bold text-lg">TrustIA</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
              Inicio
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/nosotros">
              Nosotros
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contacto">
              Contacto
            </Link>
          </nav>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Sobre TrustIA
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Somos pioneros en la automatización inteligente, impulsando el futuro de los negocios con IA avanzada.
                </p>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <Users className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-lg font-bold mb-2">Nuestro Equipo</h3>
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      Un grupo diverso de expertos en IA, ingeniería y negocios, unidos por la pasión por la innovación.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <Lightbulb className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-lg font-bold mb-2">Nuestra Misión</h3>
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      Democratizar la IA y la automatización para empresas de todos los tamaños, impulsando la eficiencia y el crecimiento.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <Target className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-lg font-bold mb-2">Nuestros Valores</h3>
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      Innovación, integridad y compromiso con el éxito de nuestros clientes guían cada decisión que tomamos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Únete a la Revolución de la IA
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Descubre cómo TrustIA puede transformar tu negocio con soluciones de IA personalizadas.
                </p>
                <Button asChild>
                  <Link href="/contacto">Contáctanos</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 TrustIA. Todos los derechos reservados.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Términos de Servicio
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacidad
            </Link>
          </nav>
        </footer>
      </div>
    );
  }