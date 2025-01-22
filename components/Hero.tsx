"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen flex items-center bg-background overflow-hidden snap-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold gradient-text mb-6 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Streamline Your Workflow
          </motion.h1>
          <motion.p
            className="text-xl gradient-text/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Boost productivity and collaboration with our all-in-one project management solution.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="lg" variant="secondary" className="mr-4">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className=" ">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

