'use client'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stackCategories = [
  {
    category: "Frontend Architecture",
    techs: ["Next.js 16+", "React", "TypeScript", "Tailwind CSS"],
    description: "Interfaces de alta fidelidade com foco em UX Motion e performance extrema."
  },
  {
    category: "Backend & Engine",
    techs: ["Node.js", "Edge Runtime", "REST/GraphQL", "Serverless Functions"],
    description: "Lógica de negócio robusta e APIs escaláveis para processamento de dados em tempo real."
  },
  {
    category: "Database & Storage",
    techs: ["Supabase", "PostgreSQL", "Redis", "Vector Databases"],
    description: "Gestão inteligente de dados com foco em integridade e baixa latência."
  },
  {
    category: "Frameworks & Motion",
    techs: ["GSAP", "Framer Motion", "Lenis", "Three.js"],
    description: "Engenharia visual aplicada para criar experiências imersivas e orgânicas."
  }
]

export const TechStack = () => {
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".stack-block", 
        { 
          y: 60, 
          opacity: 0, 
          scale: 0.98 
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-40 bg-[#020203] relative z-10 border-t border-white/10 overflow-hidden">
      
      {/* 1. LUZ DE FUNDO (Glow Atmosférico para quebrar o escuro) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Título mais iluminado */}
        <div className="mb-20">
          <span className="text-blue-400 font-mono text-sm tracking-[0.4em] uppercase mb-4 block drop-shadow-[0_0_10px_rgba(30,144,255,0.5)]">
            LogicStack Engine // DNA
          </span>
          <h2 className="text-5xl md:text-[80px] font-bold tracking-[-0.05em] leading-[0.95] text-white">
            Stack de <br />
            <span className="text-blue-100 italic font-light opacity-90">Especialista.</span>
          </h2>
        </div>

        {/* Grid com Cards mais visíveis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stackCategories.map((item, index) => (
            <div 
              key={index} 
              className="stack-block p-10 md:p-12 bg-gradient-to-br from-white/[0.06] to-transparent border border-white/10 rounded-[32px] hover:border-blue-400/50 hover:shadow-[0_0_40px_rgba(30,144,255,0.1)] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Efeito hover interno (luz que acende quando passa o mouse) */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col h-full relative z-10">
                <span className="text-blue-400 font-mono text-sm mb-6 font-bold">0{index + 1} //</span>
                
                {/* Textos com alto contraste */}
                <h3 className="text-3xl font-bold mb-4 tracking-tight text-white group-hover:text-blue-100 transition-colors">
                  {item.category}
                </h3>
                
                {/* Passou de white/40 para white/70 (muito mais legível) */}
                <p className="text-white/70 font-light mb-10 leading-relaxed text-lg">
                  {item.description}
                </p>

                {/* Badges iluminadas como botões */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {item.techs.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-5 py-2.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-mono text-blue-200 tracking-wider group-hover:bg-blue-500/20 group-hover:border-blue-400/40 transition-all shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  )
}