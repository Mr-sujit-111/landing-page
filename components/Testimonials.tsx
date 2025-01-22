"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "StreamLine has revolutionized our team's workflow. We're more productive than ever!",
    author: "Jane Doe",
    title: "CEO, TechCorp",
  },
  {
    quote: "The analytics feature alone has saved us countless hours of manual reporting.",
    author: "John Smith",
    title: "Project Manager, InnovateCo",
  },
  {
    quote: "I can't imagine managing our projects without StreamLine. It's a game-changer.",
    author: "Emily Brown",
    title: "Team Lead, StartupX",
  },
  {
    quote: "StreamLine has revolutionized our team's workflow. We're more productive than ever!",
    author: "Jane Doe",
    title: "CEO, TechCorp",
  },
  {
    quote: "The analytics feature alone has saved us countless hours of manual reporting.",
    author: "John Smith",
    title: "Project Manager, InnovateCo",
  },
  {
    quote: "I can't imagine managing our projects without StreamLine. It's a game-changer.",
    author: "Emily Brown",
    title: "Team Lead, StartupX",
  },
  {
    quote: "StreamLine has revolutionized our team's workflow. We're more productive than ever!",
    author: "Jane Doe",
    title: "CEO, TechCorp",
  },
  {
    quote: "The analytics feature alone has saved us countless hours of manual reporting.",
    author: "John Smith",
    title: "Project Manager, InnovateCo",
  },
  {
    quote: "I can't imagine managing our projects without StreamLine. It's a game-changer.",
    author: "Emily Brown",
    title: "Team Lead, StartupX",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="h-screen flex items-center bg-background snap-section">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold gradient-text text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-card-foreground mb-4">{`"${testimonial.quote}"`}</p>
              <div className="flex items-center">
                <Image
                  src={`https://i.pravatar.cc/40?img=${index}`}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

