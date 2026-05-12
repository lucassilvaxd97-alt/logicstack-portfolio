// src/components/ui/BentoCard.tsx
'use client'
import { motion } from 'framer-motion'
import { useState, useRef, MouseEvent } from 'react'

interface BentoProps {
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

export const BentoCard = ({ title, description, className, children }: BentoProps) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  // Manipula o movimento do mouse para calcular a posição do spotlight
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <motion.div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 0.99, y: -2 }} 
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative group overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#080809]/40 backdrop-blur-2xl p-8 ${className}`}
     style={
  {
    '--x': `${position.x}px`,
    '--y': `${position.y}px`,
    '--spotlight-color': 'rgba(30, 144, 255, 0.15)',
  } as React.CSSProperties
}
    >
      {/* Camada do Efeito Spotlight no Fundo */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"
        style={{
          background: `radial-gradient(600px circle at var(--x) var(--y), var(--spotlight-color), transparent 40%)`,
        }}
      />
      
      {/* Camada de Borda Iluminada (Border Beam) */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"
        style={{
          background: `radial-gradient(120px circle at var(--x) var(--y), rgba(255,255,255,0.3), transparent 40%)`,
          maskImage: `linear-gradient(black, black), linear-gradient(black, black)`,
          maskClip: `content-box, border-box`,
          maskComposite: `scallop`,
          WebkitMaskComposite: `source-out`,
          padding: '1px'
        }}
      />

      {/* Conteúdo do Card */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-white/95 tracking-tighter">{title}</h3>
          {description && <p className="text-sm text-gray-500 mt-2 font-medium max-w-[250px] leading-relaxed">{description}</p>}
        </div>
        <div className="mt-6 flex-1 flex items-center justify-center">
          {children}
        </div>
      </div>
    </motion.div>
  )
}