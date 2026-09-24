'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-in-out border-b ${
        scrolled 
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-slate-200/60 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Lado Esquerdo: Logo Maximizado */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex items-center group"
        >
          {/* Contêiner expandido e scale forçado para o conteúdo preencher a barra */}
          <div className="relative w-60 h-16 md:w-72 md:h-20 flex items-center overflow-visible group-hover:opacity-95 transition-all duration-300">
            <Image 
              src="/logocorreto.png" 
              alt="LogicStack UX Logo" 
              fill
              className="object-contain object-left scale-150 md:scale-175 origin-left"
              priority
            />
          </div>
        </div>

        {/* Centro: Links de Navegação */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Manifesto', id: 'manifesto' },
            { name: 'Cases', id: 'cases' },
            { name: 'DNA Técnico', id: 'tech' },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.id)}
              className="text-slate-700 hover:text-sky-600 text-xs font-semibold tracking-wider uppercase transition-colors duration-200"
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
          className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm shadow-sky-500/20 hover:shadow-md inline-block"
        >
          Fale Conosco
        </a>

      </div>
    </nav>
  )
}