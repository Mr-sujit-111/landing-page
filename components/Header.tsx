"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Zap } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.header
      className="py-4 px-6 bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Zap className="h-8 w-8 text-primary" />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#features" className="text-foreground/60 hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="#testimonials" className="text-foreground/60 hover:text-foreground transition-colors">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-foreground/60 hover:text-foreground transition-colors">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </motion.header>
  )
}

