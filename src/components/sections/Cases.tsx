'use client'
import { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { 
    id: "01", 
    title: "Ct Vanessa Carvalho", 
    slug: "ct-vanessa", 
    tag: "HealthTech", 
    desc: "Sistemas de alta precisão para gestão clínica e acompanhamento de alunos.",
    image: "/cases/ctvanessa1.jpeg"
  },
  { 
    id: "02", 
    title: "HabitFlow", 
    slug: "habitflow", 
    tag: "Productivity", 
    desc: "Gamificação focada em psicologia comportamental e formação de rotinas.",
    image: "/cases/habitflow1.jpeg"
  },
  { 
    id: "03", 
    title: "Dona Benita Pizzaria", 
    slug: "dona-benita-pizzaria", 
    tag: "Food & Delivery", 
    desc: "Sistema de pedidos integrado e otimização de fluxo para cozinha e atendimento.",
    image: "/cases/donabenita1.png" // Ajuste o caminho da imagem se necessário
  }
]

export const Cases = () => {
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card")
      
      cards.forEach((card: any) => {
        // Rolagem 100% fluida, leve e sem travamentos
        gsap.fromTo(card, 
          { 
            y: 50, 
            opacity: 0, 
            scale: 0.98 
          },
          { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef} 
      id="cases"
      className="py-32 relative z-10 transition-colors duration-500"
      style={{ backgroundColor: '#F0F4F8' }} // Mantém a harmonia com o fundo azul claro
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-20">
          <span className="text-blue-700 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block font-bold">
            Selected Works
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900">
            Projetos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-900 italic font-light">Estratégicos.</span>
          </h2>
        </div>

        {/* Container de Cards Verticais (Sem efeito sticky pesado) */}
        <div className="flex flex-col gap-12 md:gap-20">
          {projects.map((project) => (
            <div key={project.id} className="project-card-wrapper">
              <div className="project-card w-full min-h-[50vh] bg-white border border-slate-200/80 hover:border-blue-500/50 transition-all duration-300 rounded-[36px] overflow-hidden flex flex-col md:flex-row shadow-xl shadow-slate-200/50 relative group">
                
                {/* Lado do Texto */}
                <div className="flex-1 p-10 md:p-16 flex flex-col justify-center relative z-10">
                  <span className="text-blue-700 font-mono text-xs tracking-[0.4em] uppercase mb-6 font-semibold">
                    {project.id} // {project.tag}
                  </span>
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-none">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-lg md:text-xl font-normal max-w-md leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="mt-10">
                     <Link 
                       href={`/cases/${project.slug}`} 
                       className="px-8 py-3.5 border border-slate-300 rounded-full text-xs tracking-[0.25em] font-bold text-slate-800 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all uppercase flex items-center gap-4 w-fit shadow-sm"
                     >
                       Ver Projeto
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:bg-white transition-colors" />
                     </Link>
                  </div>
                </div>

                {/* Lado Visual (Imagem Real da UI) */}
                <div className="flex-1 relative overflow-hidden flex items-center justify-center min-h-[35vh] md:min-h-full bg-slate-100">
                  <Image 
                    src={project.image}
                    alt={`Preview do projeto ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}