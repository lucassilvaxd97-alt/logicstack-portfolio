import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        primary: {
          light: '#70B8FF',
          DEFAULT: '#1E90FF',
          dark: '#003366',
        },
        surface: 'rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'gradient-logic': 'linear-gradient(135deg, #70B8FF 0%, #1E90FF 100%)',
      },
      // AS ANIMAÇÕES PRECISAM ESTAR AQUI DENTRO
      animation: {
        marquee: 'marquee 40s linear infinite', // Aumentei para 40s para ficar mais "luxo/lento"
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  plugins: [],
};

export default config;