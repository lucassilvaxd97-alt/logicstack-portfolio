'use client'
import { useEffect, useRef, use } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

interface PageProps {
  params: Promise<{ slug: string }>
}

// ==========================================
// BANCO DE DADOS DOS CASES (Atualizado com Dona Benita)
// ==========================================
const casesData: Record<string, any> = {
  'ct-vanessa': {
    title: 'CT Vanessa Carvalho',
    tag: 'Centro de Treinamento // Luta',
    stack: 'Next.js / Supabase',
    status: 'Em Produção',
    displayMode: 'responsive', 
    liveUrl: 'https://ctvanessacarvalho.netlify.app/', 
    previewText: 'Arquitetura de Gestão // Dashboard',
    cover: '/cases/ctvanessa1.jpeg',
    img2: '/cases/ctvanessa2.jpeg',
    img3: '/cases/ctvanessa3.jpeg',
    scores: [
      { value: '100%', label: 'Performance Lighthouse' },
      { value: '< 0.3s', label: 'Tempo de Resposta' },
      { value: 'UI/UX', label: 'Foco em Conversão' }
    ],
    desafio: 'Como digitalizar a experiência de um Centro de Treinamento de alta intensidade? O desafio foi criar uma plataforma que acompanhasse o ritmo dos atletas e a complexidade da gestão de turmas e graduações. Trabalhamos para garantir que a interface fosse robusta e direta ao ponto, eliminando burocracias e focando no que importa: o progresso dos alunos.',
    solucao: 'Projetamos uma infraestrutura baseada em TypeScript e Supabase, garantindo agilidade no acesso aos treinos e na gestão financeira do CT. O resultado é um sistema de alta performance que reflete a disciplina e a força da marca Vanessa Carvalho, potencializado pela engenharia da LogicStack UX.',
    labelImg2: 'Gestão Interna // Dashboard',
    labelImg3: 'Controle de Alunos // Blueprint'
  },
  'habitflow': {
    title: 'HabitFlow',
    tag: 'Produtividade Gamificada',
    stack: 'TypeScript / MySQL',
    status: 'Em Produção',
    displayMode: 'landscape',
    liveUrl: null, 
    previewText: 'Status: Confidencial',
    cover: '', 
    img2: '/cases/habitflow1.jpeg', 
    img3: '/cases/habitflow2.jpeg', 
    scores: [
      { value: '98%', label: 'Retenção Estimada' },
      { value: 'Zero', label: 'Fricção Cognitiva' },
      { value: 'Relacional', label: 'Arquitetura de Dados' }
    ],
    desafio: 'A psicologia comportamental nos diz que formar hábitos exige recompensas imediatas. O desafio arquitetônico do HabitFlow foi construir um sistema capaz de processar loops de gamificação em tempo real, sem que o usuário perceba o carregamento. Precisávamos de uma interface que fosse tão viciante quanto redes sociais, mas voltada para a produtividade.',
    solucao: 'Utilizamos gerenciamento de estado complexo e um backend robusto em MySQL para criar um feedback visual imediato a cada tarefa concluída. A arquitetura de dados relacional permite que a evolução do usuário seja computada instantaneamente, transformando a disciplina diária em uma experiência fluida e recompensadora.',
    labelImg2: 'Gamificação // UI State',
    labelImg3: 'Análise de Progresso // Dashboard'
  },
  'dona-benita-pizzaria': {
    title: 'Dona Benita Pizzaria',
    tag: 'Food & Delivery',
    stack: 'React / Node.js',
    status: 'Em Produção',
    displayMode: 'responsive', 
    liveUrl: null, 
    previewText: 'Sistema de Pedidos // Delivery',
    cover: '/cases/donabenita1.png', 
    img2: '/cases/donabenita2.png',
    img3: '/cases/donabenita3.png',
    scores: [
      { value: 'Fast', label: 'Fluxo de Pedidos' },
      { value: '100%', label: 'Controle de Cozinha' },
      { value: 'UX', label: 'Foco em Conversão' }
    ],
    desafio: 'O mercado de delivery exige agilidade extrema e zero atrito no momento do pedido. O desafio na Dona Benita Pizzaria foi estruturar um fluxo de cardápio digital altamente intuitivo, integrado diretamente com a operação da cozinha para eliminar erros e acelerar a expedição das entregas.',
    solucao: 'Desenvolvemos uma interface limpa e focada em conversão rápida, aliada a um painel de controle otimizado para os pedidos em tempo real. A arquitetura garante estabilidade mesmo em horários de pico, proporcionando uma experiência impecável tanto para o cliente quanto para a operação interna.',
    labelImg2: 'Cardápio Digital // UI Clean',
    labelImg3: 'Painel de Pedidos // Cozinha'
  }
}

export default function CaseStudy({ params }: PageProps) {
  const pageRef = useRef(null)
  const resolvedParams = use(params)
  const slug = resolvedParams.slug
  
  const project = casesData[slug] || casesData['ct-vanessa']

  useEffect(() => {
    window.scrollTo(0, 0)
    let ctx = gsap.context(() => {
      gsap.to(".reveal", { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power2.out" })
    }, pageRef)
    return () => ctx.revert()
  }, [slug])

  const PlaceholderImage = ({ aspect, text }: { aspect: string, text: string }) => (
    <div className={`w-full ${aspect} bg-slate-100 border border-slate-200 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden`}>
      <div className="absolute inset-0 bg-blue-500/5 blur-[60px] rounded-full animate-pulse" />
      <span className="font-mono text-sm md:text-lg text-blue-700 tracking-[0.3em] uppercase relative z-10 mb-2">{text}</span>
      <span className="font-mono text-[10px] text-slate-400 tracking-[0.5em] uppercase relative z-10">Aguarde_</span>
    </div>
  );

  const containerClasses = project.displayMode === 'portrait' 
    ? 'aspect-[9/19] max-w-[360px]' 
    : project.displayMode === 'responsive' 
    ? 'aspect-[9/19] max-w-[360px] md:aspect-video md:max-w-full' 
    : 'aspect-video w-full';

  return (
    <main ref={pageRef} className="bg-[#FAF8F5] min-h-screen text-slate-900 pb-40 relative overflow-hidden transition-colors duration-500">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-[#FAF8F5]/90 backdrop-blur-md border-b border-slate-200/60 pointer-events-auto">
        <Link href="/" className="text-slate-900 font-bold tracking-widest text-xs hover:text-blue-700 transition-colors uppercase">
          ← LOGICSTACK UX
        </Link>
        <span className="text-slate-500 font-mono text-[10px] tracking-widest uppercase">
          Estudo de Caso // 2026
        </span>
      </nav>

      {/* HEADER */}
      <section className="pt-40 px-6 max-w-7xl mx-auto text-left relative z-10">
        <div className="reveal opacity-0 translate-y-10">
          <span className="text-blue-700 font-mono text-xs tracking-[0.5em] uppercase block mb-4 font-bold">
            {project.tag}
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-12 uppercase italic leading-none text-slate-900">
            {project.title}
          </h1>
        </div>

        {/* INFO GRID */}
        <div className="reveal opacity-0 translate-y-10 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-slate-200 py-10 mb-20 font-mono z-10 relative">
          <div><span className="block text-slate-400 text-[10px] uppercase mb-2">Ciclo</span><p className="text-sm text-slate-800">2026</p></div>
          <div><span className="block text-slate-400 text-[10px] uppercase mb-2">Engenharia</span><p className="text-sm text-blue-700 font-semibold">{project.stack}</p></div>
          <div><span className="block text-slate-400 text-[10px] uppercase mb-2">Status</span><p className="text-sm text-slate-800">{project.status}</p></div>
          <div><span className="block text-slate-400 text-[10px] uppercase mb-2">Sede</span><p className="text-sm text-slate-800">Jacareí, SP</p></div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="px-6 max-w-7xl mx-auto relative z-10">
        
        {/* MOCKUP / CAPA */}
        <div className={`reveal opacity-0 translate-y-10 w-full rounded-[2rem] bg-white border border-slate-200 overflow-hidden mb-32 relative shadow-xl shadow-slate-200/50 z-20 mx-auto transition-all duration-500 ${containerClasses}`}>
           {project.liveUrl ? (
             <div className="w-full h-full flex flex-col relative bg-slate-50">
               
               {(project.displayMode === 'portrait' || project.displayMode === 'responsive') && (
                 <div className={`absolute top-0 w-full justify-center z-30 pointer-events-none mt-2 ${project.displayMode === 'responsive' ? 'flex md:hidden' : 'flex'}`}>
                    <div className="w-32 h-7 bg-slate-900 rounded-full border border-slate-700"></div>
                 </div>
               )}

               {(project.displayMode === 'landscape' || project.displayMode === 'responsive') && (
                 <div className={`h-10 bg-slate-100 border-b border-slate-200 items-center px-4 w-full z-30 shrink-0 ${project.displayMode === 'responsive' ? 'hidden md:flex' : 'flex'}`}>
                   <div className="flex gap-2 mr-4">
                     <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                     <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                     <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                   </div>
                   <div className="mx-auto flex-1 max-w-md bg-white border border-slate-200 rounded-md py-1 px-4 flex items-center justify-center gap-2">
                      <span className="text-slate-400 text-[10px]">🔒</span>
                      <span className="text-slate-600 text-[10px] font-mono tracking-widest">{project.liveUrl.replace('https://', '')}</span>
                   </div>
                 </div>
               )}

               <iframe 
                 src={project.liveUrl}
                 className="w-full h-full flex-1 bg-white"
                 title={`Live preview of ${project.title}`}
                 sandbox="allow-scripts allow-same-origin allow-forms"
               />
             </div>
           ) : (
             <>
               {project.cover ? (
                  <Image 
                    src={project.cover} alt={project.title} fill sizes="(max-width: 1200px) 100vw, 1200px" priority
                    className={`transition-transform duration-700 group-hover:scale-105 ${project.displayMode === 'portrait' ? 'object-contain' : 'object-cover'}`} 
                  />
               ) : <PlaceholderImage aspect="h-full w-full" text="BREVE SURPRESA" />}
             </>
           )}
        </div>

        {/* SCORES */}
        <div className="reveal opacity-0 translate-y-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
           {project.scores.map((score: any, idx: number) => (
             <div key={idx} className="p-10 border border-slate-200 bg-white rounded-3xl text-center shadow-sm">
                <span className="block text-blue-700 font-mono text-4xl font-bold mb-2">{score.value}</span>
                <span className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold">{score.label}</span>
             </div>
           ))}
        </div>

        {/* SECUNDÁRIAS (FLOW) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="reveal opacity-0 translate-y-10 sticky top-32 space-y-32 pr-10">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tighter text-slate-900">O Desafio_</h2>
              <div className="space-y-6 text-slate-600 text-xl leading-relaxed font-normal">
                <p>{project.desafio}</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tighter text-blue-700">A Solução_</h2>
              <div className="space-y-6 text-slate-600 text-xl leading-relaxed font-normal border-l-4 border-blue-600 pl-8">
                <p>{project.solucao}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-16">
            <div className="reveal opacity-0 translate-y-10 aspect-video rounded-3xl bg-white border border-slate-200 relative overflow-hidden group shadow-md">
              {project.img2 ? (
                  <Image src={project.img2} alt="Detail 1" fill sizes="600px" className="object-contain p-4 transition-transform duration-700 group-hover:scale-105" />
              ) : <PlaceholderImage aspect="aspect-video" text="[ IMAGEM EM ESPERA ]" />}
              <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center italic font-mono text-xs tracking-widest uppercase pointer-events-none px-4 text-center text-white">
                {project.labelImg2}
              </div>
            </div>

            <div className="reveal opacity-0 translate-y-10 aspect-video rounded-3xl bg-white border border-slate-200 relative overflow-hidden group shadow-md">
              {project.img3 ? (
                  <Image src={project.img3} alt="Detail 2" fill sizes="600px" className="object-contain p-4 transition-transform duration-700 group-hover:scale-105" />
              ) : <PlaceholderImage aspect="aspect-video" text="[ IMAGEM EM ESPERA ]" />}
              <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center italic font-mono text-xs tracking-widest uppercase pointer-events-none px-4 text-center text-white">
                {project.labelImg3}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT HUB (Integrado ao novo rodapé claro e limpo) */}
      <section className="mt-40 pt-20 border-t border-slate-200 px-6 max-w-7xl mx-auto text-center relative overflow-hidden z-10">
        <div className="reveal opacity-0 translate-y-10 mb-16 flex justify-center">
          <div className="relative w-24 h-24 group">
            <div className="absolute inset-0 bg-blue-500/10 blur-[45px] rounded-full animate-pulse" />
            <Image src="/logocorreto.png" alt="LogicStack UX" fill className="object-contain relative z-10" />
          </div>
        </div>

        <div className="reveal opacity-0 translate-y-10">
          <p className="text-blue-700 font-mono text-[10px] tracking-[0.8em] uppercase mb-8 font-bold">Protocolo de Contato // Iniciado</p>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-16 leading-[0.85] uppercase italic text-slate-900">
            Pronto para projetar o <br /> <span className="text-slate-300 italic font-light">próximo nível?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-32 font-mono">
            <a href="https://wa.me/5512982776902" target="_blank" className="group relative p-[1px] overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/40 to-transparent" />
              <div className="relative bg-white px-8 py-10 flex flex-col items-start gap-4 hover:bg-emerald-50/[0.02] transition-colors h-full rounded-xl border border-slate-200 shadow-sm">
                <span className="text-emerald-600 text-[9px] tracking-widest uppercase font-bold">Canal Direto // WhatsApp</span>
                <span className="text-slate-900 text-xl font-bold tracking-tight">Conversar Agora _</span>
                <div className="w-0 h-[2px] bg-emerald-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </a>
            <a href="https://instagram.com/logicstack.ux" target="_blank" className="group relative p-[1px] overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-300 to-transparent" />
              <div className="relative bg-white px-8 py-10 flex flex-col items-start gap-4 hover:bg-slate-50 transition-colors h-full rounded-xl border border-slate-200 shadow-sm">
                <span className="text-slate-500 text-[9px] tracking-widest uppercase font-bold">Social // Portfólio</span>
                <span className="text-slate-900 text-xl font-bold tracking-tight">Instagram _</span>
                <div className="w-0 h-[2px] bg-slate-900 transition-all duration-500 group-hover:w-full" />
              </div>
            </a>
            <a href="mailto:logicstackux@outlook.com" className="group relative p-[1px] overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-transparent" />
              <div className="relative bg-white px-8 py-10 flex flex-col items-start gap-4 hover:bg-blue-50/[0.02] transition-colors h-full rounded-xl border border-slate-200 shadow-sm">
                <span className="text-blue-700 text-[9px] tracking-widest uppercase font-bold">E-mail // Corporativo</span>
                <span className="text-slate-900 text-xl font-bold tracking-tight">Solicitar Proposta _</span>
                <div className="w-0 h-[2px] bg-blue-700 transition-all duration-500 group-hover:w-full" />
              </div>
            </a>
          </div>

          <Link href="/" className="group inline-flex flex-col items-center gap-6 py-10 mb-20">
            <span className="font-mono text-[10px] tracking-[1.5em] uppercase text-slate-400 group-hover:text-blue-700 transition-colors">
              Encerrar_Terminal
            </span>
            <div className="w-8 h-[1px] bg-slate-300 group-hover:w-32 group-hover:bg-blue-700 transition-all duration-700" />
          </Link>
        </div>
      </section>

    </main>
  )
}