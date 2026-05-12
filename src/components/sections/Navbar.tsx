'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Detecta o scroll para aplicar o efeito "Glass" na Navbar
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Função suave para rolar até as âncoras
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out border-b ${
        scrolled 
          ? 'bg-[#020203]/70 backdrop-blur-md border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Lado Esquerdo: Logo Maior e sem o texto */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex items-center group"
        >
          {/* Container maior para o logo e com brilho (drop-shadow) no hover */}
          <div className="relative w-32 h-10 md:w-40 md:h-12 group-hover:scale-105 transition-all duration-300 group-hover:[filter:drop-shadow(0_0_12px_rgba(30,144,255,0.6))]">
            <Image 
              src="/logo-navbar.png" 
              alt="LogicStack Logo" 
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </div>

        {/* Centro: Links de Navegação com Efeito NEON */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Manifesto', id: 'manifesto' },
            { name: 'Cases', id: 'cases' },
            { name: 'DNA Técnico', id: 'tech' },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.id)}
              className="text-white/60 hover:text-blue-400 hover:[text-shadow:0_0_15px_rgba(30,144,255,0.8),0_0_30px_rgba(30,144,255,0.4)] text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Lado Direito: CTA de Contato */}
        <a 
  href="https://wa.me/5512982776902" 
  target="_blank" 
  rel="noopener noreferrer"
  className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white tracking-widest uppercase hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-[0_0_15px_rgba(30,144,255,0)] hover:shadow-[0_0_20px_rgba(30,144,255,0.6)] inline-block"
>
  Deploy // Start
</a>

      </div>
    </nav>
  )
}