import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import ChatComponent from "@/components/ui/chat"
import Link from "next/link"

export default function ContactoPage() {
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
                Contáctanos
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Estamos aquí para responder tus preguntas y ayudarte a transformar tu negocio con IA.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 mt-4" >Envíanos un mensaje</h2>
                  <h3 className="mb-3">Intenta con &quot;Quiero Agendar una cita&quot;</h3>
                  <ChatComponent />
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 mt-4">Información de contacto</h2>
                  <div className="space-y-4">
                    <ContactInfo icon={<Mail className="h-6 w-6 text-purple-500" />} text="info@hookia.com" />
                    <ContactInfo icon={<Phone className="h-6 w-6 text-purple-500" />} text="+34 123 456 789" />
                    <ContactInfo
                      icon={<MapPin className="h-6 w-6 text-purple-500" />}
                      text="Calle Innovación, 123, 28001 Madrid, España"
                    />
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <p className="text-sm text-gray-400">Horario de atención: Lunes a Viernes, 9:00 AM - 6:00 PM (CET)</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
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

function ContactInfo({ icon, text }) {
  return (
    <div className="flex items-center space-x-3">
      {icon}
      <span className="text-gray-300">{text}</span>
    </div>
  )
}

