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
          y: 50, 
          opacity: 0, 
          scale: 0.98 
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      id="tech"
      className="py-32 relative z-10 overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: '#FAF8F5' }} // Fundo creme acolhedor combinando com a Hero
    >
      
      {/* Elemento decorativo de fundo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Título da Seção */}
        <div className="mb-20">
          <span className="text-blue-700 font-mono text-xs tracking-[0.4em] uppercase mb-4 block font-bold">
            LogicStack Engine // DNA
          </span>
          <h2 className="text-5xl md:text-[70px] font-bold tracking-[-0.05em] leading-[0.95] text-slate-900">
            Stack de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-900 italic font-light">Especialista.</span>
          </h2>
        </div>

        {/* Grid com Cards limpos e elegantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stackCategories.map((item, index) => (
            <div 
              key={index} 
              className="stack-block p-10 md:p-12 bg-white border border-slate-200/80 hover:border-blue-500/50 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 rounded-[32px] group relative overflow-hidden"
            >
              {/* Efeito hover sutil interno */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col h-full relative z-10">
                <span className="text-blue-700 font-mono text-xs mb-6 font-bold tracking-widest">
                  0{index + 1} //
                </span>
                
                {/* Título da Categoria */}
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                  {item.category}
                </h3>
                
                {/* Descrição */}
                <p className="text-slate-600 font-normal mb-10 leading-relaxed text-base md:text-lg">
                  {item.description}
                </p>

                {/* Badges de Tecnologias */}
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {item.techs.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-xs font-mono text-blue-800 tracking-wider group-hover:bg-blue-100/70 group-hover:border-blue-200 transition-all shadow-sm"
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