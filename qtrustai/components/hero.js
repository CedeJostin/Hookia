"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText, Sparkles } from "lucide-react"
import { RoboAnimation } from "@/components/robo-animation"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl font-bold tracking-tight mb-4">
              <span className="text-white">Hookia:</span> 
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent block mt-2">
                Automatización Avanzada para el Crecimiento de Negocios
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Impulsamos la eficiencia operativa con IA innovadora.
            <strong className="block mt-2 text-white">+40% de crecimiento</strong> en empresas que automatizan con nosotros.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contactanos">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 p-3 rounded-lg">
                Empieza Ahora
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Animated robot */}
      <div className="absolute bottom-0 right-0 w-96 h-96 hidden md:block transition-all duration-300">
        <RoboAnimation />
      </div>
    </div>
  )
}

