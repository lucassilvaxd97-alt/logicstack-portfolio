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
    <main ref={mainRef} className="bg-[#020203] text-white selection:bg-blue-500/30 overflow-x-hidden relative">
      
      {/* 1. NAVBAR NO TOPO */}
      <Navbar />

      {/* 2. HERO (O vídeo de fundo e a marca) */}
      <div id="home">
        <Hero />
      </div>

      {/* 3. MANIFESTO (A alma da empresa) */}
      <div id="manifesto">
        <Manifesto />
      </div>

      {/* 4. CASES (Projetos em destaque) */}
      <div id="cases">
        <Cases />
      </div>

      {/* 5. TECH STACK (Tecnologias utilizadas) */}
      <div id="tech">
        <TechStack />
      </div>

      {/* 6. FOOTER / CTA FINAL (O fechamento com o botão Iniciar Projeto) */}
      <Footer />

    </main>
  )
}