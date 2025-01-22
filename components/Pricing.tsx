"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Basic",
    price: "$9",
    features: ["5 Projects", "Basic Analytics", "Email Support"],
  },
  {
    name: "Pro",
    price: "$29",
    features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "Team Collaboration"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Custom Solutions", "Dedicated Account Manager", "On-Premise Option", "24/7 Phone Support"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="h-screen relative flex items-center bg-background snap-section">
      <div className="container max-h-[60%] h-full mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Choose Your Plan
        </motion.h2>
        <div className="grid h-full  grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-card flex justify-between flex-col p-8 h-full rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">
                  {plan.price}
                  <span className="text-sm font-normal">/month</span>
                </p>
                <ul className="mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center mb-2">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="w-full text-white">{plan.name === "Enterprise" ? "Contact Us" : "Get Started"}</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

