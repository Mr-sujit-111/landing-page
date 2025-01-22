"use client"

import AdditionalTestimonials from "@/components/AdditionalTestimonials"
import ControlledImageSlider from "@/components/ControlledImageSlider"
import CTA from "@/components/CTA"
import Features from "@/components/Features"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ImageSlider from "@/components/ImageSlider"
import Pricing from "@/components/Pricing"
import SecondHero from "@/components/SecondHero"
import Testimonials from "@/components/Testimonials"
import { ThemeProvider } from "next-themes"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col ">
        <Header />
        <main className="flex-grow snap-container">
          <Hero />
          <ControlledImageSlider />
          <Features />
          <ImageSlider />
          <Testimonials />
          <SecondHero />
          <Pricing />
          <AdditionalTestimonials />
          <CTA />
        </main>

      </div>
    </ThemeProvider>
  )
}

