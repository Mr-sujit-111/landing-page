"use client"

import { Rocket, Zap, Users, BarChart } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Rocket,
    title: "Quick Setup",
    description: "Get started in minutes with our intuitive onboarding process.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience unparalleled speed and performance.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team in real-time.",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Gain valuable insights with our powerful reporting tools.",
  },
]

export default function Features() {
  return (
    <section id="features" className="h-screen flex items-center bg-background snap-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose StreamLine?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

