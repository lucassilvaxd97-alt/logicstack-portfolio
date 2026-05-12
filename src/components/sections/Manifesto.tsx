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
      // Efeito de "Acender" o texto conforme o scroll
      const lines = gsap.utils.toArray('.manifesto-line')
      
      lines.forEach((line: any) => {
        gsap.fromTo(line, 
          { color: "rgba(255,255,255,0.05)", y: 50, filter: "blur(10px)" },
          { 
            color: "rgba(255,255,255,1)", 
            y: 0, 
            filter: "blur(0px)",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              end: "top 45%",
              scrub: true,
            }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen bg-[#020203] py-40 px-6 relative z-10 flex items-center justify-center">
      <div ref={containerRef} className="max-w-7xl w-full">
        <div className="flex flex-col gap-12 md:gap-20">
          
          {/* TÍTULO 1: O Gancho */}
          <h2 className="manifesto-line text-5xl md:text-8xl font-bold tracking-[-0.05em] leading-[0.9]">
            Nós não escrevemos <br /> 
            <span className="italic font-light opacity-50">Apenas código.</span>
          </h2>

          {/* TÍTULO 2: A Solução (Substituímos "Arquitetação" por algo mais forte) */}
          <h2 className="manifesto-line text-5xl md:text-8xl font-bold tracking-[-0.05em] leading-[0.9] text-right">
            Nós arquitetamos <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Ecossistemas Digitais.</span>
          </h2>

          {/* NOVO: Parágrafo de Missão da Empresa */}
          <div className="manifesto-line mt-12 flex justify-end">
             <p className="max-w-2xl text-xl md:text-3xl text-white/70 font-light leading-relaxed text-right border-r-2 border-blue-500 pr-6">
                A <strong className="text-white font-medium">LogicStack UX</strong> nasceu para elevar o padrão do desenvolvimento web. Fundimos design de alta fidelidade com engenharia de ponta para construir produtos que escalam, convertem e impressionam.
             </p>
          </div>

          {/* OS 3 PILARES DA EMPRESA (Reescritos com mais autoridade) */}
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
              <div key={i} className="manifesto-line border-l border-white/10 pl-8 py-4 hover:border-blue-500/50 transition-colors duration-500">
                <span className="text-blue-500 font-mono text-xs tracking-widest uppercase mb-4 block">
                  0{i+1} — {item.title}
                </span>
                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
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