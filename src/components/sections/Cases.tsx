'use client'
import { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image' // <-- NOVO: Importando Image para a capa
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Projetos agora puxando as capas oficiais da LogicStack UX
const projects = [
  { 
    id: "01", 
    title: "Ct Vanessa Carvalho", 
    slug: "ct-vanessa", 
    tag: "HealthTech", 
    desc: "Sistemas de alta precisão para gestão clínica e acompanhamento de alunos.",
    image: "/cases/ctvanessa1.jpeg" // Capa real
  },
  { 
    id: "02", 
    title: "HabitFlow", 
    slug: "habitflow", 
    tag: "Productivity", 
    desc: "Gamificação focada em psicologia comportamental e formação de rotinas.",
    image: "/cases/habitflow1.jpeg" // Capa real
  },
  { 
    id: "03", 
    title: "IronPro", 
    slug: "ironpro", 
    tag: "Fitness", 
    desc: "Gestão fitness de elite e monitoramento de performance atlética.",
    image: "/cases/ironpro1.png" // Capa real
  }
]

export const Cases = () => {
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card")
      
      cards.forEach((card: any, i) => {
        // Efeito de "Cair" e Empilhar
        gsap.fromTo(card, 
          { 
            y: 100, 
            opacity: 0, 
            scale: 0.9,
            filter: "blur(10px)" 
          },
          { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            filter: "blur(0px)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 40%",
              scrub: 1,
            }
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="bg-[#020203] py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20">
          <span className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block drop-shadow-[0_0_10px_rgba(30,144,255,0.4)]">
            Selected Works
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Projetos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 italic font-light">Estratégicos.</span>
          </h2>
        </div>

        {/* Container de Cards Verticais */}
        <div className="flex flex-col gap-20 md:gap-40">
          {projects.map((project) => (
            <div key={project.id} className="project-card-wrapper sticky top-20">
              <div className="project-card w-full min-h-[60vh] bg-white/[0.02] backdrop-blur-3xl border border-white/10 hover:border-blue-500/30 transition-colors duration-500 rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl relative group">
                
                {/* Lado do Texto */}
                <div className="flex-1 p-10 md:p-20 flex flex-col justify-center relative z-10">
                  <span className="text-blue-500 font-mono text-xs tracking-[0.5em] uppercase mb-6 drop-shadow-md">
                    {project.id} // {project.tag}
                  </span>
                  <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-none">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-xl font-light max-w-md leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="mt-12">
                     <Link 
                       href={`/cases/${project.slug}`} 
                       className="px-10 py-4 border border-white/10 rounded-full text-[10px] tracking-[0.3em] font-bold hover:bg-blue-600 hover:border-blue-500 transition-all uppercase flex items-center gap-4 w-fit"
                     >
                       View Blueprint
                       <div className="w-1 h-1 rounded-full bg-blue-400 group-hover:bg-white transition-colors" />
                     </Link>
                  </div>
                </div>

                {/* Lado Visual (Imagem Real da UI) */}
                <div className="flex-1 relative overflow-hidden flex items-center justify-center min-h-[40vh] md:min-h-full">
                  {/* Máscara escura para garantir a leitura e dar ar premium */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#020203] via-transparent to-transparent z-10 hidden md:block" />
                  
                  <Image 
                    src={project.image}
                    alt={`Preview do projeto ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
                  />
                  
                  {/* Efeito de Overlay Tecnológico */}
                  <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}