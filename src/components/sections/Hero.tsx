'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // Animação de entrada do indicador (vem do lado direito sutilmente)
      gsap.fromTo(".scroll-indicator", 
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 1.5, ease: "power4.out", delay: 1 }
      )

      // Animação da linha de luz caindo infinitamente
      gsap.fromTo(".scroll-line", 
        { top: "-50%" },
        { top: "150%", duration: 1.5, repeat: -1, ease: "power2.inOut" }
      )

    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden bg-[#020203]">
      
      {/* -----------------------------------------------------
          BACKGROUND: Vídeo Limpo no Centro
          ----------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none z-0">
       <video
  autoPlay
  loop
  muted
  playsInline // <-- Esse é o salvador da pátria no iOS
  preload="auto"
  className="w-full h-full object-cover" // Ajuste o Tailwind conforme seu layout
>
  <source src="/video-background.mp4" type="video/mp4" />
</video>

        {/* Camadas de Contraste */}
        <div className="absolute inset-0 bg-[#020203]/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020203] opacity-90" />
      </div>
      <div className="scroll-indicator absolute bottom-12 right-6 md:right-12 flex flex-col items-center gap-4 z-20 cursor-default">
         <span 
          className="text-white/40 font-mono text-[10px] tracking-[0.4em] uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
         <div className="w-[1px] h-16 md:h-24 bg-white/10 relative overflow-hidden flex justify-center">
          <div className="scroll-line absolute w-[3px] h-1/2 bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_10px_rgba(30,144,255,0.8)] rounded-full" />
        </div>
        
      </div>

    </section>
  )
}