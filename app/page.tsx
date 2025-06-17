"use client"

import { HeroSection2 } from "@/components/home/HeroSection2"
import { FeaturesSection } from "@/components/home/FeaturesSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full max-w-[2000px]">
        <HeroSection2 />
        <FeaturesSection />
      </div>
    </main>
  )
}