import Link from "next/link";
import  ChatComponent  from "../../components/ui/chat";
import { BotIcon as  Mail, Phone } from "lucide-react";


export default function contactanosPage() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <header className="px-4 lg:px-6 h-14 flex items-center w-full">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-3xl">HookIA</span>
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
      <main className="flex-1 w-full flex flex-col items-center">
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Contacta con HookIA
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Estamos aquí para responder a tus preguntas y ayudarte a impulsar tu negocio con IA.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4 flex flex-col items-center">
                <h2 className="text-2xl font-bold">Envíanos un mensaje</h2>
                <h3>Intenta mandando &quot;Quiero agendar una cita&quot;</h3>
               <ChatComponent />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Información de contacto</h2>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@hookia.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+34 900 123 456</span>
                  </div>
                </div>
              </div>
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
  )
}
