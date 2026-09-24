'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import Image from 'next/image'

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animação de entrada suave dos elementos centralizados
      gsap.fromTo(".hero-content-center > *",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1.1, stagger: 0.15, ease: "power2.out" }
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={heroRef} 
      className="relative w-full min-h-screen flex items-center justify-center pt-36 pb-20 px-6 overflow-hidden"
      style={{ backgroundColor: '#FAF8F5' }} // Branco quase creme (Off-white aconchegante e humanizado)
    >
      
      {/* Elemento sutil de fundo (gradiente suave e limpo para dar profundidade) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-3xl" />
      </div>

      {/* Conteúdo Principal Centralizado */}
      <div className="relative z-10 max-w-4xl mx-auto text-center hero-content-center flex flex-col items-center">
        
        {/* Logo Altamente Ampliado no Topo da Hero */}
        <div className="relative w-80 h-28 md:w-[450px] md:h-36 mb-6 flex items-center justify-center overflow-visible">
          <Image 
            src="/logocorreto.png" 
            alt="LogicStack UX Logo" 
            fill
            className="object-contain scale-225 md:scale-250"
            priority
          />
        </div>

        {/* Título Principal Centralizado */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Transformamos ideias em <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">
            experiências digitais
          </span> de alto impacto
        </h1>

        {/* Subtítulo Clean */}
        <p className="text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Combinamos metodologias ágeis, design thinking avançado e engenharia de software de ponta para desenvolver produtos digitais que convertem e geram valor real para sua marca.
        </p>

        {/* Botões de Ação Centralizados */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="https://wa.me/5512982776902" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm transition-all shadow-md shadow-sky-500/20 hover:shadow-lg"
          >
            Fale Conosco →
          </Link>
          
          <Link 
            href="#cases" 
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-sm transition-all shadow-sm"
          >
            Ver Cases
          </Link>
        </div>

      </div>
    </section>
  )
}