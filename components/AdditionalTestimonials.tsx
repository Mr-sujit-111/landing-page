"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "StreamLine has transformed the way we manage projects. It's intuitive and powerful.",
    author: "Alex Johnson",
    title: "CTO, FutureTech",
  },
  {
    quote: "The real-time collaboration features have made our remote work seamless.",
    author: "Sarah Lee",
    title: "Product Manager, InnovateCo",
  },
  {
    quote: "StreamLine's customer support is exceptional. They're always there when we need them.",
    author: "Michael Chen",
    title: "Operations Director, GlobalSolutions",
  },
  {
    quote: "StreamLine has transformed the way we manage projects. It's intuitive and powerful.",
    author: "Alex Johnson",
    title: "CTO, FutureTech",
  },
  {
    quote: "The real-time collaboration features have made our remote work seamless.",
    author: "Sarah Lee",
    title: "Product Manager, InnovateCo",
  },
  {
    quote: "StreamLine's customer support is exceptional. They're always there when we need them.",
    author: "Michael Chen",
    title: "Operations Director, GlobalSolutions",
  },
  {
    quote: "StreamLine has transformed the way we manage projects. It's intuitive and powerful.",
    author: "Alex Johnson",
    title: "CTO, FutureTech",
  },
  {
    quote: "The real-time collaboration features have made our remote work seamless.",
    author: "Sarah Lee",
    title: "Product Manager, InnovateCo",
  },
  {
    quote: "StreamLine's customer support is exceptional. They're always there when we need them.",
    author: "Michael Chen",
    title: "Operations Director, GlobalSolutions",
  },
]

export default function AdditionalTestimonials() {
  return (
    <section id="testimonials" className="h-screen relative flex items-center bg-background snap-section">
      <div className="container mx-auto">
        <h2 className="text-4xl gradient-text font-bold text-center mb-12">More Success Stories</h2>
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
                  src={`https://i.pravatar.cc/40?img=${index + 10}`}
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

