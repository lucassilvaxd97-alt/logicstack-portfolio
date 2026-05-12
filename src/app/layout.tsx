// src/app/layout.tsx
import './global.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="dark">
      <body className={`${inter.className} bg-[#020203] text-white selection:bg-primary/30`}>
        {/* Efeito de luz difusa no fundo (Radial Gradient) */}
        <div className="fixed inset-0 z-[-1] overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-blue-900/10 blur-[150px]" />
        </div>
        {children}
      </body>
    </html>
  )
}