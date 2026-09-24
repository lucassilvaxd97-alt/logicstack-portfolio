'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Manifesto = () => {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Efeito de destaque no scroll com cores bem visíveis desde o início
      const lines = gsap.utils.toArray('.manifesto-line')
      
      lines.forEach((line: any) => {
        gsap.fromTo(line, 
          { color: "rgba(30, 58, 138, 0.55)", y: 25, filter: "blur(3px)" }, // Começa com um azul escuro já legível
          { 
            color: "rgba(15, 23, 42, 1)", // Fica totalmente preto/grafite escuro ao rolar
            y: 0, 
            filter: "blur(0px)",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              end: "top 50%",
              scrub: true,
            }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      id="manifesto"
      className="min-h-screen py-40 px-6 relative z-10 flex items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: '#F0F4F8' }} // Azul claro e suave para separar as seções
    >
      <div ref={containerRef} className="max-w-7xl w-full">
        <div className="flex flex-col gap-16 md:gap-24">
          
          {/* TÍTULO 1: O Gancho */}
          <h2 className="manifesto-line text-5xl md:text-8xl font-bold tracking-[-0.05em] leading-[0.9] text-slate-900">
            Nós não escrevemos <br /> 
            <span className="italic font-light text-blue-900">Apenas código.</span>
          </h2>

          {/* TÍTULO 2: A Solução */}
          <h2 className="manifesto-line text-5xl md:text-8xl font-bold tracking-[-0.05em] leading-[0.9] text-right text-slate-900">
            Nós arquitetamos <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-indigo-950">Ecossistemas Digitais.</span>
          </h2>

          {/* Parágrafo de Missão da Empresa */}
          <div className="manifesto-line mt-12 flex justify-end">
             <p className="max-w-2xl text-xl md:text-3xl text-slate-800 font-medium leading-relaxed text-right border-r-4 border-blue-600 pr-6">
               A <strong className="text-slate-950 font-bold">LogicStack UX</strong> nasceu para elevar o padrão do desenvolvimento web. Fundimos design de alta fidelidade com engenharia de ponta para construir produtos que escalam, convertem e impressionam.
             </p>
          </div>

          {/* OS 3 PILARES DA EMPRESA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
            {[
              { 
                title: "Engenharia // Stack", 
                desc: "Arquitetura moderna e escalável. Do React ao banco de dados, usamos as melhores tecnologias para garantir performance extrema e baixa latência." 
              },
              { 
                title: "Experiência // UI", 
                desc: "Design não é apenas estética, é funcionalidade. Criamos interfaces imersivas e orgânicas que antecipam cada movimento e intenção do seu usuário." 
              },
              { 
                title: "Delivery // Escala", 
                desc: "Transformamos ideias complexas em plataformas prontas para o mercado. Acompanhamos o seu produto do primeiro wireframe ao deploy final." 
              }
            ].map((item, i) => (
              <div key={i} className="manifesto-line border-l-2 border-blue-600 pl-8 py-4 transition-colors duration-500">
                <span className="text-blue-900 font-mono text-xs tracking-widest uppercase mb-4 block font-bold">
                  0{i+1} — {item.title}
                </span>
                <p className="text-lg md:text-xl text-slate-800 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}