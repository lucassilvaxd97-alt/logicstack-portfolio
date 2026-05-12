'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação do texto gigante de fundo (Parallax invertido)
      gsap.fromTo(".bg-text", 
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 0.03, 
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
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 60%",
        }
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={footerRef} id="contato" className="relative min-h-screen flex flex-col items-center justify-center bg-[#020203] border-t border-white/5 overflow-hidden pt-20">
      
      {/* Luz de fundo sutil para focar no botão */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      {/* TEXTO GIGANTE DE FUNDO (Animado) */}
      <h2 className="bg-text text-white text-[15vw] font-black tracking-[-0.08em] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none whitespace-nowrap">
        LOGICSTACK
      </h2>
      
      {/* CONTEÚDO CENTRAL */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center flex-1 w-full px-6">
        
        <div className="footer-content flex items-center gap-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <p className="text-blue-400 font-mono text-sm tracking-[0.4em] uppercase">
            System Ready // Awaiting Input
          </p>
        </div>

        <h3 className="footer-content text-5xl md:text-7xl font-bold tracking-tight mb-12">
          Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 italic font-light">Deployment?</span>
        </h3>
        
        {/* BOTÃO DE ALTA CONVERSÃO */}
       <a 
  href="https://wa.me/5512982776902?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20um%20projeto."
  target="_blank" 
  rel="noopener noreferrer"
  className="footer-content group relative px-12 md:px-16 py-6 md:py-8 border border-white/10 rounded-full overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(30,144,255,0.2)] bg-white/[0.02] backdrop-blur-md inline-block cursor-pointer"
>
  {/* Efeito de preenchimento que vem da esquerda */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
  
  <div className="relative z-10 flex items-center gap-4">
    <span className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-white group-hover:text-blue-100 transition-colors">
      Iniciar Projeto
    </span>
    {/* Seta animada no hover */}
    <svg 
      className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300 text-blue-500" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </div>
</a>
      </div>

      {/* MINI-FOOTER REAL (Base da tela) */}
      <div className="footer-content relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between border-t border-white/5 mt-auto gap-6 md:gap-0">
        <p className="text-white/30 font-mono text-xs tracking-widest uppercase">
          © 2026 LogicStack UX. All rights reserved.
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
      // Abre Instagram e Whats em nova aba, e-mail na mesma janela
      target={link.name !== 'E-mail' ? '_blank' : '_self'}
      rel={link.name !== 'E-mail' ? 'noopener noreferrer' : undefined}
      className="text-white/40 hover:text-blue-400 text-xs font-mono tracking-widest uppercase transition-colors"
    >
      {link.name}
    </a>
  ))}
</div>
</div>

    </section>
  )
}