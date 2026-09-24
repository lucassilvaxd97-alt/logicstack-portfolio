'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação suave do texto gigante de fundo em tom claro/sutil
      gsap.fromTo(".bg-text", 
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 0.04, // Ajustado para aparecer perfeitamente no fundo claro
          duration: 1.5, 
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: true
          }
        }
      )

      // Animação de entrada dos elementos centrais
      gsap.from(".footer-content", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 70%",
        }
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={footerRef} 
      id="contato" 
      className="relative min-h-screen flex flex-col items-center justify-center border-t border-slate-200/80 overflow-hidden pt-20 transition-colors duration-500"
      style={{ backgroundColor: '#FAF8F5' }} // Fundo creme acolhedor unificado
    >
      
      {/* Luz de fundo sutil para destacar a área de contato */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-200/40 blur-[130px] rounded-full pointer-events-none" />

      {/* TEXTO GIGANTE DE FUNDO (Adaptado para o tema claro) */}
      <h2 className="bg-text text-slate-900 text-[14vw] font-black tracking-[-0.08em] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap">
        LOGICSTACK
      </h2>
      
      {/* CONTEÚDO CENTRAL */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center flex-1 w-full px-6 max-w-4xl mx-auto">
        
        {/* Status Badge */}
        <div className="footer-content flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
          <span className="text-blue-700 font-mono text-xs tracking-widest uppercase font-semibold">
            Agenda de Projetos Aberta // Vamos conversar?
          </span>
        </div>

        {/* Título de Conversão Forte e Humano */}
        <h3 className="footer-content text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 leading-[1.1]">
          Pronto para transformar sua ideia em um <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-900 italic font-light">produto de alto valor?</span>
        </h3>
        
        <p className="footer-content text-slate-600 text-lg md:text-xl font-normal max-w-2xl mb-12 leading-relaxed">
          Conte-nos sobre o seu desafio. Nossa equipe de engenharia e UX está pronta para desenhar a solução ideal para o seu negócio.
        </p>

        {/* BOTÃO DE ALTA CONVERSÃO (Estilo corporativo elegante) */}
        <a 
          href="https://wa.me/5512982776902?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20o%20meu%20projeto."
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-content group relative px-10 md:px-14 py-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/35 transition-all duration-300 inline-flex items-center gap-4 cursor-pointer"
        >
          <span className="text-base md:text-lg font-semibold tracking-wide uppercase">
            Solicitar Orçamento Agora
          </span>
          {/* Seta animada no hover */}
          <svg 
            className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

      </div>

      {/* MINI-FOOTER REAL (Base da tela) */}
      <div className="footer-content relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between border-t border-slate-200/80 mt-auto gap-6 md:gap-0">
        <p className="text-slate-500 font-mono text-xs tracking-widest uppercase">
          © 2026 LogicStack UX. Todos os direitos reservados.
        </p>
        
        {/* Links de Contato/Redes Sociais */}
        <div className="flex items-center gap-8">
          {[
            { name: 'Instagram', url: 'https://instagram.com/logicstack.ux' },
            { name: 'WhatsApp', url: 'https://wa.me/5512982776902' },
            { name: 'E-mail', url: 'mailto:logicstackux@outlook.com' }
          ].map((link) => (
            <a 
              key={link.name} 
              href={link.url} 
              target={link.name !== 'E-mail' ? '_blank' : '_self'}
              rel={link.name !== 'E-mail' ? 'noopener noreferrer' : undefined}
              className="text-slate-600 hover:text-blue-700 text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

    </section>
  )
}