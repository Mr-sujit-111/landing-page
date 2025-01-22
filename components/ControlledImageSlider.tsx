"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Collaborative Workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "Cutting-edge Technology",
  },
  {
    src: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
    title: "Data-driven Insights",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Innovative Solutions",
  },
]

export default function ControlledImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900 snap-section">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].title}
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {images[currentIndex].title}
            </motion.h2>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button variant="outline" size="icon" onClick={prevSlide} className="bg-white/10 hover:bg-white/20">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button variant="outline" size="icon" onClick={nextSlide} className="bg-white/10 hover:bg-white/20">
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 image-slider-dots">
        {images.map((_, index) => (
          <motion.button
            key={index}
            className={`image-slider-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  )
}

