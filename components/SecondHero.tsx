"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function SecondHero() {
  return (
    <section id="section-hero" className="h-screen relative flex items-center bg-background snap-section">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-bold gradient-text mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {"Transform Your Team's Efficiency"}
        </motion.h2>
        <motion.p
          className="text-xl gradient-text mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Unlock the full potential of your team with our advanced collaboration tools and real-time analytics.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button size="lg" variant="outline">
            Schedule a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

