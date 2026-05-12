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
// BANCO DE DADOS DOS CASES (Atualizado)
// ==========================================
const casesData: Record<string, any> = {
  'ct-vanessa': {
    title: 'CT Vanessa Carvalho',
    tag: 'Centro de Treinamento // Luta',
    stack: 'Next.js / Supabase',
    status: 'Em Produção',
    displayMode: 'landscape', // <-- Invertido: Agora é janela de Desktop (Mac)
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
    status: 'Em Produção', // <-- Atualizado
    displayMode: 'landscape',
    liveUrl: null, 
    previewText: 'Status: Confidencial',
    cover: '', // <-- Vazio para forçar o banner de Surpresa
    img2: '/cases/habitflow1.jpeg', // <-- Fotos jogadas para baixo
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
  'ironpro': {
    title: 'IronPro',
    tag: 'Performance Fitness',
    stack: 'React / MySQL',
    status: 'Em Produção',
    displayMode: 'portrait', // <-- Invertido: Agora é modo Celular (App)
    liveUrl: 'https://ironproo.netlify.app/', 
    previewText: 'Dashboard Atlético // Mobile App',
    cover: '/cases/ironpro1.png', 
    img2: '/cases/ironpro2.jpeg',
    img3: '/cases/ironpro3.jpeg',
    scores: [
      { value: 'MySQL', label: 'Database Engine' },
      { value: 'High', label: 'Fidelidade de Dados' },
      { value: 'Elite', label: 'Padrão de UX' }
    ],
    desafio: 'O esporte de elite não aceita margem de erro. O IronPro exigia um painel capaz de cruzar centenas de métricas de performance atlética, carga de treino e recuperação, entregando insights visuais precisos para treinadores e atletas sem sobrecarregar a interface gráfica.',
    solucao: 'Desenvolvemos pipelines de dados extremamente eficientes utilizando React e MySQL. A UI foi pensada no modo "Dark/High-Contrast" para facilitar a leitura em ambientes de treino. Cada gráfico e indicador de performance consulta o banco relacional de forma otimizada, entregando o mais puro estado da arte em engenharia de software para o mercado fitness.',
    labelImg2: 'Métricas de Elite // Data Viz',
    labelImg3: 'Monitoramento de Carga // UI'
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

  // Placeholder Estilizado (Usado no banner surpresa do HabitFlow)
  const PlaceholderImage = ({ aspect, text }: { aspect: string, text: string }) => (
    <div className={`w-full ${aspect} bg-[#050505] border border-white/5 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden`}>
      <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full animate-pulse" />
      <span className="font-mono text-sm md:text-lg text-blue-500 tracking-[0.3em] uppercase relative z-10 mb-2">{text}</span>
      <span className="font-mono text-[10px] text-white/30 tracking-[0.5em] uppercase relative z-10">Aguarde_</span>
    </div>
  );

  return (
    <main ref={pageRef} className="bg-[#020203] min-h-screen text-white pb-40 relative overflow-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-[#020203] to-transparent pointer-events-none">
        <Link href="/" className="text-white font-bold tracking-widest text-xs hover:text-blue-500 transition-colors uppercase pointer-events-auto">
          ← LOGICSTACK UX
        </Link>
        <span className="text-white/30 font-mono text-[10px] tracking-widest uppercase">
          Estudo de Caso // 2026
        </span>
      </nav>

      {/* HEADER */}
      <section className="pt-40 px-6 max-w-7xl mx-auto text-left relative z-10">
        <div className="reveal opacity-0 translate-y-10">
          <span className="text-blue-500 font-mono text-xs tracking-[0.5em] uppercase block mb-4">
            {project.tag}
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-12 uppercase italic leading-none">
            {project.title}
          </h1>
        </div>

        {/* INFO GRID */}
        <div className="reveal opacity-0 translate-y-10 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-10 mb-20 font-mono z-10 relative">
          <div><span className="block text-white/30 text-[10px] uppercase mb-2">Ciclo</span><p className="text-sm">2026</p></div>
          <div><span className="block text-white/30 text-[10px] uppercase mb-2">Engenharia</span><p className="text-sm text-blue-400">{project.stack}</p></div>
          <div><span className="block text-white/30 text-[10px] uppercase mb-2">Status</span><p className="text-sm">{project.status}</p></div>
          <div><span className="block text-white/30 text-[10px] uppercase mb-2">Sede</span><p className="text-sm">Jacareí, SP</p></div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="px-6 max-w-7xl mx-auto relative z-10">
        
        {/* ======================================================== */}
        {/* CAPA INTERATIVA (MINI BROWSER OU IMAGEM/SURPRESA) */}
        {/* ======================================================== */}
        <div className={`reveal opacity-0 translate-y-10 w-full rounded-[2rem] bg-[#0a0a0a] border border-white/20 overflow-hidden mb-32 relative shadow-2xl z-20 mx-auto
          ${project.displayMode === 'portrait' ? 'aspect-[9/19] max-w-[360px]' : 'aspect-video w-full'}`}
        >
           {project.liveUrl ? (
             <div className="w-full h-full flex flex-col relative bg-black">
                {/* Interface do Navegador */}
                {project.displayMode === 'portrait' ? (
                  // Notch do Celular (IronPro)
                  <div className="absolute top-0 w-full flex justify-center z-30 pointer-events-none mt-2">
                     <div className="w-32 h-7 bg-black rounded-full border border-white/10"></div>
                  </div>
                ) : (
                  // Barra Superior do Mac (CT Vanessa)
                  <div className="h-10 bg-[#1e1e1e] border-b border-white/5 flex items-center px-4 w-full z-30 shrink-0">
                    <div className="flex gap-2 mr-4">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                    </div>
                    <div className="mx-auto flex-1 max-w-md bg-[#0a0a0a] border border-white/10 rounded-md py-1 px-4 flex items-center justify-center gap-2">
                       <span className="text-white/20 text-[10px]">🔒</span>
                       <span className="text-white/40 text-[10px] font-mono tracking-widest">{project.liveUrl.replace('https://', '')}</span>
                    </div>
                  </div>
                )}

                {/* Iframe Funcional */}
                <iframe 
                  src={project.liveUrl}
                  className="w-full h-full flex-1 bg-white"
                  title={`Live preview of ${project.title}`}
                  sandbox="allow-scripts allow-same-origin allow-forms"
                />
             </div>
           ) : (
             // FALLBACK: RENDERIZA O BANNER SURPRESA (HabitFlow)
             <>
               {project.cover ? (
                  <Image 
                    src={project.cover} alt={project.title} fill sizes="(max-width: 1200px) 100vw, 1200px" priority
                    className={`transition-transform duration-700 group-hover:scale-105 ${project.displayMode === 'portrait' ? 'object-contain' : 'object-cover'}`} 
                  />
               ) : <PlaceholderImage aspect="h-full w-full" text="BREVE SURPRESA" />}
               <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-transparent to-transparent opacity-60 pointer-events-none" />
               <p className="absolute bottom-6 left-6 text-white/40 font-mono text-[10px] tracking-[0.6em] uppercase z-10 pointer-events-none">
                 {project.previewText}
               </p>
             </>
           )}
        </div>

        {/* SCORES */}
        <div className="reveal opacity-0 translate-y-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
           {project.scores.map((score: any, idx: number) => (
             <div key={idx} className="p-10 border border-white/5 bg-white/[0.01] rounded-3xl text-center backdrop-blur-sm">
                <span className="block text-blue-500 font-mono text-4xl font-bold mb-2">{score.value}</span>
                <span className="text-white/40 text-[10px] uppercase tracking-widest">{score.label}</span>
             </div>
           ))}
        </div>

        {/* SECUNDÁRIAS (FLOW) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="reveal opacity-0 translate-y-10 sticky top-32 space-y-32 pr-10">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tighter">O Desafio_</h2>
              <div className="space-y-6 text-white/50 text-xl leading-relaxed font-light">
                <p>{project.desafio}</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tighter text-blue-500">A Solução_</h2>
              <div className="space-y-6 text-white/50 text-xl leading-relaxed font-light border-l border-blue-500/30 pl-8">
                <p>{project.solucao}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-16">
            <div className="reveal opacity-0 translate-y-10 aspect-video rounded-3xl bg-white/[0.02] border border-white/10 relative overflow-hidden group">
              {project.img2 ? (
                  <Image src={project.img2} alt="Detail 1" fill sizes="600px" className="object-contain p-4 transition-transform duration-700 group-hover:scale-105" />
              ) : <PlaceholderImage aspect="aspect-video" text="[ IMAGEM EM ESPERA ]" />}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center italic font-mono text-[10px] tracking-widest uppercase pointer-events-none px-4 text-center">
                {project.labelImg2}
              </div>
            </div>

            <div className="reveal opacity-0 translate-y-10 aspect-video rounded-3xl bg-white/[0.02] border border-white/10 relative overflow-hidden group">
              {project.img3 ? (
                  <Image src={project.img3} alt="Detail 2" fill sizes="600px" className="object-contain p-4 transition-transform duration-700 group-hover:scale-105" />
              ) : <PlaceholderImage aspect="aspect-video" text="[ IMAGEM EM ESPERA ]" />}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center italic font-mono text-[10px] tracking-widest uppercase pointer-events-none px-4 text-center">
                {project.labelImg3}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT HUB - COMPLETO RESTAURADO */}
       <section className="mt-40 pt-20 border-t border-white/5 px-6 max-w-7xl mx-auto text-center relative overflow-hidden z-10">
        
        <div className="reveal opacity-0 translate-y-10 mb-16 flex justify-center">
          <div className="relative w-24 h-24 group">
            <div className="absolute inset-0 bg-blue-500/20 blur-[45px] rounded-full animate-pulse" />
            <Image src="/logo-navbar.png" alt="LogicStack UX" fill className="object-contain relative z-10" />
          </div>
        </div>

        <div className="reveal opacity-0 translate-y-10">
          <p className="text-blue-500 font-mono text-[10px] tracking-[0.8em] uppercase mb-8">Protocolo de Contato // Iniciado</p>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-16 leading-[0.85] uppercase italic">
            Pronto para projetar o <br /> <span className="text-white/20 italic font-light">próximo nível?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-32 font-mono">
            
            {/* WHATSAPP */}
            <a href="https://wa.me/5512999999999" target="_blank" className="group relative p-[1px] overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-transparent" />
              <div className="relative bg-[#020203] px-8 py-10 flex flex-col items-start gap-4 hover:bg-emerald-500/[0.02] transition-colors h-full rounded-lg">
                <span className="text-emerald-500 text-[9px] tracking-widest uppercase">Canal Direto // WhatsApp</span>
                <span className="text-white text-xl font-bold tracking-tight">Conversar Agora _</span>
                <div className="w-0 h-[1px] bg-emerald-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </a>

            {/* INSTAGRAM */}
            <a href="https://instagram.com/logicstackux" target="_blank" className="group relative p-[1px] overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
              <div className="relative bg-[#020203] px-8 py-10 flex flex-col items-start gap-4 hover:bg-white/[0.01] transition-colors h-full rounded-lg">
                <span className="text-white/40 text-[9px] tracking-widest uppercase">Social // Portfólio</span>
                <span className="text-white text-xl font-bold tracking-tight">Instagram _</span>
                <div className="w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
              </div>
            </a>

            {/* EMAIL */}
            <a href="mailto:contato@logicstackux.com" className="group relative p-[1px] overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-transparent" />
              <div className="relative bg-[#020203] px-8 py-10 flex flex-col items-start gap-4 hover:bg-blue-500/[0.02] transition-colors h-full rounded-lg">
                <span className="text-blue-500 text-[9px] tracking-widest uppercase">E-mail // Corporativo</span>
                <span className="text-white text-xl font-bold tracking-tight">Enviar Proposta _</span>
                <div className="w-0 h-[1px] bg-blue-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </a>

          </div>

          <Link href="/" className="group inline-flex flex-col items-center gap-6 py-10 mb-20">
            <span className="font-mono text-[10px] tracking-[1.5em] uppercase text-white/20 group-hover:text-blue-500 transition-colors">
              Encerrar_Terminal
            </span>
            <div className="w-8 h-[1px] bg-white/10 group-hover:w-32 group-hover:bg-blue-500 transition-all duration-700" />
          </Link>
        </div>
      </section>

    </main>
  )
}