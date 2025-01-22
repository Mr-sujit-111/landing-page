"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Footer from "./Footer"

export default function CTA() {
  return (
    <section id="cta" className="h-screen flex-col justify-end relative flex items-center bg-background snap-section">
      <div className="container h-full flex flex-col items-center justify-center mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Streamline Your Workflow?
        </motion.h2>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Join thousands of satisfied customers and take your productivity to the next level.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button size="lg" variant="secondary">
            Start Your Free Trial
          </Button>
        </motion.div>
      </div>
      <Footer />
    </section>
  )
}

