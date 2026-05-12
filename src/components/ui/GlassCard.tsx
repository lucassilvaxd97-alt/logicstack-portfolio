// src/components/ui/GlassCard.tsx
import { motion } from "framer-motion";

export const GlassCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-surface backdrop-blur-md p-6 ${className}`}
    >
      {/* Efeito de brilho na borda ao passar o mouse (Border Beam) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};