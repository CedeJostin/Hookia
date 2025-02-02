"use client"

import { Button } from "@/components/ui/button"
import { Bot, Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
        >
            <Link href="/" className="flex items-center space-x-2">
                <Bot className="w-8 h-8 text-purple-500" />
                <span className="text-white font-medium text-xl">Hookia</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
                <NavLink href="/">Inicio</NavLink>
                <NavLink href="/nosotros">Nosotros</NavLink>
                <NavLink href="/contactanos">Contacto</NavLink>
            </div>

           

            <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="w-6 h-6" />
            </Button>
        </motion.nav>
    )
}

function NavLink({ href, children }) {
    return (
        <Link href={href} className="text-gray-300 hover:text-white transition-colors relative group">
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
        </Link>
    )
}
