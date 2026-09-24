// src/app/page.tsx
'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

// Importação das nossas seções modulares
import { Navbar } from '@/src/components/sections/Navbar'
import { Hero } from '@/src/components/sections/Hero'
import { Manifesto } from '@/src/components/sections/Manifesto'
import { Cases } from '@/src/components/sections/Cases'
import { TechStack } from '@/src/components/sections/TechStack'
import { Footer } from '@/src/components/sections/Footer' // <-- NOVO FOOTER IMPORTADO

gsap.registerPlugin(ScrollTrigger)

export const WaveDivider = ({ fromColor = '#FAF8F5', toColor = '#E2E8F0', flipped = false }) => {
  return (
    <div 
      className="relative w-full overflow-hidden leading-none z-20" 
      style={{ backgroundColor: fromColor }}
    >
      <svg 
        className={`relative block w-full h-32 md:h-48 lg:h-56 transition-all drop-shadow-md ${flipped ? 'scale-x-[-1]' : ''}`} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 180" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0,30 C400,180 800,-60 1200,90 L1200,180 L0,180 Z" 
          fill={toColor}
        ></path>
      </svg>
    </div>
  )
}


export default function Home() {
  const mainRef = useRef(null)

  useEffect(() => {
    // Configuração do Smooth Scroll (Física Apple/Lenis)
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

return (
    <main ref={mainRef} className="bg-[#FAF8F5] text-slate-900 selection:bg-blue-500/30 overflow-x-hidden relative">
      
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. HERO */}
      <div id="home">
        <Hero />
      </div>
      <WaveDivider fromColor="#FAF8F5" toColor="#F0F4F8" />

      {/* 3. MANIFESTO */}
      <div id="manifesto">
        <Manifesto />
      </div>
      <WaveDivider fromColor="#F0F4F8" toColor="#F0F4F8" flipped={true} />

      {/* 4. CASES */}
      <div id="cases">
        <Cases />
      </div>
      <WaveDivider fromColor="#F0F4F8" toColor="#FAF8F5" />

      {/* 5. TECH STACK */}
      <div id="tech">
        <TechStack />
      </div>
      <WaveDivider fromColor="#FAF8F5" toColor="#FAF8F5" flipped={true} />

      {/* 6. FOOTER */}
      <Footer />

    </main>
  )
}