"use client"

import { Button } from "@/components/ui/button"
import { Bot, Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import React, { useState } from "react"

function NavLink({ href, children, onClick }) {
  return (
    <Link href={href} onClick={onClick} className="text-white hover:text-purple-300 transition-colors">
      {children}
    </Link>
  )
}

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
      >
        <Link href="/" className="flex items-center space-x-2">
          <Bot className="w-8 h-8 text-blue-500" />
          <span className="text-white font-medium text-xl">Hookia</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/nosotros">Nosotros</NavLink>
          <NavLink href="/contactanos">Contacto</NavLink>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menú"
        >
          <Menu className="w-6 h-6" />
        </Button>
      </motion.nav>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm p-4 z-50"
        >
          <div className="flex flex-col space-y-4">
            <NavLink href="/" onClick={() => setMobileMenuOpen(false)}>Inicio</NavLink>
            <NavLink href="/nosotros" onClick={() => setMobileMenuOpen(false)}>Nosotros</NavLink>
            <NavLink href="/contactanos" onClick={() => setMobileMenuOpen(false)}>Contacto</NavLink>
          </div>
        </motion.div>
      )}
    </header>
  )
}